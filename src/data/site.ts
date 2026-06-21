export const person = {
  name: "Atl Edrei Cruz Castillo",
  role: "Senior Backend Engineer",
  email: "edreiccb@gmail.com",
  phone: "+52 5544999353",
  location: "Mexico (GMT -6)",
  linkedin: "https://www.linkedin.com/in/edreic",
  github: "https://github.com/SoloEdrei",
  website: "https://edrei.dev",
  cvUrl: "https://drive.google.com/file/d/1ImRpcXrU316PsfQF7dQKNUgDjEeMqz4y/view?usp=sharing",
  tagline: "6+ years designing and scaling backend systems in PHP, Symfony, and cloud-native architectures. I take architecture decisions, not just execute tickets.",
  available: true,
};

export const stackHighlight = [
  { label: "PHP", accent: true },
  { label: "Symfony", accent: true },
  { label: "AWS", accent: true },
  { label: "Azure", accent: true },
  { label: "Microservices", accent: true },
  { label: "Laravel", accent: false },
  { label: "NestJS", accent: false },
  { label: "Vue.js", accent: false },
  { label: "Docker", accent: false },
  { label: "AI Agents", accent: false },
];

export const experience = [
  {
    title: "Backend Engineer (Contractor)",
    company: "Winmill Software",
    location: "New York, US · Remote",
    dates: "Jul 2023 – Present",
    bullets: [
      "Reduced API response times by 20% through MySQL index optimization, stored procedure refactoring, and query tuning on high-traffic production systems.",
      "Built an AI agent using the Gemini API and vector embeddings to semantically interpret PHP billing rules, detect edge cases, and translate complex conditional logic into language-agnostic business rules — accelerating a legacy PHP-to-C# migration.",
      "Decreased monolithic system load by architecting and deploying serverless microservices with Azure Functions, improving scalability without disrupting the core system.",
      "Reduced technical debt by refactoring legacy controllers following SOLID principles and clean architecture patterns.",
      "Strengthened system security by designing and implementing a role-based access control layer across critical endpoints.",
      "Maintained and extended a Shopify-based e-commerce frontend built on React and Next.js.",
    ],
    stack: ["CodeIgniter", "PHP", "Azure", "Azure Functions", "MySQL", "SQL Server", "React", "Next.js", "Docker"],
  },
  {
    title: "Full Stack Developer",
    company: "CQM",
    location: "Madrid, Spain · Remote",
    dates: "Jul 2021 – Jul 2023",
    bullets: [
      "Migrated core platform from PHP 5.4 to 8.2 and upgraded Symfony to latest LTS, eliminating critical security vulnerabilities and improving long-term maintainability.",
      "Participated in the migration of the core system from a MongoDB/PHP monolith to a MySQL/PHP 8 microservices architecture following DDD, including multirepository design to prevent data corruption.",
      "Contributed to the migration of the core backend from PHP to NestJS as part of a broader event-driven architecture transition on AWS.",
      "Built a sales analytics microservice using Express on AWS Lambda, automating daily exports across high-volume sales data.",
      "Optimized high-traffic MySQL workloads, reducing query execution times by up to 2 seconds on production systems.",
      "Built a cross-platform mobile application using Ionic and Vue.js for the company's highest-demand product.",
      "Led technical training sessions covering Symfony API Platform, SOLID principles, and tooling — improving team code quality and reducing onboarding time.",
    ],
    stack: ["Symfony", "PHP", "NestJS", "Vue.js", "AWS", "MySQL", "MongoDB", "Ionic", "Docker", "Tailwind CSS"],
  },
  {
    title: "Full Stack Developer",
    company: "Zigatta",
    location: "CDMX, Mexico",
    dates: "Dec 2020 – Jul 2021",
    bullets: [
      "Improved performance of a core CRM CRUD module for Omnilife by 30% through asynchronous requests and Laravel queuing systems.",
      "Built a file download system integrated with the Salesforce API in Angular, streamlining a key user workflow.",
      "Developed custom WordPress plugins to improve UI/UX on client-facing platforms.",
      "Accelerated frontend development by building reusable React components and API mocks, enabling parallel development and faster testing cycles.",
    ],
    stack: ["Laravel", "PHP", "React.js", "Angular", "Vue.js", "Salesforce API", "WordPress", "MySQL"],
  },
];

export const projects = [
  {
    tag: "AI · Backend",
    title: "PHP Billing Rules AI Agent",
    description: "AI agent using the Gemini API and vector embeddings to semantically interpret PHP billing rules, detect edge cases, and accelerate a large-scale PHP-to-C# system migration.",
    stack: ["Gemini API", "PHP", "Azure", "Vector Embeddings"],
    link: null,
  },
  {
    tag: "Microservices · AWS",
    title: "Sales Analytics Microservice",
    description: "Express microservice hosted on AWS Lambda automating daily sales data exports across high-volume systems, replacing a manual reporting workflow.",
    stack: ["Express", "AWS Lambda", "Node.js", "MySQL"],
    link: null,
  },
  {
    tag: "WhatsApp · API",
    title: "WhatsApp Cloud API Bot",
    description: "Integration with WhatsApp Cloud API using Express, replacing Twilio and significantly reducing company messaging costs in production.",
    stack: ["Node.js", "Express", "WhatsApp API"],
    link: "https://github.com/SoloEdrei/ansa-whatsappbot",
  },
  {
    tag: "Government · Laravel",
    title: "Judge Evaluation System",
    description: "Monolithic application to evaluate first-instance judges in Morelos, featuring a randomized question algorithm ensuring unique evaluation per judge.",
    stack: ["Laravel", "Vue.js", "MySQL", "Vite"],
    link: "https://github.com/devanymx/tsjm-exam",
  },
];

export const skills = [
  {
    category: "Backend",
    items: ["PHP", "Symfony", "Laravel", "NestJS", "Node.js", "CodeIgniter", "Express"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (ECS, Lambda, EC2, IAM)", "Azure", "Azure Functions", "Docker", "Kubernetes", "Terraform", "CI/CD"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "MariaDB", "SQL Server", "OracleDB"],
  },
  {
    category: "Architecture",
    items: ["Microservices", "Event-Driven Architecture", "DDD", "REST APIs", "SOLID", "Clean Architecture"],
  },
  {
    category: "Frontend",
    items: ["Vue.js", "React.js", "Next.js", "Angular", "Ionic", "Tailwind CSS"],
  },
  {
    category: "AI",
    items: ["Gemini API", "OpenAI API", "Vector Embeddings", "RAG", "AI Agents", "MCP"],
  },
];
