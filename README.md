# Vertex | Premium Web Engineering & Digital Agency Landing Page

Vertex is a premium-quality, high-performance, and fully responsive business landing page designed to showcase professional frontend engineering and modern UI/UX design. It is built as a static site and is ready to deploy for free.

🚀 **Live Demo:** [http://business-landing-page-demo.netlify.app](http://business-landing-page-demo.netlify.app)

---

## ⚡ Core Features

- **Responsive Theme Toggle:** Seamless switching between Light and Dark modes with custom-calibrated HSL theme colors, transition layers, and automatic persistence using `localStorage`.
- **Scroll Reveal Framework:** Integrated `IntersectionObserver` that dynamically reveals page sections with smooth fade-in animations as the user scrolls.
- **Scroll-Spy Navbar:** Sticky glassmorphic navbar with active section indicators and a responsive slide-down mobile navigation drawer.
- **Interactive Leaflet Map:** Fully integrated, API-key-free Leaflet map centered at our headquarters. Features customized tiles styled with CSS filters to blend into dark mode.
- **Interactive Portfolio Filter:** Filterable portfolio items by categories (Web App, Design, Branding) with smooth React rendering.
- **Testimonials Carousel:** Auto-rotating and manual sliding carousel showing client reviews, complete with active dot indicators and hover-pausing.
- **Client-Side Form Submissions:** Fully client-side Contact and Newsletter forms featuring inline validation, simulated loading states, and success notifications.
- **Circular Scroll-To-Top Indicator:** Floating chevron-up button with an SVG ring tracking scroll-depth progress.
- **SEO Optimization:** Formatted with descriptive meta tags, Open Graph properties (for Facebook/LinkedIn share cards), semantic HTML hierarchy, a custom `robots.txt`, and a structured `sitemap.xml`.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 8](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (using the new CSS-first `@theme` configuration)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Maps:** [Leaflet.js](https://leafletjs.com/) (loaded asynchronously from a secure CDN)
- **Linter:** [Oxlint](https://oxc.rs/)

---

## 📂 Directory Structure

```text
src/
├── assets/             # Logo, react, and vite SVGs
├── components/         # Reusable UI elements
│   ├── LeafletMap.jsx  # Interactive mapping component
│   ├── ScrollToTop.jsx # Circular depth tracker button
│   └── ThemeToggle.jsx # Dark/Light mode theme switch
├── data/
│   └── landingData.js  # Project content configurations
├── sections/           # Modular page sections
│   ├── About.jsx       # Agency story and values grid
│   ├── Contact.jsx     # Contact form and mapping panel
│   ├── FAQ.jsx         # Accordion grid-rows height panels
│   ├── Features.jsx    # Architectural specifications grid
│   ├── Footer.jsx      # Navigation links and social icons
│   ├── Hero.jsx        # Animated coding preview and main CTA
│   ├── Navbar.jsx      # Sticky top-navigation
│   ├── Newsletter.jsx  # Newsletter sub-footer CTA
│   ├── Portfolio.jsx   # Case works with category filters
│   ├── Pricing.jsx     # 3-tier retaining cards
│   ├── Process.jsx     # Working workflow timeline
│   ├── Services.jsx    # Services offerings grid
│   ├── Statistics.jsx  # Counters strip
│   ├── Testimonials.jsx# Carousel slide reviews
│   └── WhyChooseUs.jsx # Key highlights and metrics
├── App.css             # Glassmorphic and transition utility rules
├── App.jsx             # Orchestrator, scroll reveals, and scroll-spy
├── index.css           # Global stylesheets and theme declarations
└── main.jsx
public/
├── favicon.svg         # Favicon icon
├── robots.txt          # Crawler indexing rules
└── sitemap.xml         # XML Sitemap for SEO indexing
```

---

## 🚀 Getting Started

To run this project locally, clone the repository and run the following commands in your terminal:

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run in Development Mode:**
   ```bash
   npm run dev
   ```

3. **Check Code Quality (Lint):**
   ```bash
   npm run lint
   ```

4. **Compile Production Bundle:**
   ```bash
   npm run build
   ```

---

## 🌐 Deployment

This project is 100% static, requiring **zero backend servers, databases, or API keys**. 

To deploy:
- **Netlify:** Drag-and-drop the `dist/` directory directly into Netlify Drop, or connect this GitHub repository and set the build command to `npm run build` with the publish directory set to `dist`.
- **Vercel:** Connect the repository and Vercel will automatically identify the Vite setup, building and deploying the site instantly.
