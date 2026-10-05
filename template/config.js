/*
 * Your entire portfolio lives in this file.
 * Replace the sample values below, then open index.html or deploy the folder.
 * Empty optional fields are hidden automatically by script.js.
 */
const portfolioConfig = {
  personal: {
    name: "Alex Chen",
    initials: "AC",
    role: "Software Engineer",
    tagline: "I build reliable software and intelligent systems that turn complex ideas into useful products.",
    location: "New York, NY",
    focus: "Software · AI · Data",
    availability: "Available for meaningful work",
    email: "hello@example.com",
    bio: "I enjoy working at the intersection of product thinking and engineering craft. My work spans backend systems, applied AI, and data workflows — always with an eye toward clarity, reliability, and measurable impact.",
    contactNote: "I'm always happy to hear about ambitious products, thoughtful teams, and interesting technical challenges.",
    // Leave blank to hide the resume button, or add your own file here.
    resume: "",
    image: ""
  },
  social: {
    github: "https://github.com/your-handle",
    linkedin: "https://www.linkedin.com/in/your-handle/",
    website: ""
  },
  navigation: ["about", "experience", "projects", "skills", "contact"],
  facts: [
    { label: "Currently", value: "Building in public" },
    { label: "Experience", value: "5+ years" },
    { label: "Timezone", value: "Eastern (ET)" }
  ],
  experience: [
    { period: "2023 — Present", company: "Acme Labs", role: "Senior Software Engineer", description: "Leading platform work for an AI-assisted product used by teams around the world.", tags: ["Python", "TypeScript", "AWS"] },
    { period: "2021 — 2023", company: "Northstar", role: "Software Engineer", description: "Built data products and dependable APIs while partnering closely with design and product.", tags: ["React", "Postgres", "Docker"] }
  ],
  projects: [
    { name: "Signal Board", type: "Developer tool", description: "A calm, searchable workspace for turning noisy operational data into clear next actions.", tech: ["TypeScript", "Postgres", "Charts"], github: "https://github.com/your-handle/signal-board", demo: "", featured: true },
    { name: "Atlas Search", type: "Applied AI", description: "Semantic search and retrieval experiments designed for transparent, useful answers.", tech: ["Python", "FastAPI", "Embeddings"], github: "https://github.com/your-handle/atlas-search", demo: "https://example.com", featured: false },
    { name: "Data Quality Kit", type: "Open source", description: "Small, composable checks for catching data issues before they reach production.", tech: ["SQL", "Python", "CI/CD"], github: "https://github.com/your-handle/data-quality-kit", demo: "", featured: false }
  ],
  skills: {
    "Languages": ["Python", "TypeScript", "SQL", "Go"],
    "Systems": ["APIs", "Distributed systems", "Data modeling", "Cloud infrastructure"],
    "Practices": ["Testing", "Observability", "Documentation", "Product collaboration"]
  },
  theme: { default: "midnight" }
};
