import { 
  Layers, Zap, BarChart3, Shield, Globe, 
  HelpCircle, Cpu 
} from 'lucide-react';

export const CLIENTS = [
  "Acme Corp", 
  "Stark Industries", 
  "Wayne Enterprises", 
  "Cyberdyne", 
  "Umbrella Co"
];

export const SERVICES = [
  { 
    icon: Layers, 
    title: "Brand Strategy", 
    desc: "We define your digital positioning, product voice, and competitive market advantage, building a foundation for sustainable scale." 
  },
  { 
    icon: Zap, 
    title: "Digital Experience", 
    desc: "High-performance web applications built around core user behaviors, designed to optimize conversion and usability." 
  },
  { 
    icon: BarChart3, 
    title: "Growth Marketing", 
    desc: "Data-driven campaigns engineered to predictably scale acquisition channels and increase customer lifetime value." 
  },
  { 
    icon: Globe, 
    title: "Global Infrastructure", 
    desc: "Deploy serverless systems globally with edge routing, caching optimization, and global failovers for ultimate uptime." 
  },
  { 
    icon: Shield, 
    title: "Cyber Security", 
    desc: "Rigorous compliance checks, vulnerability audits, and OWASP-compliant coding to keep your enterprise data safe." 
  },
  { 
    icon: Cpu, 
    title: "Custom Integrations", 
    desc: "Clean API bridges connecting CRM, billing systems, and inventory pipelines with minimal performance overhead." 
  }
];

export const FEATURES = [
  { 
    icon: Globe, 
    title: "Edge CDN Delivery", 
    desc: "Sub-second loading times served from global edge caches, decreasing page bounce rates." 
  },
  { 
    icon: Shield, 
    title: "Security by Default", 
    desc: "Enforced HTTPS, CSRF protections, and strict content headers protecting user interactions." 
  },
  { 
    icon: BarChart3, 
    title: "SEO Architecture", 
    desc: "Semantic HTML layouts, JSON-LD schema markup, and automatic sitemaps for optimal indexing." 
  },
  { 
    icon: Layers, 
    title: "PWA Capable", 
    desc: "Offline usability, asset caching, and mobile shell experiences boosting user engagement." 
  },
  { 
    icon: HelpCircle, 
    title: "Accessible Design", 
    desc: "Fully compliant with WCAG 2.1 AA guidelines, optimized for screen readers and keyboard use." 
  },
  { 
    icon: Zap, 
    title: "Telemetry & Analytics", 
    desc: "Privacy-compliant user tracking, tracking conversion flows and friction points in real-time." 
  }
];

export const STEPS = [
  { 
    step: "01", 
    title: "Discovery & Strategy", 
    desc: "Deep diving into operations, auditing legacy codebases, and identifying user friction points to outline clear product goals." 
  },
  { 
    step: "02", 
    title: "Design & Prototype", 
    desc: "Creating high-fidelity interactive mockups and component libraries mapping visual language and user flows." 
  },
  { 
    step: "03", 
    title: "Development & QA", 
    desc: "Clean React engineering styled with Tailwind, backed by rigorous unit testing and responsive checks across all screens." 
  },
  { 
    step: "04", 
    title: "Launch & Optimize", 
    desc: "Zero-downtime deployment pipelines integrated with error monitoring, CDN setups, and immediate analytics tracking." 
  }
];

export const STATS = [
  { value: "99.4%", label: "Client Satisfaction" },
  { value: "150M+", label: "Leads Generated" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "24/7/365", label: "System Support" }
];

