import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Tanay Shrivastava",
  initials: "TS",
  url: "https://tanayshrivastava.dev",
  location: "Bhopal, MP, India",
  locationLink: "https://www.google.com/maps/place/bhopal",
  description:
    "Computer Science Student — Aspiring AI Software Developer. I love building AI-powered applications and helping tech communities grow.",
  summary:
    "Enthusiastic Computer Science student with hands-on experience in Salesforce development, full-stack projects, and AI-powered applications. Passionate about leveraging technology to solve real-world problems. Co-founded [Coders Era](/#experience), a tech community with 1500+ members, and built [Study-Buddy AI Hub](/#projects) using cutting-edge AI tools. Currently pursuing B.Tech in Computer Science with specialization in IoT & Blockchain.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Java",
    "JavaScript",
    "HTML/CSS",
    "SQL",
    "Salesforce",
    "Apex",
    "Lightning Web Components",
    "React",
    "Next.js",
    "AI Tools",
    "Supabase",
    "Firebase",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "shrivastavatanay22@gmail.com",
    tel: "+916266553466",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/tanaygt",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/tanayshrivastava-cse",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/tanayshrivastava",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@OCTANECODM",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:shrivastavatanay22@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Coders Era",
      href: "https://codersera.com",
      badges: ["Co-Founder"],
      location: "Bhopal, MP",
      title: "Co-Founder",
      logoUrl: "/codersera.png",
      start: "Jun 2023",
      end: "Present",
      description:
        "Co-founded and built a thriving tech community focused on organizing webinars, seminars, competitions, and quizzes for tech enthusiasts. Successfully partnered with companies to host events and grew the community to 1500+ WhatsApp members, 400+ LinkedIn followers, and 200+ Telegram members. Led community engagement initiatives and coordinated educational events to help students and professionals grow their technical skills.",
    },
    {
      company: "Agentblazer Champion Program",
      badges: ["Salesforce", "AICTE"],
      href: "https://smartbridge.com",
      location: "Remote",
      title: "Salesforce Developer Intern",
      logoUrl: "/salesforce.png",
      start: "May 2025",
      end: "Jul 2025",
      description:
        "Completed an intensive 8-week Salesforce development internship focusing on organizational setup, data management, and security. Developed and customized Salesforce applications using Apex, Object Relationships, and Lightning Web Components. Successfully earned multiple Salesforce badges including Apex Specialist, Object Relationships Superbadge Unit, and LWC Basics, demonstrating proficiency in enterprise-level CRM development.",
    },
  ],
  education: [
    {
      school: "Lakshmi Narain College of Technology (RGPV)",
      href: "https://lnct.ac.in",
      degree: "B.Tech in Computer Science (IoT & Blockchain)",
      logoUrl: "/lnct.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Barkatullah University",
      href: "https://bubhopal.ac.in",
      degree: "B.Sc. in Computer Science",
      logoUrl: "/barkatullah.png",
      start: "2022",
      end: "2024",
    },
    {
      school: "Govt. Hr. Sec. School",
      href: "#",
      degree: "Senior Secondary (Science PCM) - 83.2%",
      logoUrl: "/school.png",
      start: "2021",
      end: "2022",
    },
    {
      school: "St. Francis Convent Hr. Sec. School",
      href: "#",
      degree: "Secondary School (Class 10) - CGPA: 5.93",
      logoUrl: "/stfrancis.png",
      start: "2018",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Salesforce Expense Tracker",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "Built a comprehensive expense tracking application on the Salesforce platform that helps users log, manage, and visualize their expenses effectively. Features include secure user authentication, expense categorization, automated workflows, and interactive dashboards for expense analysis. Demonstrates advanced Salesforce customization and automation capabilities.",
      technologies: [
        "Salesforce Platform",
        "Apex",
        "Lightning Components",
        "Visualforce",
        "SOQL",
        "SOSL",
        "Salesforce Reports",
        "Dashboards",
        "Workflows",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tanaygt/salesforce-expense-tracker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Study-Buddy AI Hub",
      href: "https://study-buddy-ai.vercel.app",
      dates: "2025",
      active: true,
      description:
        "Built an AI-powered study platform with comprehensive features including AI Tutor for personalized learning, interactive Flashcards system, collaborative Study Groups, and detailed Progress Tracking. Integrated Gemini AI for intelligent tutoring capabilities and deployed on Vercel with Firebase authentication for seamless user experience.",
      technologies: [
        "Lovable.ai",
        "Gemini AI",
        "Supabase",
        "Firebase",
        "React",
        "Next.js",
        "TypeScript",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://study-buddy-ai.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/tanaygt/study-buddy-ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Salesforce Custom Apps",
      href: "#",
      dates: "May 2025 - Jul 2025",
      active: true,
      description:
        "Developed and customized multiple Salesforce applications during internship using Apex programming language, Lightning Web Components (LWC), and advanced Object Relationships. Implemented complex business logic, custom workflows, and user interfaces that enhanced organizational efficiency and data management capabilities.",
      technologies: [
        "Salesforce",
        "Apex",
        "Lightning Web Components",
        "SOQL",
        "Salesforce Flow",
        "Custom Objects",
        "Triggers",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Community Management Platform",
      href: "#",
      dates: "Jun 2023 - Present",
      active: true,
      description:
        "Built and managed digital platforms for Coders Era tech community, facilitating seamless communication and event coordination across multiple channels. Implemented automated systems for member engagement and event notifications, contributing to significant community growth and active participation.",
      technologies: [
        "WhatsApp Business API",
        "LinkedIn API",
        "Telegram Bot API",
        "JavaScript",
        "Node.js",
        "Community Management Tools",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Coders Era Tech Competitions",
      dates: "2023 - Present",
      location: "Bhopal, MP",
      description:
        "Organized and participated in multiple coding competitions, hackathons, and technical quizzes as part of Coders Era community initiatives. Facilitated knowledge sharing sessions and collaborative problem-solving events for tech enthusiasts.",
      image: "/codersera-events.png",
      links: [],
    },
    {
      title: "College Technical Fest",
      dates: "2023 - 2024",
      location: "LNCT, Bhopal",
      description:
        "Participated in various technical competitions and project showcases during college technical festivals, demonstrating innovative solutions in AI, web development, and IoT applications.",
      image: "/college-fest.png",
      links: [],
    },
  ],
} as const;