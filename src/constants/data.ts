export interface Skill {
  icon: string;
  category: string;
  chips: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
  metrics: string[];
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  github: string;
}

export interface Achievement {
  icon: string;
  title: string;
  description: string;
  year: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
  honors: string;
}

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO_STATS = [
  { value: "25%", label: "Throughput \u2191" },
  { value: "70%", label: "Manual Effort \u2193" },
  { value: "8.4", label: "GPA" },
];

export const ABOUT_ITEMS = [
  {
    icon: "\u2699\uFE0F",
    title: "Backend Engineering",
    desc: "Scalable microservices, REST APIs, Kafka pipelines, and performance-first thinking.",
  },
  {
    icon: "\uD83E\uDDE0",
    title: "AI & Automation",
    desc: "Machine learning, AI agents, deep learning, and RPA bots that cut manual effort.",
  },
  {
    icon: "\uD83C\uDF10",
    title: "Full-Stack Capability",
    desc: "React.js, Angular.js, Node.js, and Next.js for interfaces when the backend alone won\u2019t tell the whole story.",
  },
  {
    icon: "\uD83D\uDCD0",
    title: "System Design",
    desc: "Event-driven architectures, fault tolerance, and decisions that survive growth.",
  },
];

export const ABOUT_TAGS = [
  "Distributed Systems",
  "Event-Driven Architecture",
  "AI/ML Enthusiast",
  "Open Source",
  "Gurgaon, India",
];

export const SKILLS: Skill[] = [
  {
    icon: "\u2699\uFE0F",
    category: "Languages",
    chips: ["Python", "Java", "JavaScript"],
  },
  {
    icon: "\uD83D\uDEE0\uFE0F",
    category: "Development",
    chips: ["Flask", "Django REST Framework", "Node.js", "Express.js", "REST APIs", "Microservices", "React.js", "Angular.js"],
  },
  {
    icon: "\uD83D\uDDC4\uFE0F",
    category: "Databases",
    chips: ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "Redis"],
  },
  {
    icon: "\uD83D\uDD00",
    category: "Distributed Systems",
    chips: ["Apache Kafka", "Event-Driven Architecture", "Trigger-Driven Architecture"],
  },
  {
    icon: "\uD83E\uDDE0",
    category: "AI / ML",
    chips: ["Machine Learning", "AI Agents", "Deep Learning", "Neural Networks", "Generative AI"],
  },
  {
    icon: "\u2601\uFE0F",
    category: "Tools & Infra",
    chips: ["AWS", "Docker", "CI/CD", "Linux", "Git", "GitHub", "Cursor AI", "Observability Tools"],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Software Developer",
    company: "Delhivery \u00B7 Gurgaon",
    period: "May 2025 \u2013 Present",
    points: [
      "Built a microservice to skip redundant HQ weight-dimension capture, improving warehouse shipment processing throughput by 25% and reducing duplicate scans.",
      "Implemented Kafka retry mechanism with DLQ to handle failed events, making the system fault-tolerant and reliable.",
      "Introduced MongoDB connection pooling across microservices, reducing redundant DB connections and lowering database load.",
      "Developed CRUD APIs for LR consolidation and handled integration between WMS and TMS systems.",
      "Automated repetitive warehouse UI workflows using RPA bots, reducing manual effort by ~70% and improving operational accuracy.",
    ],
    metrics: ["25% throughput \u2191", "70% effort \u2193", "Kafka DLQ", "RPA bots"],
  },
  {
    role: "Web Development Intern",
    company: "Leading Star (Sitare Foundation) \u00B7 Gurgaon",
    period: "Jan 2025 \u2013 May 2025",
    points: [
      "Developed and maintained Sitare University admission portal and website.",
    ],
    metrics: ["React.js", "Node.js", "MongoDB"],
  },
  {
    role: "Software Development Intern",
    company: "Mathisys Advisors \u00B7 Gurgaon",
    period: "May 2024 \u2013 Aug 2024",
    points: [
      "Developed an API for file transfer between devices, facilitating the transfer of 100+ files per day.",
    ],
    metrics: ["Flask", "Gmail API", "Grafana"],
  },
  {
    role: "Software Testing Intern",
    company: "Beans.ai \u00B7 Chandigarh",
    period: "Jun 2023 \u2013 Aug 2023",
    points: [
      "Ran 50+ test cases for automated and manual testing of Beans Route, reducing 10+ bugs.",
    ],
    metrics: ["50+ test cases", "10+ bugs fixed"],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Churn Prediction Web App",
    description:
      "Built a churn prediction model achieving 80%+ accuracy using SVM and XGBoost on customer behavioral data.",
    stack: ["Python", "SVM", "XGBoost", "scikit-learn", "Flask"],
    github: "https://github.com/8mishra",
  },
  {
    title: "Web Content Similarity Analyzer",
    description:
      "Developed a tool to detect semantic similarity between web pages using simHash, TF-IDF, and Cosine Similarity.",
    stack: ["Python", "TF-IDF", "Cosine Similarity", "simHash"],
    github: "https://github.com/8mishra",
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "B.Tech, Computer Science",
    institution: "Sitare University",
    period: "2022 \u2013 2026",
    score: "GPA: 8.40",
    honors: "Dean\u2019s List",
  },
  {
    degree: "Intermediate",
    institution: "Jawahar Navodaya Vidyalaya",
    period: "2020 \u2013 2022",
    score: "93.8%",
    honors: "Dakshana Scholar",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    icon: "\u2B50",
    title: "Rookie Star Award",
    description: "Awarded at Delhivery in less than a year for outstanding performance.",
    year: "2025",
  },
  {
    icon: "\uD83C\uDF93",
    title: "100% B.Tech Scholarship",
    description: "Full scholarship by Sitare Foundation based on JEE Mains (96%ile) and JEE Advanced.",
    year: "2022",
  },
  {
    icon: "\uD83C\uDFC6",
    title: "Dakshana Scholarship",
    description: "100% JEE coaching scholarship by Dakshana Foundation based on entrance test.",
    year: "2020",
  },
  {
    icon: "\uD83C\uDF1F",
    title: "Dean\u2019s List",
    description: "Recognized on Dean\u2019s List at Sitare University for academic excellence.",
    year: "2022\u20132026",
  },
];

export const CONTACT_LINKS = [
  {
    label: "LinkedIn",
    href: "https://in.linkedin.com/in/divyansh-mishra-software-engineer",
    icon: "linkedin" as const,
  },
  {
    label: "GitHub",
    href: "https://github.com/8mishra",
    icon: "github" as const,
  },
  {
    label: "+91 83182 28855",
    href: "tel:+918318228855",
    icon: "phone" as const,
  },
];
