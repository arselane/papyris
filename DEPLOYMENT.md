# Guide de Déploiement Cloudflare Pages

## 🚀 Déploiement Initial

### Étape 1 : Préparer le Projet

```bash
# 1. Vérifier que tout fonctionne en local
npm run build
npm run preview

# 2. Commit et push sur GitHub/GitLab
git add .
git commit -m "Ready for production"
git push origin main
```

### Étape 2 : Créer le Projet Cloudflare Pages

1. **Aller sur** : https://dash.cloudflare.com/
2. **Cliquer sur** : "Workers & Pages" (menu gauche)
3. **Cliquer sur** : "Create application" → "Pages" → "Connect to Git"
4. **Sélectionner** : Votre repository GitHub/GitLab

### Étape 3 : Configuration du Build

**Framework preset** : `Vite`

**Build command** :
```bash
npm run build
```

**Build output directory** :
```
dist
```

**Environment variables** (si besoin) :
- `NODE_VERSION` : `18` (recommandé)

**Configuration avancée** :
```yaml
Build command: npm run build
Build output directory: dist
Root directory: / (default)
```

### Étape 4 : Déployer

1. Cliquer sur **"Save and Deploy"**
2. Attendre 2-3 minutes (première fois)
3. Votre site sera disponible sur : `https://papyris.pages.dev`

---

## 🌐 Configuration du Domaine Personnalisé

### Option 1 : Domaine sur Cloudflare (Recommandé)

Si `papyris.dz` est déjà sur Cloudflare :

1. **Pages → Settings → Custom domains**
2. **Add custom domain** : `papyris.dz`
3. Cloudflare configure automatiquement les DNS ✅
4. Certificat SSL activé automatiquement ✅

### Option 2 : Domaine Externe

Si le domaine est ailleurs (Namecheap, GoDaddy, etc.) :

1. **Ajouter CNAME dans votre registrar** :
   ```
   Type: CNAME
   Name: @ (ou papyris)
   Value: papyris.pages.dev
   TTL: Auto
   ```

2. **Ajouter dans Cloudflare Pages** :
   - Custom domain : `papyris.dz`
   - Suivre les instructions de vérification

3. **Attendre propagation DNS** : 5 min à 48h

---

## ⚙️ Configuration Post-Déploiement

### 1. Headers de Sécurité (Déjà fait ✅)

Le fichier `public/_headers` sera automatiquement appliqué par Cloudflare.

**Vérifier après déploiement** :
```bash
curl -I https://papyris.dz
# Devrait afficher X-Frame-Options, X-Content-Type-Options, etc.
```

### 2. Redirections (Optionnel)

Créer `public/_redirects` si besoin :

```bash
# Rediriger www vers apex
https://www.papyris.dz/* https://papyris.dz/:splat 301

# Rediriger anciennes URLs
/old-page /new-page 301

# SPA fallback (déjà géré par Vite)
/* /index.html 200
```

### 3. Environment Variables

**Pages → Settings → Environment variables**

Exemple pour production :
```
VITE_API_URL=https://api.papyris.dz
VITE_SITE_URL=https://papyris.dz
```

---

## 🔒 Sécurité Cloudflare

### 1. SSL/TLS

**Pages → Settings → Security → SSL/TLS**

- Mode : **Full (strict)** ✅ (recommandé)
- Always Use HTTPS : **ON** ✅
- Automatic HTTPS Rewrites : **ON** ✅
- Minimum TLS Version : **1.2** ✅

### 2. Web Application Firewall (WAF)

**Security → WAF → Managed rules**

1. Activer : **Cloudflare Managed Ruleset**
2. Activer : **Cloudflare OWASP Core Ruleset**
3. Sensitivity : **Medium** (ou High si beaucoup de spam)

### 3. Bot Protection

**Security → Bots**

- Bot Fight Mode : **ON** ✅ (gratuit)
- Challenge Passage : **14 jours**
- JavaScript Detections : **ON**

### 4. Security Level

**Security → Settings**

