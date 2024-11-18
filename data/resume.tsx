import { Icons } from "@/components/ui/icons";

export const DATA = {
  work: [
    {
      company: "Qarir Generator",
      href: "https://www.instagram.com/arimaulanahardan",
      location: "Emirates, Dubai - Fulltime Remote Working",
      title: "Web Fullsatck Developer",
      logoUrl: "/company_logo/qg.jpg",
      start: "August 2024",
      end: null,
      description: "description",
    },
    {
      company: "Kazee",
      href: "https://www.instagram.com/arimaulanahardan",
      location: "Bandung, Indonesia - Partime",
      title: "Fullstack Developer",
      logoUrl: "/company_logo/kazee.jpg",
      start: "Jun 2024",
      end: "Nov 2024",
      description: "description",
    },
    {
      company: "Kode Inkorporasi Technologi (KODINK)",
      href: "#",
      location: "Bandung, Indonesia - Partime",
      title: "Fullstack Developer",
      logoUrl: "/company_logo/kodink.jpg",
      start: "May 2024",
      end: "Aug 2024",
      description: "Developed and deployed a comprehensive web application for HIPMI E-Katalog, an online platform facilitating the promotion and sale of products by HIPMI members. Integrated Vue.js with Inertia.js to build a reactive, single-page application (SPA) that provides a smooth user experience with dynamic content loading. Technologies : PHP, Javascript, Laravel, Vue JS, Inertia JS, Tailwinds CSS Available on : https://hipmi-e-katalog.mybeam.me/ ",
    },
    {
      company: "Lithium Labs",
      href: "#",
      location: "Charlotte, North Carolina Area - Remote Working",
      title: "Front End Engineer | Web 3 Developer",
      logoUrl: "/company_logo/lithiumlabs.jpg",
      start: "Feb 2024",
      end: "Jul 2024",
      description: "Developed a responsive and modern UI for Forgebot, a Solana Telegram trading bot, leveraging Visibility and Consistency principles. • Successfully integrated Wallet Connect Crypto, enhancing user experience and security. • Implemented SEO strategies, resulting in improved search engine rankings. Technologies : Typescript, ReactJS, Github, Figma, NodeJS, MaterialUI, Router, Tailwinds Available on : www.forgebot.io , https://forgebot.io/dashboard ",
    },
    {
      company: "Neural Technologies",
      href: "#",
      location: "Jakarta, Indonesia ",
      title: "Frontend Engineer | UI&UX Deisgner",
      logoUrl: "/company_logo/nti.jpg",
      start: "Jan 2023",
      end: "Dec 2023",
      description: "Developed a high-performance web application dashboard, focusing on user experience and data integration. Jakarta, 2023 • Significantly improved data loading speed from >20 seconds to <3 seconds by optimizing data fetching and rendering. Technologies: Typescript, ReactSJ, Github, Figma, Mapbox, E-Chart, AntDesign, Router, Tailwinds, Figma Available on : (It will be displayed if needed because this is an internal company application.) ",
    },
  ],
  education: [
    {
      school: "Qarir Generator",
      href: "https://pacmann.io/",
      degree: "Working Abroad Program for AI Engineers",
      logoUrl: "/company_logo/qg.jpg",
      start: "2024",
      end: null,
    },
    {
      school: "Jenderal Achmad Yani University",
      href: "https://www.undip.ac.id/",
      degree: "Bachelor's Degree of Computer Science",
      logoUrl: "/company_logo/unjani.jpg",
      start: "2024",
      end: null,
    },
    {
      school: "Bandung State Polytechnic",
      href: "https://www.undip.ac.id/",
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
