import { Icons } from "@/components/ui/icons";

export const DATA = {
  work: [
    {
      company: "Qarir Generator",
      href: "https://www.instagram.com/arimaulanahardan",
      location: "Uni Emirates Arab, Dubai - Fulltime Remote Working",
      title: "Fullsatck Developer",
      logoUrl: "/company_logo/qg.jpg",
      start: "August 2024",
      end: null,
      description: [
        "Engineered and integrated a payment gateway using Xendit, boosting transaction volume by 30%.",
        "Implemented SEO best practices and integrated Facebook Pixel, increasing organic traffic by 25%.",
        "Optimized website performance by designing reusable JavaScript components, reducing page load time to 2 seconds.",
        "Revamped and expanded the Learning Management System (LMS), delivering new features and enhancements, which led to a 40% increase in active users and improved course completion rates.",
      ],
      technologies: "Laravel, PHP, Javascript, Tailwinds CSS, Github, Figma",
    },
    {
      company: "Kazee",
      href: "https://www.instagram.com/arimaulanahardan",
      location: "Bandung, Indonesia - Partime",
      title: "Fullstack Developer",
      logoUrl: "/company_logo/kazee.jpg",
      start: "Jun 2024",
      end: "Nov 2024",
      description: [
        "Developed and optimized a Customer Relationship Management (CRM) system, enhancing operational efficiency and streamlining user workflows, which improved task completion rates by 25%.",
        "Implemented interactive data visualization dashboards, enabling stakeholders to gain actionable insights from complex datasets, resulting in a 30% improvement in decision-making speed.",
        "Engineered duplicate data detection functionality, reducing redundant records by 40%, and ensured data accuracy across the system for improved reliability.",
        "Designed and deployed advanced features, including filtering, pagination, and sorting mechanisms, which enhanced data accessibility and user experience, boosting user productivity by 20%.",
      ],
      technologies: "Laravel, PHP, Javascript, Tailwinds CSS, Github, Figma",
    },
    {
      company: "Kode Inkorporasi Technologi (KODINK)",
      href: "#",
      location: "Bandung, Indonesia - Partime",
      title: "Fullstack Developer",
      logoUrl: "/company_logo/kodink.jpg",
      start: "May 2024",
      end: "Aug 2024",
      description: [
        "Developed and deployed a comprehensive web application for HIPMI E-Katalog, an online platform facilitating the promotion and sale of products by HIPMI members.",
        "Integrated Vue.js with Inertia.js to build a reactive, single-page application (SPA) that provides a smooth user experience with dynamic content loading.",
      ],
      technologies:
        "PHP, Javascript, Laravel, Vue JS, Inertia JS, Tailwinds CSS",
    },
    {
      company: "Lithium Labs",
      href: "#",
      location: "Charlotte, North Carolina Area - Remote Working",
      title: "Front End Engineer | Web 3 Developer",
      logoUrl: "/company_logo/lithiumlabs.jpg",
      start: "Feb 2024",
      end: "Jul 2024",
      description: [
        "Developed a responsive and modern UI for Forgebot, a Solana Telegram trading bot, leveraging Visibility and Consistency principles.",
        "Successfully integrated Wallet Connect Crypto, enhancing user experience and security.",
        "Implemented SEO strategies, resulting in improved search engine rankings.",
      ],
      technologies:
        "Typescript, ReactJS, Github, Figma, NodeJS, MaterialUI, Router, Tailwinds",
    },
    {
      company: "Neural Technologies",
      href: "#",
      location: "Jakarta, Indonesia ",
      title: "Frontend Engineer | UI&UX Deisgner",
      logoUrl: "/company_logo/nti.jpg",
      start: "Jan 2023",
      end: "Dec 2023",
      description: [
        "Developed a high-performance web application dashboard, focusing on user experience and data integration. Jakarta, 2023",
        "Significantly improved data loading speed from >20 seconds to <3 seconds by optimizing data fetching and rendering",
      ],
      technologies:
        "Typescript, ReactSJ, Github, Figma, Mapbox, E-Chart, AntDesign, Router, Tailwinds",
    },
  ],
  education: [
    {
      school: "Qarir Generator",
      href: "https://qarirgenerator.com/",
      location: "Emirates, Dubai - Online Learning",
      degree: "Working Abroad Program for AI Engineers",
      logoUrl: "/company_logo/qg.jpg",
      start: "2024",
      end: null,
    },
    {
      school: "Jenderal Achmad Yani University",
      href: "https://www.unjani.ac.id/",
      location: "Bandung, Indonesia",
      degree: "Bachelor's Degree of Computer Science",
      logoUrl: "/company_logo/unjani.jpg",
      start: "2024",
      end: null,
    },
    {
      school: "Bandung State Polytechnic",
      href: "https://www.polban.ac.id/",
      location: "Bandung, Indonesia",
      degree: "Diploma Degree of Computer Science",
      logoUrl: "/company_logo/polban.jpg",
      start: "2021",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Photomatics (Dashboard)",
      href: "https://photomatics.id",
      dates: "April 2024 - Present",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Laravel",
        "Nginx",
        "MySQL",
        "Bootstrap",
        "Flutter",
        "Hive",
        "Ubuntu",
      ],
      links: [
        {
          type: "Website",
          href: "https://photomatics.id",
          icon: <Icons.globe />,
        },
      ],
      image: "/pht.png",
      video: "",
    },
    {
      title: "VCGamers (Marketplace)",
      href: "https://vcgamers.com",
      dates: "Jan 2022 - March 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store),",
      technologies: [
        "Next.js",
        "Typescript",
        "Recoil",
        "TailwindCSS",
        "Nuxt",
        "VueX",
      ],
      links: [
        {
          type: "Website",
          href: "https://vcgamers.com",
          icon: <Icons.globe />,
        },
      ],
      image: "/vc.png",
      video: "",
    },
  ],
  themes: [
    {
      title: "Light",
      colors: ["255 255 255", "255 130 37", "180 62 63", "23 59 69"],
    },
    {
      title: "Dark",
      colors: ["240 240 240", "67 66 66", "34 34 34", "34 163 158"],
    },
    {
      title: "Retro",
      colors: ["1 32 79", "2 131 145", "230 220 172", "238 174 110"],
    },
    {
      title: "Playfull",
      colors: ["239 131 67", "241 223 198", "23 155 174", "65 88 166"],
    },
    {
      title: "System",
      colors: [],
    },
  ],
} as const;