- Security Level : **High** (pour site pro)
- Challenge Passage : **14 jours**
- Browser Integrity Check : **ON**

---

## ⚡ Optimisations Performance

### 1. Caching

**Caching → Configuration**

```yaml
Browser Cache TTL: 4 hours
Crawler Hints: ON
```

**Cache Rules** (optionnel) :
```
URL Pattern: papyris.dz/assets/*
Cache Level: Standard
Edge Cache TTL: 1 month
Browser Cache TTL: 1 month
```

### 2. Compression

**Speed → Optimization**

- Auto Minify : **JS, CSS, HTML** ✅
- Brotli : **ON** ✅
- Early Hints : **ON** ✅
- HTTP/3 (QUIC) : **ON** ✅
- 0-RTT Connection : **ON** ✅

### 3. Image Optimization (Optionnel - Payant)

Si beaucoup d'images :

**Speed → Image Optimization**

- Polish : **Lossless** (ou Lossy)
- WebP : **ON**
- Mirage : **ON** (lazy loading auto)

---

## 📊 Analytics & Monitoring

### 1. Web Analytics (Gratuit ✅)

**Analytics → Web Analytics**

1. Activer : **Enable Web Analytics**
2. Ajouter le snippet (automatique pour Pages)
3. Dashboard disponible dans Cloudflare

**Métriques disponibles** :
- Page views
- Unique visitors
- Top pages
- Referrers
- Device types
- Countries

### 2. Real User Monitoring (RUM)

**Speed → Measurements**

- Activer pour voir :
  - Core Web Vitals (LCP, FID, CLS)
  - Time to First Byte
  - Browser distribution

### 3. Logs (Optionnel - Payant)

**Analytics → Logs**

Pour voir logs détaillés (200 requêtes/mois gratuit)

---

## 🔄 CI/CD Automatique

### Déploiement Automatique

**Par défaut, Cloudflare déploie automatiquement** :

✅ Chaque `git push` sur `main` → Déploiement production  
✅ Chaque Pull Request → Preview deployment  

### Preview Deployments

Chaque PR crée une URL unique :
```
https://a1b2c3d4.papyris.pages.dev
```

**Configuration** :
- Pages → Settings → Builds & deployments
- Production branch : `main`
- Preview deployments : **Enabled** (toutes les branches)

### Build Hooks (Optionnel)

Pour déclencher builds manuellement :

1. **Pages → Settings → Build hooks**
2. **Create hook** : "Manual deploy"
3. Utiliser avec :
   ```bash
   curl -X POST https://api.cloudflare.com/client/v4/pages/webhooks/deploy/HOOK_TOKEN
   ```

---

## 🐛 Debugging & Rollback

### 1. Voir les Logs de Build

**Pages → Deployments → [Latest deployment] → Build log**

**Erreurs communes** :
```bash
# Erreur : npm install failed
Solution : Vérifier package.json, ajouter NODE_VERSION env var

# Erreur : Build command failed
Solution : Tester `npm run build` en local

# Erreur : 404 sur routes
Solution : Ajouter _redirects avec /* /index.html 200
```

### 2. Rollback

**Pages → Deployments**

1. Trouver déploiement précédent qui fonctionne
2. Cliquer sur **"···"** → **"Rollback to this deployment"**
3. Confirmation → Site restauré immédiatement ✅

### 3. Tester Avant Production

**Preview deployments** :
```bash
# Créer branche de test
git checkout -b test-feature

# Push
git push origin test-feature

# Cloudflare crée automatiquement :
# https://test-feature.papyris.pages.dev
```

---

## 📱 Configuration Avancée

### 1. Purge Cache

**Caching → Configuration → Purge Cache**

Options :
- Purge Everything (tout le cache)
- Purge by URL (URLs spécifiques)
- Purge by Tag (tags personnalisés)

**Quand purger** :
- Après mise à jour contenu important
- Après changement de design
- Après fix de bug critique

### 2. Page Rules (Optionnel)

**Rules → Page Rules**

