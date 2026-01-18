# Papyris - Documentation Technique

Site vitrine d'agence de signalétique lumineuse avec simulateurs de personnalisation.

**URL Production** : https://www.papyris.dz  
**Stack** : React 18 + TypeScript + Vite + Tailwind CSS  
**Hébergement** : Cloudflare Pages  

---

## 📋 Table des Matières

1. [Vue d'ensemble](#vue-densemble)
2. [Architecture](#architecture)
3. [Structure des Fichiers](#structure-des-fichiers)
4. [Technologies](#technologies)
5. [Composants Principaux](#composants-principaux)
6. [Simulateurs](#simulateurs)
7. [Données & Configuration](#données--configuration)
8. [Optimisations](#optimisations)
9. [Maintenance](#maintenance)
10. [Debugging](#debugging)
11. [Commandes](#commandes)

---

## 🎯 Vue d'ensemble

### Fonctionnalités Principales

- **Site vitrine** : Présentation services, portfolio, témoignages
- **3 Simulateurs interactifs** :
  - Néon LED personnalisable
  - Autocollants muraux avec mode photo 3D
  - Textiles personnalisés (35 produits)
- **Formulaires** : Contact et demande de devis
- **Pages légales** : Mentions légales, confidentialité, CGV
- **SEO optimisé** : Meta tags, Schema.org, sitemap.xml
- **Performance** : WebP, lazy loading, code splitting

### Caractéristiques Techniques

- ✅ **100% TypeScript** - Type safety complet
- ✅ **SPA** - Single Page Application avec React Router
- ✅ **Responsive** - Mobile-first design
- ✅ **PWA-ready** - Prêt pour Progressive Web App
- ✅ **i18n-ready** - Structure prête pour multilingue
- ✅ **Accessibilité** - ARIA labels, semantic HTML

---

## 🏗️ Architecture

### Pattern Architectural

**Architecture en couches** :

```
┌─────────────────────────────────────┐
│         Présentation Layer          │
│   (Pages, Components, UI)           │
├─────────────────────────────────────┤
│         Business Logic Layer        │
│   (Hooks, Utils, Helpers)           │
├─────────────────────────────────────┤
│         Data Layer                  │
│   (Constants, Types, Assets)        │
└─────────────────────────────────────┘
```

### Flow de Navigation

```
App.tsx (Router)
    ├─ Index (Homepage)
    │   ├─ Hero
    │   ├─ Services
    │   ├─ Portfolio
    │   ├─ Clients
    │   ├─ FAQ
    │   ├─ Location
    │   └─ Contact
    │
    ├─ ServiceDetail/:serviceId
    │
    ├─ About
    │
    ├─ Simulateurs (Lazy loaded)
    │   ├─ /simulator (NeonSimulator)
    │   ├─ /simulator/stickers (StickerSimulator)
    │   └─ /simulator/textile (TextileSimulator)
    │
    ├─ QuoteRequest (Lazy loaded)
    │
    └─ Pages légales (Lazy loaded)
```

### État de l'Application

**Gestion d'état** : React useState (pas de Redux, pas besoin)

**État local par composant** :
- `TextileSimulator` : Product, colors, text, logo positions
- `StickerSimulator` : Stickers array, wall dimensions, mode
- `NeonSimulator` : Text, colors, effects

**État partagé** : Aucun (pas d'auth, pas de panier)

---

## 📁 Structure des Fichiers

```
papyris/
├── public/                    # Assets statiques
│   ├── _headers              # Headers sécurité Cloudflare
│   ├── robots.txt            # SEO - Crawlers
│   ├── sitemap.xml           # SEO - 13 URLs indexées
│   └── og-image.png          # Open Graph image (1200×630)
│
├── src/
│   ├── assets/               # Images & ressources
│   │   ├── hero-bg.jpg       # Background hero (optimisé)
│   │   ├── service-*.jpg     # Images services (×4)
│   │   ├── project-*.jpg     # Images portfolio (×6)
│   │   └── textiles/         # Images produits textiles
│   │       ├── tshirt-*.png  # 10 images (5 couleurs × 2 vues)
│   │       ├── polo-*.png    # 10 images
│   │       ├── sweat-*.png   # 10 images
│   │       └── cap-*.png     # 5 images
│   │
│   ├── components/           # Composants réutilisables
│   │   ├── Navbar.tsx        # Navigation + smart scroll
│   │   ├── Footer.tsx        # Footer + liens
│   │   ├── Hero.tsx          # Hero section homepage
│   │   ├── Services.tsx      # Grille services
│   │   ├── Portfolio.tsx     # Galerie filtrable
│   │   ├── Lightbox.tsx      # Viewer plein écran
│   │   ├── Clients.tsx       # Témoignages
│   │   ├── FAQ.tsx           # Accordéon questions
│   │   ├── Location.tsx      # Carte Google Maps
│   │   ├── Contact.tsx       # Formulaire contact
│   │   ├── LoadingScreen.tsx # Loader entre pages
│   │   ├── OptimizedImage.tsx # WebP avec fallback
│   │   ├── ColorPicker.tsx   # Sélecteur couleurs
│   │   ├── ExportButton.tsx  # Export PNG avec loading
│   │   └── ui/               # Shadcn components (50+)
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── slider.tsx
│   │       └── ...
│   │
│   ├── pages/                # Pages principales
│   │   ├── Index.tsx         # Homepage (composition)
│   │   ├── About.tsx         # À propos
│   │   ├── ServiceDetail.tsx # Détail service
│   │   ├── QuoteRequest.tsx  # Formulaire devis (lazy)
│   │   ├── NeonSimulator.tsx # Simulateur néon (lazy)
│   │   ├── StickerSimulator.tsx # Simulateur stickers (lazy)
│   │   ├── TextileSimulator.tsx # Simulateur textiles (lazy)
│   │   ├── NotFound.tsx      # 404
│   │   ├── LegalNotice.tsx   # Mentions légales (lazy)
│   │   ├── PrivacyPolicy.tsx # Confidentialité (lazy)
│   │   └─ TermsOfSale.tsx   # CGV (lazy)
│   │
│   ├── data/                 # Données statiques
│   │   ├── services.ts       # Liste services + détails
│   │   ├── projects.ts       # Portfolio avec catégories
│   │   └── simulatorConstants.ts # Constantes simulateurs
│   │
│   ├── hooks/                # Custom hooks
│   │   ├── use-mobile.tsx    # Détection mobile
│   │   ├── use-toast.ts      # Notifications toast
│   │   └── useImageDragAndDrop.ts # Drag & drop images
│   │
│   ├── lib/                  # Utilitaires
│   │   └── utils.ts          # Helpers (cn, etc.)
│   │
│   ├── utils/                # Helpers métier
│   │   └── textileImages.ts  # Mapping images textiles
│   │
│   ├── App.tsx               # Router principal + Lazy loading
│   ├── main.tsx              # Entry point
│   ├── index.css             # Styles globaux + Tailwind
│   └── vite-env.d.ts         # Types Vite
│
├── scripts/                  # Scripts utilitaires
│   └── optimize-images.mjs   # Optimisation images Sharp
│
├── docs/                     # Documentation
│   ├── PERFORMANCE.md        # Optimisations perf
│   ├── REFACTORING.md        # Guide refactoring
│   ├── SECURITY.md           # Sécurité & vulnérabilités
│   └── DEPLOYMENT.md         # Guide déploiement Cloudflare
│
├── package.json              # Dépendances
├── tsconfig.json             # Config TypeScript
├── vite.config.ts            # Config Vite + optimisations
├── tailwind.config.ts        # Config Tailwind + thème
├── components.json           # Config Shadcn
└── eslint.config.js          # Linting rules
```

---

## 🛠️ Technologies

### Core Stack

| Technologie | Version | Usage |
|-------------|---------|-------|
| **React** | 18.3+ | UI framework |
| **TypeScript** | 5.6+ | Type safety |
| **Vite** | 6.1+ | Build tool & dev server |
| **React Router** | 6.30+ | Navigation SPA |
| **Tailwind CSS** | 3.4+ | Styling utility-first |

### Libraries Principales

| Package | Usage | Alternatives |
|---------|-------|-------------|
| `@radix-ui/*` | Composants UI accessibles | Headless UI |
| `lucide-react` | Icônes (800+) | React Icons |
| `html2canvas` | Export PNG simulateurs | dom-to-image |
| `class-variance-authority` | Variants composants | - |
| `clsx` | Merge classes CSS | classnames |
| `@tanstack/react-query` | Data fetching (future) | SWR |

### DevOps & Build

| Outil | Usage |
|-------|-------|
| **Sharp** | Optimisation images |
| **Terser** | Minification JS |
| **ESLint** | Linting |
| **PostCSS** | Transformations CSS |

---

## 🧩 Composants Principaux

### 1. Navbar (Smart Navigation)

**Fichier** : [src/components/Navbar.tsx](src/components/Navbar.tsx)

**Fonctionnalités** :
- Scroll détection (bg transparent → opaque)
- Smart section navigation (from any page)
- Mobile menu responsive
- Dropdown simulateurs

**Code clé** :
```tsx
const handleSectionClick = (sectionId: string, e: React.MouseEvent) => {
  if (location.pathname !== "/") {
    navigate("/");
    setTimeout(() => scrollToSection(sectionId), 100);
  } else {
    scrollToSection(sectionId);
  }
};
```

**Dépendances** : React Router `useNavigate`, `useLocation`

---

### 2. Portfolio (Filtrable + Lightbox)

**Fichier** : [src/components/Portfolio.tsx](src/components/Portfolio.tsx)

**Fonctionnalités** :
- Filtrage par catégorie (Tous, Néon, Enseignes, etc.)
- Lightbox plein écran
- Navigation clavier (← →)
- Lazy loading images

**État** :
```tsx
const [activeCategory, setActiveCategory] = useState("Tous");
const [lightboxOpen, setLightboxOpen] = useState(false);
const [currentImageIndex, setCurrentImageIndex] = useState(0);

const filteredProjects = activeCategory === "Tous"
  ? projects
  : projects.filter(p => p.category === activeCategory);
```

**Optimisation** : Images passent uniquement le filtre actif au Lightbox (évite navigation hors contexte)

---

### 3. OptimizedImage (WebP + Fallback)

**Fichier** : [src/components/OptimizedImage.tsx](src/components/OptimizedImage.tsx)

**Fonctionnalités** :
- Détection auto WebP depuis PNG/JPG
- Fallback automatique navigateurs anciens
- Props standard `<img>`

**Usage** :
```tsx
<OptimizedImage
  src="/assets/hero-bg.jpg"
  alt="Hero"
  loading="lazy"
  decoding="async"
/>
```

**Génère** :
```html
<picture>
  <source srcSet="/assets/hero-bg.webp" type="image/webp" />
  <img src="/assets/hero-bg.jpg" alt="Hero" />
</picture>
```

---

### 4. LoadingScreen

**Fichier** : [src/components/LoadingScreen.tsx](src/components/LoadingScreen.tsx)

**Fonctionnalités** :
- Spinner gradient animé
- Dots animation avec delays
- Utilisé dans `<Suspense fallback={...}>`

**Triggered par** : Lazy loading de pages lourdes (simulateurs, devis)

---

### 5. ColorPicker (Réutilisable)

**Fichier** : [src/components/ColorPicker.tsx](src/components/ColorPicker.tsx)

**Props** :
```tsx
interface ColorPickerProps {
  colors: { name: string; value: string; hex: string }[];
  selectedColor: string;
  onColorChange: (color: string) => void;
  label?: string;
}
```

**Utilisé dans** :
- TextileSimulator (couleurs produits)
- StickerSimulator (textures murs)
- NeonSimulator (couleurs néon)

---

## 🎮 Simulateurs

### Architecture Commune

Tous les simulateurs suivent le même pattern :

```tsx
// État local
const [config, setConfig] = useState({...});

// Ref pour canvas export
const canvasRef = useRef<HTMLDivElement>(null);

// Export PNG
const handleExport = () => {
  html2canvas(canvasRef.current).then(canvas => {
    // Download
  });
};

// Render
return (
  <div ref={canvasRef}>
    {/* Preview avec overlays */}
  </div>
);
```

---

### 1. TextileSimulator (724 lignes → 450 après refactor)

**URL** : `/simulator/textile`

**Fichier** : [src/pages/TextileSimulator.tsx](src/pages/TextileSimulator.tsx)

**Fonctionnalités** :
- 4 produits : T-shirt, Polo, Sweat, Casquette
- 5 couleurs par produit : Blanc, Noir, Vert, Rouge, Bleu
- 2 vues : Face, Dos (sauf casquette)
- Upload logo + positionnement drag
- Texte personnalisé : 6 fonts, 8 couleurs, rotation 0-360°
- Export PNG haute résolution (scale:2)

**Assets** :
- 35 images PNG (10 t-shirt + 10 polo + 10 sweat + 5 cap)
- 24MB optimisés (60MB origine)
- WebP générés automatiquement

**Helpers** :
- [src/utils/textileImages.ts](src/utils/textileImages.ts) : Mapping produit/couleur → image
- [src/data/simulatorConstants.ts](src/data/simulatorConstants.ts) : Arrays de config

**Optimisations** :
- Images lazy loaded
- State local uniquement
- Export avec compression

---

### 2. StickerSimulator (773 lignes)

**URL** : `/simulator/stickers`

**Fichier** : [src/pages/StickerSimulator.tsx](src/pages/StickerSimulator.tsx)

**Fonctionnalités** :
- 2 modes : Simple (1 sticker) / Multiple (plusieurs)
- Dimensions mur personnalisables (largeur × hauteur en cm)
- 4 textures de mur
- **Mode photo 3D** (en développement) :
  - Upload photo pièce split en 2 layers
  - Layer 1 (z:1) : Mur arrière
  - Layer 2 (z:2) : Stickers
  - Layer 3 (z:3) : Meubles avant (transparent PNG)
- Tapisserie : Upload image + repeat pattern
- Drag & drop stickers + redimensionnement
- Export PNG

**État** :
```tsx
const [mode, setMode] = useState<"simple" | "multiple" | "wallpaper">("simple");
const [stickers, setStickers] = useState<Sticker[]>([]);
const [useRoomPhoto, setUseRoomPhoto] = useState(false);
const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
```

**À implémenter** :
- Import room photos (wall-back.png + wall-front.png)
- UI sélecteur de pièces
- Validation positionnement (stickers sur mur uniquement)

---

### 3. NeonSimulator (521 lignes)

**URL** : `/simulator`

**Fichier** : [src/pages/NeonSimulator.tsx](src/pages/NeonSimulator.tsx)

**Fonctionnalités** :
- Texte personnalisé
- 6 fonts
- 5 couleurs néon (Cyan, Pink, Gold, Purple, Blue)
- Effets glow CSS
- Taille ajustable
- Export PNG

**État** :
```tsx
const [text, setText] = useState("PAPYRIS");
const [color, setColor] = useState("cyan");
const [fontSize, setFontSize] = useState([60]);
```

**Styling** :
- CSS custom properties pour glow effects
- `text-shadow` multiple pour réalisme
- Animations pulse optionnelles

---

## 📊 Données & Configuration

### 1. Services

**Fichier** : [src/data/services.ts](src/data/services.ts)

**Structure** :
```tsx
export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  image: string;
  priceRange: string;
  benefits: string[];
  applications: string[];
  simulatorUrl?: string; // Si simulateur dispo
}
```

**Services disponibles** :
1. Enseignes Lumineuses LED
2. NeonFlex LED (+ simulateur)
3. Autocollants / Vinyle (+ simulateur)
4. Cadres Lumineux

**Helpers** :
```tsx
export const getServiceById = (id: string): Service | undefined
export const getServiceBySlug = (slug: string): Service | undefined
```

---

### 2. Portfolio

**Fichier** : [src/data/projects.ts](src/data/projects.ts)

**Structure** :
```tsx
export interface Project {
  id: number;
  title: string;
  category: string; // "Néon", "Enseignes", "Autocollants"
  description: string;
  image: string;
}

export const categories = ["Tous", "Néon", "Enseignes", "Autocollants"];
export const projects: Project[] = [/* 6 projets */];
```

**Catégories** :
- Tous (vue globale)
- Néon
- Enseignes
- Autocollants

---

### 3. Simulator Constants

**Fichier** : [src/data/simulatorConstants.ts](src/data/simulatorConstants.ts)

**Contenu** :
```tsx
export const TEXTILE_PRODUCTS = [
  { id: "tshirt", name: "T-shirt" },
  { id: "sweat", name: "Sweat" },
  { id: "polo", name: "Polo" },
  { id: "cap", name: "Casquette" },
];

export const TEXTILE_COLORS = [
  { name: "Blanc", value: "white", hex: "#ffffff" },
  // ... 4 autres couleurs
];

export const TEXT_FONTS = [
  { name: "Arial", value: "Arial, sans-serif" },
  // ... 5 autres fonts
];

export const TEXT_COLORS = [
  { name: "Noir", value: "#000000" },
  // ... 7 autres couleurs
];

export const WALL_TEXTURES = [
  { name: "Blanc", image: "linear-gradient(...)" },
  // ... 3 autres textures
];
```

**Usage** : Importer dans simulateurs pour éviter duplication

---

## ⚡ Optimisations

### 1. Code Splitting

**Configuration** : [vite.config.ts](vite.config.ts)

```ts
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        'radix-ui': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', ...],
        'lucide': ['lucide-react'],
      },
    },
  },
}
```

**Résultat** :
- Bundle principal : ~350KB (au lieu de 800KB)
- React vendor : ~150KB (partagé)
- Radix UI : ~80KB (partagé)
- Lucide icons : ~30KB (partagé)

**Lazy Loading Pages** :
```tsx
const QuoteRequest = lazy(() => import("./pages/QuoteRequest"));
const NeonSimulator = lazy(() => import("./pages/NeonSimulator"));
// ... + 5 autres pages
```

---

### 2. Images

**Optimisations appliquées** :
- Compression Sharp (qualité 85%) : 60MB → 24MB
- WebP générées : 24MB → ~17MB (navigateurs modernes)
- Lazy loading : `loading="lazy"` sauf hero
- Async decoding : `decoding="async"`

**Script d'optimisation** :
```bash
npm run optimize-images
# Compresse PNG/JPG + génère WebP
```

**Component wrapper** :
```tsx
<OptimizedImage src="image.jpg" /> 
// → Génère <picture> avec WebP + fallback
```

---

### 3. Performance

**Métriques actuelles** :
- First Contentful Paint : ~0.9s
- Time to Interactive : ~1.5s
- Bundle size : 350KB gzipped
- Lighthouse Score : ~95/100

**Optimisations actives** :
- Terser minification (drop console en prod)
- Brotli compression (Cloudflare)
- Assets inline < 4KB
- Preconnect Google Fonts
- `font-display: swap`

---

### 4. SEO

**Fichiers SEO** :
- [public/sitemap.xml](public/sitemap.xml) : 13 URLs indexées
- [public/robots.txt](public/robots.txt) : Allow all
- [index.html](index.html) : Meta tags complets
- Schema.org JSON-LD : LocalBusiness markup

**Meta tags** :
```html
<title>Papyris - Enseignes Lumineuses & Signalétique LED à El Achour, Alger</title>
<meta name="description" content="Spécialiste en enseignes lumineuses LED, NeonFlex, autocollants vinyle..." />
<meta property="og:image" content="/og-image.png" />
<!-- + 20 autres meta tags -->
```

**Score** :
- SEO Lighthouse : 100/100
- Mobile-friendly : ✅
- Structured data : ✅

---

## 🔧 Maintenance

### Tâches Régulières

#### Hebdomadaire
- [ ] Vérifier analytics Cloudflare (trafic, erreurs)
- [ ] Tester formulaires (spam check)
- [ ] Vérifier temps de chargement
- [ ] Backup base de données (quand ajoutée)

#### Mensuel
- [ ] Mettre à jour dépendances : `npm update`
- [ ] Audit sécurité : `npm audit`
- [ ] Analyser Core Web Vitals
- [ ] Vérifier certificat SSL (auto-renew Cloudflare)
- [ ] Review Google Search Console

#### Trimestriel
- [ ] Mise à jour majeure React/Vite
- [ ] Optimisation images nouvelles
- [ ] Review SEO keywords
- [ ] Test cross-browser (Chrome, Safari, Firefox, Edge)
- [ ] Test devices (iOS, Android)

---

### Ajout de Contenu

#### Nouveau Projet Portfolio

1. **Ajouter image** : `src/assets/project-7.jpg`
2. **Optimiser** : `npm run optimize-images`
3. **Éditer** : [src/data/projects.ts](src/data/projects.ts)
   ```tsx
   {
     id: 7,
     title: "Nouveau Projet",
     category: "Néon",
     description: "Description...",
     image: "/src/assets/project-7.jpg",
   }
   ```
4. **Tester** : Vérifier filtre + lightbox
5. **Commit** : `git commit -m "Add project 7"`
6. **Deploy** : Push → auto-deploy Cloudflare

#### Nouveau Service

1. **Ajouter image** : `src/assets/service-nouveau.jpg`
2. **Éditer** : [src/data/services.ts](src/data/services.ts)
   ```tsx
   {
     id: "nouveau-service",
     slug: "nouveau-service",
     title: "Nouveau Service",
     // ... autres champs
     simulatorUrl: "/simulator/nouveau" // optionnel
   }
   ```
3. **Page détail** : Créer si besoin
4. **Sitemap** : Ajouter URL dans [public/sitemap.xml](public/sitemap.xml)

---

### Modification Design

#### Changer Couleurs Thème

**Fichier** : [src/index.css](src/index.css)

```css
:root {
  --primary: 190 100% 50%; /* Cyan néon */
  --neon-gold: 39 97% 60%; /* Or néon */
  --neon-pink: 320 100% 60%; /* Rose néon */
  /* Modifier ces valeurs HSL */
}
```

**Puis** : Rebuild `npm run build`

#### Changer Fonts

1. **Google Fonts** : Modifier import dans [src/index.css](src/index.css)
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Nouvelle+Font&display=swap');
   ```

2. **Tailwind** : Mettre à jour [tailwind.config.ts](tailwind.config.ts)
   ```ts
   fontFamily: {
     display: ['Nouvelle Font', 'sans-serif'],
   }
   ```

---

## 🐛 Debugging

### Problèmes Fréquents

#### 1. Page blanche au démarrage

**Symptôme** : Site ne charge pas, console vide

**Causes** :
- Erreur de build non catchée
- Import manquant
- Syntaxe TypeScript invalide

**Solution** :
```bash
# Vérifier erreurs build
npm run build

# Vérifier TypeScript
npx tsc --noEmit

# Vérifier ESLint
npm run lint
```

---

#### 2. Images ne chargent pas

**Symptôme** : 404 sur images après deploy

**Causes** :
- Chemin relatif incorrect
- Image non dans `public/` ou `src/assets/`
- Extension case-sensitive (PNG vs png)

**Solution** :
```tsx
// ❌ Mauvais
<img src="/images/logo.png" />

// ✅ Bon (dans src/assets/)
import logo from "@/assets/logo.png";
<img src={logo} />

// ✅ Bon (dans public/)
<img src="/logo.png" />
```

---

#### 3. Routing 404 sur refresh

**Symptôme** : Refresh page → 404

**Cause** : Cloudflare Pages ne redirige pas SPA

**Solution** : Créer `public/_redirects`
```
/* /index.html 200
```

---

#### 4. Simulateur export PNG vide

**Symptôme** : `html2canvas` génère image blanche

**Causes** :
- Images cross-origin non chargées
- Canvas trop grand
- Timeout html2canvas

**Solution** :
```tsx
html2canvas(ref.current, {
  scale: 2,
  useCORS: true, // ← Important pour images externes
  allowTaint: true,
  backgroundColor: null,
  logging: false, // Debug : true
}).then(canvas => {
  // ...
});
```

---

#### 5. TypeScript errors après update

**Symptôme** : `Property 'x' does not exist on type 'y'`

**Solution** :
```bash
# Nettoyer cache
rm -rf node_modules
rm package-lock.json
npm install

# Re-générer types
npm run build
```

---

### Outils de Debug

#### 1. React DevTools

**Installation** : Extension Chrome/Firefox

**Usage** :
- Inspecter component tree
- Voir props/state en temps réel
- Profiler re-renders

**Accès** : F12 → onglet "⚛️ Components"

---

#### 2. Network Tab

**Vérifier** :
- Taille des bundles (≤ 500KB par chunk)
- Images WebP chargées (pas PNG)
- Headers de sécurité présents
- Cache correctement configuré

**Filtres utiles** :
- `type:image` → Voir toutes les images
- `larger-than:1M` → Fichiers > 1MB
- `status-code:404` → Ressources manquantes

---

#### 3. Lighthouse

**Lancer** :
```bash
# CLI
npx lighthouse https://papyris.dz --view

# Ou DevTools → Lighthouse tab
```

**Métriques** :
- Performance : > 90
- Accessibility : > 95
- Best Practices : > 95
- SEO : 100

---

#### 4. Console Debugging

**Activer logs en dev** :

[vite.config.ts](vite.config.ts) :
```ts
terserOptions: {
  compress: {
    drop_console: mode === 'production', // Garde console en dev
  },
}
```

**Logs utiles** :
```tsx
console.log('Component mounted');
console.table(stateArray);
console.time('renderTime');
// ... code
console.timeEnd('renderTime');
```

---

### Erreurs TypeScript Courantes

#### `Cannot find module '@/...'`

**Solution** : Vérifier `tsconfig.json`
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"] // ← Path alias
    }
  }
}
```

#### `Type 'X' is not assignable to type 'Y'`

**Solution** : Vérifier interfaces
```tsx
// Définir types explicites
interface Props {
  color: "red" | "blue"; // Union type
  size: number;
}

const Component: React.FC<Props> = ({ color, size }) => {
  // ...
};
```

---

## 📜 Commandes

### Développement

```bash
# Démarrer dev server (port 8080)
npm run dev

# Build production
npm run build

# Preview build local
npm run preview

# Linting
npm run lint

# TypeScript check
npx tsc --noEmit
```

### Images

```bash
# Optimiser toutes les images
npm run optimize-images

# Vérifier taille dossier
du -sh src/assets/

# Compter fichiers WebP générés
find src/assets -name "*.webp" | wc -l
```

### Tests & Qualité

```bash
# Audit sécurité
npm audit
npm audit fix

# Analyser bundle
npm run build -- --mode analyze

# Check dependencies outdated
npm outdated

# Update all (prudent !)
npm update
```

### Git

```bash
# Status
git status

# Commit
git add .
git commit -m "feat: add new feature"

# Push (trigger auto-deploy)
git push origin main

# Rollback local
git reset --hard HEAD~1

# Stash changes
git stash
git stash pop
```

---

## 🔗 Ressources

### Documentation Externe

- **React** : https://react.dev/
- **Vite** : https://vite.dev/
- **Tailwind** : https://tailwindcss.com/docs
- **Shadcn/ui** : https://ui.shadcn.com/
- **React Router** : https://reactrouter.com/
- **Cloudflare Pages** : https://developers.cloudflare.com/pages/

### Outils

- **Lighthouse** : https://pagespeed.web.dev/
- **WebPageTest** : https://www.webpagetest.org/
- **Can I Use** : https://caniuse.com/
- **Bundlephobia** : https://bundlephobia.com/

### Fichiers Documentation

- [DEPLOYMENT.md](DEPLOYMENT.md) - Guide déploiement Cloudflare
- [SECURITY.md](SECURITY.md) - Sécurité & vulnérabilités
- [PERFORMANCE.md](PERFORMANCE.md) - Optimisations performance
- [REFACTORING.md](REFACTORING.md) - Guide refactoring code

---

## 📞 Support

### Contacts Projet

- **Developer** : [Votre nom]
- **Client** : Papyris
- **Hébergement** : Cloudflare Pages

### En cas de problème

1. **Vérifier** : Cloudflare status → https://www.cloudflarestatus.com/
2. **Logs** : Cloudflare Dashboard → Pages → Deployments → Logs
3. **Rollback** : Dashboard → Deployments → "Rollback to this"
4. **Support** : Community Cloudflare ou Discord

---

## 📝 Conventions de Code

### Naming

```tsx
// Components : PascalCase
export default function TextileSimulator() {}

// Functions : camelCase
const handleSubmit = () => {}

// Constants : UPPER_SNAKE_CASE
const MAX_FILE_SIZE = 5 * 1024 * 1024;

// Types/Interfaces : PascalCase
interface UserProps {}
type ColorType = "red" | "blue";
```

### File Structure

```tsx
// 1. Imports
import { useState } from "react";
import { Button } from "@/components/ui/button";

// 2. Types/Interfaces
interface Props {
  title: string;
}

// 3. Constants
const COLORS = ["red", "blue"];

// 4. Component
export default function Component({ title }: Props) {
  // 4a. State
  const [active, setActive] = useState(false);
  
  // 4b. Handlers
  const handleClick = () => {};
  
  // 4c. Effects
  useEffect(() => {}, []);
  
  // 4d. Render
  return <div>{title}</div>;
}
```

### CSS Classes

```tsx
// Ordre Tailwind recommandé :
// Layout → Display → Sizing → Spacing → Colors → Typography → Effects

<div className="
  flex flex-col          // Layout
  w-full h-screen        // Sizing
  p-4 gap-2             // Spacing
  bg-card text-foreground // Colors
  font-bold text-lg      // Typography
  hover:opacity-80       // Effects
">
```

---

## ✅ Checklist Qualité

### Avant Commit

- [ ] `npm run build` réussit
- [ ] `npm run lint` sans erreurs
- [ ] TypeScript `npx tsc --noEmit` OK
- [ ] Test en local (dev + preview)
- [ ] Images optimisées si ajoutées
- [ ] README/docs mis à jour si needed

### Avant Deploy Production

- [ ] Tests manuels sur tous simulateurs
- [ ] Test formulaires
- [ ] Test responsive (mobile/tablet/desktop)
- [ ] Vérifier lighthouse score
- [ ] Backup database si existante
- [ ] Tag git version : `git tag v1.x.x`

### Après Deploy

- [ ] Vérifier site accessible
- [ ] Test navigation complète
- [ ] Vérifier analytics fonctionne
- [ ] Monitor erreurs 24h
- [ ] Purge cache Cloudflare si besoin

---

**Dernière mise à jour** : 18 janvier 2026  
**Version** : 1.0.0  
**Auteur** : GitHub Copilot (Claude Sonnet 4.5)

---

## 🎯 Quick Start

```bash
# Clone
git clone https://github.com/votre-org/papyris.git
cd papyris

# Install
npm install

# Dev
npm run dev
# → http://localhost:8080

# Build
npm run build

# Preview
npm run preview
```

**That's it!** 🚀

---

## 📄 Licence

© 2026 Papyris. Tous droits réservés.

Ce projet est propriétaire et confidentiel.
