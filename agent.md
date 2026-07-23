# Agent Roadmap & Guardrails: Zenith Matcha

This file serves as the strict configuration log, architectural map, and roadmap for building the **Zenith Matcha** website.

---

## 1. Replicated Design System Config
Derived from Google Stitch design tokens:

- **Typography**:
  - Headings / Titles: `'Playfair Display', serif` (Elegant, high-editorial)
  - Body / Labels: `'Plus Jakarta Sans', sans-serif` (Clean, legible, modern)
- **Colors**:
  - `background` & `surface`: `#fbf9f8` (Warm cream/organic paper feel)
  - `primary`: `#172a1e` (Premium Forest Green)
  - `secondary`: `#526442` (Tactile Froth Sage Green)
  - `on-surface` / text: `#1b1c1c` (Deep charcoal, high legibility, avoid pure black)
  - `surface-container`: `#f0eded`
  - `surface-container-low`: `#f6f3f2`
  - `outline-variant`: `#c3c8c1`
- **Shapes & Radii**:
  - Images & Cards: `border-radius: 0.5rem` (8px / `rounded-lg`)
  - Interactive Buttons & Chips: `border-radius: 1rem` (16px / `rounded-2xl`) or full pill shape (`rounded-full`)
- **Layout & Spacing**:
  - Desktop: Centered fixed grid layout (with generous margins and negative space)
  - Mobile: Fluid single-column layout
  - Spacing unit: `8px` (`1rem` = `16px`)
  - Macro-spacing (Negative Space "Ma"): `128px` (`py-32` or `my-32` in Tailwind) for large section gaps.

---

## 2. Core Rule
> [!IMPORTANT]
> **STRICTLY NO Shopping Cart, Add to Cart, or Checkout state.**
> All action buttons, CTAs, and checkout flows are replaced by external links pointing directly to the brand's **LINE OA** account.

---

## 3. Keyword Deployment Matrix (SEO)
To maximize search visibility in the Thai premium tea market, we target specific keyword clusters on specific pages:

| Page | File Path | Target Keyword |
| :--- | :--- | :--- |
| **Homepage** | `src/pages/index.astro` | `ชาเขียวญี่ปุ่น` |
| **Shop Catalog** | `src/pages/products/index.astro` | `ชาเขียวมัทฉะ ญี่ปุ่น`, `มัทฉะเกรดพิธีชงชา`, `อุปกรณ์ชงชาญี่ปุ่น` |
| **Product Detail** | `src/pages/products/[slug].astro` | `ผงชาเขียวมัทฉะ ออร์แกนิค 100%` |
| **Blog System** | `src/pages/blog/` | `ผงมัทฉะ ยี่ห้อไหนดี` |

---

## 4. Directory & Components Architecture Map

```text
/
├── public/
│   ├── favicon.svg
│   └── images/                     # Organic assets & product photos
├── src/
│   ├── content/
│   │   ├── blog/                   # Blog articles (MDX/Markdown)
│   │   └── products/               # Product details and slug mapping
│   ├── components/
│   │   ├── SEO.astro               # Common SEO meta tags
│   │   ├── Header.astro            # Editorial navigation
│   │   ├── Footer.astro            # Minimal footer with LINE OA details
│   │   ├── ImageGallery.astro      # Left-column dynamic image gallery (Vanilla JS)
│   │   ├── ProductCard.astro       # Diffused shadow hover cards
│   │   └── Breadcrumbs.astro       # Contextual navigation
│   ├── layouts/
│   │   └── Layout.astro            # Base HTML & page setup (Fonts, global CSS)
│   ├── pages/
│   │   ├── index.astro             # Page 1: Homepage
│   │   ├── products/
│   │   │   ├── index.astro         # Page 2: Catalog
│   │   │   └── [slug].astro        # Page 3: Product Detail
│   │   └── blog/
│   │       ├── index.astro         # Page 4: Blog list
│   │       └── [slug].astro        # Page 4: Blog detail
│   └── styles/
│       └── global.css              # Custom base layout styling & fonts
├── agent.md                        # This file
├── tailwind.config.mjs             # Tailwind customized with Design System
└── package.json
```

---

## 5. Task Implementation Checklist

- [x] Define global Astro configuration and project dependencies.
- [x] Implement `tailwind.config.mjs` with premium color palette, typography, and shape variables.
- [x] Set up global stylesheet (`src/styles/global.css`) with Google Fonts imports and base overrides.
- [x] Create `Layout.astro` and `SEO.astro` components with optimized meta tags and JSON-LD schema support.
- [x] Build shared editorial UI components (`Header.astro`, `Footer.astro`).
- [x] Create product content collection schema and data files.
- [x] Create blog content collection schema and markdown articles.
- [x] Implement **Page 1: Homepage** (`src/pages/index.astro`) with keyword `ชาเขียวญี่ปุ่น`.
- [x] Implement **Page 2: Shop Catalog** (`src/pages/products/index.astro`) with keywords `ชาเขียวมัทฉะ ญี่ปุ่น`, `มัทฉะเกรดพิธีชงชา`, `อุปกรณ์ชงชาญี่ปุ่น`.
- [x] Implement **Page 3: Product Detail** (`src/pages/products/[slug].astro`) with image gallery and LINE OA link, targeting keyword `ผงชาเขียวมัทฉะ ออร์แกนิค 100%`.
- [x] Implement **Page 4: Blog List and Slug Pages** targeting `ผงมัทฉะ ยี่ห้อไหนดี`.
- [x] Verify page performance, visual responsiveness, and link functionality.
