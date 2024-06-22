export type ProfileType = {
  personal: {
    name: string;
    position: string;
    quote: string;
  };
  about: {
    title: string;
    description: string;
  };
  experience: {
    title: string;
    items: ExperienceItemType[];
  };
};

export type ExperienceItemType = {
  period: string;
  position: string;
  company: string;
  location: string;
  companyUrl?: string;
  bulletPoints: string[];
  techStack: string[];
};

export const data: ProfileType = {
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
        position: "Software Engineer",
        company: "Höffner GmbH",
        location: "Berlin - Germany",
        companyUrl: "https://hoeffener.de/",
        bulletPoints: [
          "I worked in the Höffner Developer team that implemented and maintained five different E‑commerce.",
          "Contributed to design and implement a new CMS service using Node.js/Typescript.",
          "Actively contributed to implement new features and enhancing code quality through Test-Driven Development (TDD) and adherence to clean code principles within my team.",
          "Assisted to migrate our self-hosted infrastructure to AWS EKS.",
        ],
        techStack: [
          "NodeJS",
          "TypeScript",
          "MongoDB",
          "AWS",
          "Kubernetes",
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
};
