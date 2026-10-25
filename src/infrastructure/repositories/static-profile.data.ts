import { Profile } from "@/core/domain/profile.entity";

/**
 * Static in-repository dataset for the developer profile.
 * Synchronized with the author's primary Curriculum Vitae.
 */
export const STATIC_PROFILE_DATA: Profile = {
  personal: {
    name: "Fabrício Jean Silva",
    position: "Senior Software Engineer / Platform Engineer",
    quote:
      "Software engineer since 2014. Focused on distributed systems, platform infrastructure, and developer tooling across companies in Brazil, Germany, and Portugal.",
  },
  about: {
    title: "About",
    description:
      "Senior Software Engineer and Platform Engineer with 10+ years of experience building high-throughput distributed systems in Node.js, TypeScript, and Go. Proven track record of cutting infrastructure costs by $1.2M annually at scale and supporting peak traffic of 900k+ requests per second with zero downtime. Hands-on experience with GCP, AWS, Kubernetes, Terraform, and event-driven microservices.",
  },
  experience: {
    title: "Experience",
    items: [
      {
        period: "May. 2026 — PRESENT",
        position: "Platform Engineer",
        company: "UserCentrics",
        companyUrl: "https://usercentrics.com",
        location: "Lisbon, Portugal",
        bulletPoints: [
          "Maintain and evolve the shared internal developer platform, using engineering team feedback to improve tooling and release workflows.",
          "Automated deployment pipelines and on-demand environment provisioning to eliminate manual setup steps.",
          "Built automated security and compliance checks directly into build and release pipelines.",
          "Manage daily platform operations, monitoring system health, CI/CD pipelines, and platform uptime.",
        ],
        techStack: [
          "GCP",
          "Kubernetes",
          "Terraform",
          "Docker",
          "CI/CD",
          "Git",
        ],
      },
      {
        period: "Aug. 2024 — May. 2026",
        position: "Senior Software Engineer",
        company: "UserCentrics",
        companyUrl: "https://usercentrics.com",
        location: "Lisbon, Portugal",
        bulletPoints: [
          "Led backend development of a new customer onboarding service in NestJS and GCP to improve conversion from free to paid tiers.",
          "Collaborated with Product, Design, and Data teams to identify, prioritize, and release high-impact growth features.",
          "Modernized onboarding service infrastructure, improving system maintainability and completion flow reliability.",
        ],
        techStack: [
          "NestJS",
          "TypeScript",
          "Node.js",
          "GCP",
          "MySQL",
          "Docker",
          "Git",
        ],
      },
      {
        period: "Jun. 2022 — Jun. 2024",
        position: "Senior Software Engineer",
        company: "Getir",
        companyUrl: "https://getir.com",
        location: "Berlin, Germany / Lisbon, Portugal",
        bulletPoints: [
          "Maintained and developed 22 backend microservices in Node.js and TypeScript for the procurement and urban delivery domain.",
          "Optimized service infrastructure and resource allocation, achieving a 50% reduction in cloud costs (saving approximately $1.2M annually).",
          "Designed and tracked service metrics to give product managers and engineering leads visibility into operational performance.",
          "Contributed to cross-team technical initiatives, including the Data Mesh implementation and MongoDB Atlas cost optimization.",
          "Mentored engineering colleagues through regular pairing, architecture reviews, and code review feedback.",
        ],
        techStack: [
          "Node.js",
          "TypeScript",
          "AWS",
          "Kafka",
          "RabbitMQ",
          "NATS",
          "MongoDB",
          "Redis",
          "Prometheus",
          "Datadog",
          "Docker",
          "Kubernetes",
          "Domain-Driven Design (DDD)",
          "Git",
        ],
      },
      {
        period: "Mar. 2020 — May. 2022",
        position: "Software Engineer",
        company: "Snap.INC (FitAnalytics)",
        companyUrl: "https://fitanalytics.com",
        location: "Berlin, Germany",
        bulletPoints: [
          "Built and maintained high-throughput sizing recommendation microservices in Go and Node.js handling terabytes of retailer data.",
          "Co-architected distributed backend services to sustain Black Friday peak traffic of 900k+ requests per second with zero incidents.",
          "Conducted capacity planning and service monitoring to ensure high availability and low latency under heavy load.",
        ],
        techStack: [
          "Go",
          "Node.js",
          "GCP",
          "Docker",
          "Terraform",
          "PostgreSQL",
          "Kubernetes",
          "Git",
        ],
      },
      {
        period: "Aug. 2018 — Mar. 2020",
        position: "Software Engineer",
        company: "Höffner GmbH",
        companyUrl: "https://hoeffner.de",
        location: "Berlin, Germany",
        bulletPoints: [
          "Maintained and developed features across five e-commerce platforms for Höffner.",
          "Designed and implemented a centralized CMS service using Node.js and TypeScript.",
          "Practiced Test-Driven Development (TDD) and clean architecture principles to improve code maintainability.",
          "Helped migrate self-hosted legacy infrastructure to containerized workloads on AWS EKS.",
        ],
        techStack: [
          "TypeScript",
          "Node.js",
          "AWS EKS",
          "Docker",
          "React",
          "HTML5",
          "CSS3",
          "TDD",
          "Clean Architecture",
          "Git",
        ],
      },
      {
        period: "Jun. 2017 — Aug. 2018",
        position: "FullStack Developer",
        company: "Resultados Digitais",
        companyUrl: "https://rdstation.com",
        location: "Florianópolis, Brazil",
        bulletPoints: [
          "Built lead generation features and landing page publishing tools for RD Station's marketing platform.",
          "Helped maintain backend services handling over 3 million daily landing page requests.",
          "Developed features in Ruby and Go practicing daily Test-Driven Development (TDD) and pair programming.",
          "Designed and built a service to automate SSL certificate management for more than 17,000 custom domains.",
        ],
        techStack: [
          "Ruby",
          "Go",
          "Node.js",
          "AWS",
          "Azure",
          "Docker",
          "TDD",
          "React",
          "Git",
        ],
      },
    ],
  },
  certifications: {
    title: "Certifications",
    items: [
      {
        title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
        issuer: "Microsoft",
        issueDate: "October 2026",
        credentialId: "A14FD38B57512B4D",
        certificationNumber: "49DB7E-93C6T0",
        credentialUrl:
          "https://learn.microsoft.com/en-us/users/fabriciojsil/credentials/a14fd38b57512b4d",
        skills: [
          "Azure",
          "Cloud Computing",
          "Infrastructure",
          "Security",
        ],
        status: "certified",
      },
    ],
  },
  social: [
    {
      name: "GitHub",
      url: "https://github.com/fabriciojsil",
      icon: "github",
      ariaLabel: "Fabricio's GitHub profile (opens in a new tab)",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/fabriciojean/",
      icon: "linkedin",
      ariaLabel: "Fabricio's LinkedIn profile (opens in a new tab)",
    },
  ],
};