Exemple pour performances :
```
URL: papyris.dz/*

Settings:
- Cache Level: Standard
- Browser Cache TTL: 4 hours
- Disable Performance
- Security Level: High
```

### 3. Rate Limiting (Protéger formulaires)

**Security → Rate Limiting Rules**

Exemple :
```yaml
Rule: Limit contact form
Match: 
  - URL contains "/quote"
  - Method: POST
Rate: 5 requests per 10 minutes per IP
Action: Block
```

---

## ✅ Checklist Post-Déploiement

### Vérifications Obligatoires

- [ ] Site accessible sur https://papyris.dz
- [ ] Certificat SSL valide (cadenas vert)
- [ ] Toutes les pages se chargent correctement
- [ ] Images optimisées chargent (WebP)
- [ ] Formulaires fonctionnent
- [ ] Simulateurs fonctionnent
- [ ] Responsive design OK (mobile/tablet/desktop)

### Sécurité

- [ ] Headers de sécurité présents (vérifier avec curl)
- [ ] SSL/TLS en mode Full (strict)
- [ ] WAF activé
- [ ] Bot Fight Mode activé
- [ ] Security Level : High

### Performance

- [ ] Auto Minify activé (JS, CSS, HTML)
- [ ] Brotli activé
- [ ] HTTP/3 activé
- [ ] Cache rules configurées
- [ ] Images optimisées (< 1MB chacune)

### Analytics

- [ ] Web Analytics activé
- [ ] Core Web Vitals configurés
- [ ] Tracking des conversions (formulaires)

### SEO

- [ ] Sitemap.xml accessible (/sitemap.xml)
- [ ] Robots.txt accessible (/robots.txt)
- [ ] Meta tags présents (vérifier source)
- [ ] Open Graph tags OK
- [ ] Google Search Console configuré (optionnel)

---

## 🚨 Support & Troubleshooting

### Problèmes Fréquents

**1. Site ne charge pas** :
```bash
# Vérifier statut Cloudflare
https://www.cloudflarestatus.com/

# Vérifier DNS
dig papyris.dz
nslookup papyris.dz

# Vérifier déploiement
Cloudflare Pages → Deployments → Status
```

**2. Erreur 522 (Connection timed out)** :
- Build timeout (max 20 min gratuit)
- Solution : Optimiser build ou upgrade plan

**3. Erreur 524 (Timeout)** :
- Page prend trop de temps à charger
- Solution : Optimiser code/images

**4. CSS/JS ne charge pas** :
- Vérifier chemins absolus/relatifs
- Vérifier `base` dans vite.config.ts
- Purger cache Cloudflare

### Commandes Utiles

```bash
# Tester build localement
npm run build && npm run preview

# Vérifier headers
curl -I https://papyris.dz

# Tester SSL
openssl s_client -connect papyris.dz:443 -servername papyris.dz

# Vérifier DNS
dig papyris.dz +short

# Simuler bot (tester Bot Fight Mode)
curl -A "bot" https://papyris.dz
```

---

## 📞 Resources

### Documentation Cloudflare
- Pages Docs : https://developers.cloudflare.com/pages/
- Vite on Pages : https://developers.cloudflare.com/pages/framework-guides/deploy-a-vite3-project/
- Custom domains : https://developers.cloudflare.com/pages/platform/custom-domains/

### Dashboard
- Cloudflare Pages : https://dash.cloudflare.com/
- Web Analytics : https://dash.cloudflare.com/?to=/:account/analytics-web

### Support
- Community : https://community.cloudflare.com/
- Status : https://www.cloudflarestatus.com/
- Discord : https://discord.gg/cloudflaredev

---

## 🎯 Résumé en 5 Étapes

1. **Connect to Git** → Connecter repo GitHub
2. **Configure Build** → `npm run build` + `dist`
3. **Deploy** → Attendre 3 minutes ✅
4. **Add Domain** → papyris.dz
5. **Configure Security** → Activer WAF + Bot Fight Mode

**Temps total** : 10-15 minutes

**Coût** : **0€** (plan gratuit largement suffisant)

---

Bon déploiement ! 🚀