export const PROJECTS = [
  { 
    title: "Fintech Evolution", 
    category: "Web App", 
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    desc: "A secure, lightning-fast dashboard tracking real-time crypto transactions and user portfolio analytics."
  },
  { 
    title: "SaaS Workspace", 
    category: "UI/UX Design", 
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    desc: "A collaborative project manager built around smooth drag-and-drop actions and fluid transitions."
  },
  { 
    title: "E-Commerce Rebrand", 
    category: "Branding", 
    img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=600&q=80",
    desc: "Visual identity, design tokens, and a lightning-fast checkout flow for an international retail brand."
  },
  { 
    title: "Analytics Hub", 
    category: "Web App", 
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80",
    desc: "A data aggregation platform parsing large-scale telemetry feeds into actionable charts and graphs."
  },
  { 
    title: "AI Chat Console", 
    category: "UI/UX Design", 
    img: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&w=600&q=80",
    desc: "A premium glassmorphic console for LLM model configuration and visual logic mapping."
  },
  { 
    title: "Modern Logistics", 
    category: "Branding", 
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    desc: "Visual brand ecosystem and UI pattern library for a supply chain provider operating in 40+ countries."
  }
];

export const TESTIMONIALS = [
  { 
    quote: "This platform completely transformed our internal metrics. The team delivered ahead of schedule and blew our expectations out of the water with their engineering standard.", 
    author: "Sarah Jenkins", 
    role: "CTO, AlphaStream", 
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80"
  },
  { 
    quote: "Exceptional modern aesthetics combined with bulletproof engineering. They are true partners who care deeply about business metrics and clean, maintainable architecture.", 
    author: "Marcus Vance", 
    role: "VP of Product, OmniTech", 
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
  },
  { 
    quote: "Working with Vertex has been a game-changer. They built a custom React platform that handles millions of monthly requests with sub-second page loads. Highly recommended!", 
    author: "Helena Rostova", 
    role: "Founder, Zenith SaaS", 
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
  }
];

export const PRICING = [
  { 
    name: "Growth", 
    price: "$1,499", 
    period: "/mo", 
    desc: "Perfect for scaling startups looking to establish a professional digital foundation.",
    features: [
      "Core design & project strategy", 
      "Up to 5 custom functional pages", 
      "Standard technical SEO optimization", 
      "Vite React & Tailwind export",
      "Email support (24h turnaround)"
    ], 
    popular: false 
  },
  { 
    name: "Scale", 
    price: "$2,999", 
    period: "/mo", 
    desc: "Designed for mid-market businesses wanting custom integrations and high-converting pages.",
    features: [
      "Comprehensive brand & UI architecture", 
      "Unlimited pages & interactive systems", 
      "Advanced page-speed optimization", 
      "Interactive Leaflet maps & custom components",
      "Priority 24/7 Slack support channel", 
      "Dedicated Project Solutions Engineer"
    ], 
    popular: true 
  },
  { 
    name: "Enterprise", 
    price: "Custom", 
    period: "", 
    desc: "Tailored for large organizations requiring full security audits and dedicated engineers.",
    features: [
      "Full OWASP-compliant security audits", 
      "Custom RESTful/GraphQL API development",
      "High-availability edge CDN infrastructure",
      "Headless CMS custom integration",
      "Dedicated technical support team",
      "SLA guarantee & custom contract agreements"
    ], 
    popular: false 
  }
];

export const FAQS = [
  { 
    q: "How long does a standard engagement take?", 
    a: "Most foundational projects take between 4 to 6 weeks from initial kickoff to deployment. Timeline adjustments map directly to total feature complexity and revisions." 
  },
  { 
    q: "Do you offer post-launch maintenance?", 
    a: "Yes, we offer ongoing optimization, infrastructure scaling, dependency patching, and security monitoring options customized to your active operational size." 
  },
  {
    q: "Will we own the source code?",
    a: "Absolutely. Once the project is finalized, we hand over 100% intellectual property ownership. The repository is pushed to your control with zero vendor lock-in."
  },
  {
    q: "How do you handle client communication?",
    a: "We work asynchronously over Slack and Linear. For critical milestones, we schedule brief screen-shares. You'll have direct contact with engineers, not account managers."
  },
  {
    q: "Can we migrate our legacy platform to React/Tailwind?",
    a: "Yes, database and frontend migrations are one of our core specialties. We design step-by-step migration plans to ensure zero downtime and complete data integrity."
  }
];
