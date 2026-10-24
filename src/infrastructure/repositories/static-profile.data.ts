import { Profile } from "@/core/domain/profile.entity";

/**
 * Static in-repository dataset for the developer profile.
 */
export const STATIC_PROFILE_DATA: Profile = {
  personal: {
    name: "Fabrício Jean Silva",
    position: "Senior Software Engineer",
    quote:
      "I have been developing high\u2011quality Software since 2014, and having fun doing it since then.",
  },
  about: {
    title: "About",
    description:
      "I am a key member of Getir's procurement team, focused on revolutionizing urban goods delivery. My role involves managing 22 Node.js/TypeScript microservices, optimizing workflows, and driving quality enhancements. By actively monitoring and improving our tribe services, I've contributed to significant cost savings. Additionally, I aid in creating and analyzing service metrics to facilitate smarter decision-making. Outside of my core responsibilities, I participate in diverse initiatives like Data Mesh implementation and Mongo Atlas cost analysis. Furthermore, my experience extends to FitAnalytics, where I played a vital role in developing and maintaining high-performance Golang/Node.js microservices. I've also contributed to system architecture design and cloud-based service maintenance, ensuring seamless operations during critical periods like Black Friday. Alongside my professional duties, I provide mentorship to colleagues, supporting their learning and growth objectives.",
  },
  experience: {
    title: "Experience",
    items: [
      {
        period: "2022 — PRESENT",
        position: "Senior Software Engineer",
        company: "Getir",
        companyUrl: "https://getir.com",
        location: "Lisbon - Portugal/Berlin - Germany",
        bulletPoints: [
          "I work in the Getir's procurement team where I help the company to provide unprecedented solutions to delivering goods in urban areas.",
          "Implement and maintain around 22 NodeJS/Typescript microservices.",
          "Actively contribute to enhancing our team's workflow by engaging in discussions, refining processes, and improving quality standards.",
          "Continuously monitor and enhance the performance of our tribe services to achieve a monthly cost reduction",
          "I assist in create and analyze our service metrics, empowering our PMs and managers to make smarter decisions.",
          "I am involved in various company initiatives with distinct objectives, such as implementing Data Mesh and analyzing Mongo Atlas costs.",
          "Provide mentorship to my colleague to reach their learning goals.",
        ],
        techStack: [
          "NodeJS",
          "TypeScript",
          "AWS",
          "Kafka",
          "RabbitMQ",
          "NATS",
          "MongoDB",
          "Redis",
          "NestJS",
          "Terraform",
          "Docker",
          "Kubernetes",
          "Domain-Driven Design (DDD)",
          "Git",
        ],
      },
      {
        period: "Mar. 2020 ‐ May. 2022",
        position: "Software Engineer",
        company: "FitAnalytics a Snap.INC",
        location: "Berlin - Germany",
        companyUrl: "https://fitanalytics.com/",
        bulletPoints: [
          "I worked in the Snap.INC (FitAnalytics) core team, where we give leading brands and retailers all the tools they need to solve sizing.",
          "Implemented and maintained Golang/NodeJS micro-services able to handle huge loads.",
          "Actively contributed to design our systems architecture.",
          "Contributed to build and maintain our cloud-based services as part of the team.",
          "Assisted the team in ensure the successful Black Friday seasons with no incidents for our clients by provide more than 900K request per second.",
          "Monitored and Improved our service performance.",
        ],
        techStack: [
          "NodeJS",
          "Golang",
          "GCP",
          "Docker",
          "Terraform",
          "Postgres",
          "Kubernetes",
          "Git",
        ],
      },
      {
        period: "Aug. 2018 - Mar. 2020",
        position: "FullStack Developer",
        company: "Runtastic a Adidas Company",
        location: "Linz - Austria",
        companyUrl: "https://runtastic.com",
        bulletPoints: [
          "I worked in the Runtastic (Adidas) user engagement team, focusing on enhancing user retention and motivation to achieve their fitness goals through our applications.",
          "I contributed to the development and maintenance of our modern microservices architecture, serving over 10 million active users.",
          "Collaborated closely with cross-functional teams, including product managers, designers, and fellow engineers, to translate requirements into scalable and reliable software solutions.",
          "Implemented automated CI/CD pipelines, increasing deployment frequency and reducing lead time for changes, leading to faster feature delivery to end-users.",
          "Mentored junior engineers and conducted knowledge-sharing sessions on modern web development practices and emerging technologies.",
          "Successfully resolved complex technical issues and performance bottlenecks, optimizing system reliability and user experience.",
        ],
        techStack: [
          "NodeJS",
          "TypeScript",
          "AWS",
          "Docker",
          "ReactJS",
          "HTML",
          "CSS3",
          "Git",
        ],
      },
      {
        period: "Jun. 2017 - Aug. 2018",
        position: "FullStack Developer",
        company: "Resultados Digitais",
        location: "Florianópolis - Brazil",
        companyUrl: "https://rdstation.com.br",
        bulletPoints: [
          "I worked in Resultados Digitais' team responsible for creating features for our application to help our customers generate leads.",
          "Collaborated with the team to develop and maintain services aimed at empowering users to effortlessly create and publish captivating landing pages.",
          "Helped to manage over 3 million daily landing page requests, ensuring smooth service delivery and top-notch user experience.",
          "Learned two new programming languages, Ruby and Golang.",
          "Practiced agile methodologies, including pair programming and daily Test-Driven Development (TDD), to ensure efficient development and high-quality code.",
          "Designed and built a service to manage more than 17K landing page certificates.",
        ],
        techStack: [
          "NodeJS",
          "Golang",
          "Ruby on Rails",
          "Docker",
          "Git",
          "AWS",
          "Azure",
          "ReactJS",
          "HTML",
          "CSS3",
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
        issueDate: "October 19, 2026",
        credentialId: "A14FD38B57512B4D",
        certificationNumber: "49DB7E-93C6T0",
        credentialUrl:
          "https://learn.microsoft.com/en-us/users/fabriciojsil/credentials/a14fd38b57512b4d",
        skills: [
          "Cloud Concepts",
          "Azure Architecture and Services",
          "Azure Management and Governance",
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
    {
      name: "X",
      url: "https://twitter.com/fabriciojsil",
      icon: "twitter",
      ariaLabel: "Fabricio's X (Twitter) profile (opens in a new tab)",
    },
  ],
};
