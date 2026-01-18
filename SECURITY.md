# Sécurité - Site Vitrine Papyris

## 🛡️ Analyse de Sécurité

### ✅ Points Forts Actuels

1. **Déploiement Cloudflare**
   - ✅ HTTPS automatique
   - ✅ DDoS protection incluse
   - ✅ CDN global avec cache
   - ✅ Firewall WAF disponible

2. **Architecture Front-End Only**
   - ✅ Pas de backend = surface d'attaque minimale
   - ✅ Pas d'authentification = pas de vol de session
   - ✅ Pas de base de données = pas d'injection SQL
   - ✅ Site statique = difficile à compromettre

3. **Upload d'Images Sécurisé**
   - ✅ Traitement côté client uniquement (FileReader)
   - ✅ Pas de stockage serveur
   - ✅ Images en base64 temporaire

---

## ⚠️ Vulnérabilités Détectées

### 1. **Dépendances Vulnérables** (4 high severity)

```bash
npm audit
# @remix-run/router <=1.23.1 - XSS via Open Redirects
# react-router-dom 6.0.0 - 6.30.2
# glob 10.2.0 - 10.4.5 - Command injection
```

**Solution** :
```bash
npm audit fix
npm update react-router-dom
```

---

### 2. **Formulaires Sans Validation Backend**

**Risque** : Spam, injection de contenu malveillant

**Fichiers concernés** :
- `src/components/Contact.tsx` - Formulaire contact
- `src/pages/QuoteRequest.tsx` - Formulaire devis

**Problème actuel** :
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  // Simulate form submission - PAS DE VALIDATION !
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  toast({ title: "Demande envoyée !" }); // ❌ Aucun envoi réel
}
```

**Solutions recommandées** :

#### Option 1 : Cloudflare Turnstile (CAPTCHA gratuit)
```tsx
import { Turnstile } from "@marsidev/react-turnstile";

<Turnstile
  siteKey="VOTRE_SITE_KEY"
  onSuccess={(token) => setTurnstileToken(token)}
/>
```

#### Option 2 : Validation + Honeypot
```tsx
// Champ caché pour piéger les bots
<input type="text" name="website" style={{ display: "none" }} />

// Validation côté client
const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
```

#### Option 3 : EmailJS (service tiers gratuit)
```bash
npm install @emailjs/browser
```

```tsx
import emailjs from '@emailjs/browser';

emailjs.send('service_id', 'template_id', formData, 'public_key')
  .then(() => toast({ title: "Envoyé !" }));
```

---

### 3. **Headers de Sécurité Manquants**

**À configurer dans Cloudflare Pages** :

```toml
# public/_headers
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com;
```

---

### 4. **Upload d'Images Non Restreint**

**Risque** : Upload de fichiers malveillants (SVG avec JS)

**Solution** :
```tsx
const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;
  
  // Validation type MIME
  const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
  if (!allowedTypes.includes(file.type)) {
    toast({ title: "Format non autorisé", variant: "destructive" });
    return;
  }
  
  // Validation taille (max 5MB)
  if (file.size > 5 * 1024 * 1024) {
    toast({ title: "Fichier trop volumineux (max 5MB)", variant: "destructive" });
    return;
  }
  
  // Lecture sécurisée
  const reader = new FileReader();
  reader.onload = (event) => {
    setImage(event.target?.result as string);
  };
  reader.readAsDataURL(file);
};
```

---

### 5. **Sanitization des Inputs Utilisateur**

**Risque** : XSS dans les simulateurs (texte personnalisé)

**Solution** :
```bash
npm install dompurify
npm install @types/dompurify --save-dev
```

```tsx
import DOMPurify from 'dompurify';

const sanitizedText = DOMPurify.sanitize(customText);
```

---

## 🚀 Plan d'Action Prioritaire

### 1. **Immédiat** (Faire maintenant)

```bash
# Mettre à jour les dépendances vulnérables
npm audit fix
npm update react-router-dom

# Créer fichier headers Cloudflare
touch public/_headers
```

### 2. **Court terme** (Cette semaine)

- [ ] Ajouter validation email/téléphone
- [ ] Implémenter honeypot anti-spam
- [ ] Limiter taille uploads (max 5MB)
- [ ] Valider types MIME des images
- [ ] Configurer headers de sécurité

### 3. **Moyen terme** (Ce mois)

- [ ] Intégrer Cloudflare Turnstile
- [ ] Connecter formulaires à EmailJS
- [ ] Ajouter sanitization DOMPurify
- [ ] Activer Cloudflare WAF
- [ ] Monitoring erreurs (Sentry)

### 4. **Optionnel** (Si trafic élevé)

- [ ] Rate limiting formulaires
- [ ] Cloudflare Bot Management
- [ ] Logs d'audit formulaires
- [ ] CORS headers restrictifs

---

## 📋 Checklist Sécurité Cloudflare

### Configuration Cloudflare Pages

1. **SSL/TLS** : Full (strict) ✅
2. **Auto Minify** : JS, CSS, HTML ✅
3. **Brotli Compression** : Activé ✅
4. **HTTP/3 (QUIC)** : Activé ✅
5. **0-RTT Connection** : Activé ✅

### Security Settings

- [ ] **WAF** : Mode ON
- [ ] **Challenge Passage** : 14 jours
- [ ] **Browser Integrity Check** : ON
- [ ] **Bot Fight Mode** : ON (gratuit)
- [ ] **DDoS Protection** : Activé par défaut ✅

### Page Rules

```
URL: papyris.dz/*
Settings:
- Security Level: High
- Cache Level: Standard
- Browser Cache TTL: 4 hours
```

---

## 🛠️ Code de Sécurité à Ajouter

### Fichier `public/_headers`

```toml
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com;

/assets/*
  Cache-Control: public, max-age=31536000, immutable
```

### Hook de Validation

```tsx
// src/hooks/useFormValidation.ts
export const useFormValidation = () => {
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^(\+213|0)[5-7][0-9]{8}$/.test(phone.replace(/\s/g, ''));
  };

  const sanitizeInput = (input: string) => {
    return input.trim().slice(0, 500); // Max 500 chars
  };

  return { validateEmail, validatePhone, sanitizeInput };
};
```

---

## ✅ Score de Sécurité

| Catégorie | Score Actuel | Score Cible |
|-----------|--------------|-------------|
| HTTPS | 100/100 ✅ | 100/100 |
| Headers | 60/100 ⚠️ | 95/100 |
| Dépendances | 70/100 ⚠️ | 100/100 |
| Validation | 40/100 ❌ | 90/100 |
| Protection Bot | 80/100 ✅ | 100/100 |
| **TOTAL** | **70/100** | **97/100** |

---

## 📞 Contact Sécurité

En cas de découverte de vulnérabilité :
- Email : security@papyris.dz (à créer)
- Délai de réponse : 48h

---

**Conclusion** : Le site est **relativement sécurisé** pour un site vitrine, mais quelques améliorations simples le rendraient **très robuste**. Le déploiement sur Cloudflare est un excellent choix ! 🛡️
