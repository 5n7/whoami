export interface ProfileData {
  name: string;
  title: string;
  imageUrl: string;
  about: string;
  basicInfo: {
    label: string;
    value: string;
  }[];
  professionalExperiences: {
    title: string;
    company: string;
    period: string;
    description: string;
    type: "main" | "side" | "past";
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
    description?: string;
  }[];
  presentations: {
    [key: string]: {
      title: string;
      event: string;
      date: string;
      link?: string;
    }[];
  };
  publications: {
    title: string;
    publisher: string;
    date: string;
    link?: string;
  }[];
  awards: {
    title: string;
    issuer: string;
    date: string;
    description?: string;
  }[];
  contacts: {
    email: string;
    github: string;
    linkedin: string;
    speakerdeck: string;
  };
}

export const profileData: ProfileData = {
  name: "Shunta Komatsu",
  title: "Engineering Manager",
  imageUrl: "/profile.png",
  about:
    "I'm a tech leader with over 5 years of experience in both software engineering and team management. I hold a Master's degree in Computer Science and have a strong passion for AI, FinTech, and real estate.",
  basicInfo: [
    { label: "Name", value: "Shunta Komatsu" },
    { label: "Birthplace", value: "Kanagawa, Japan" },
    { label: "Location", value: "Tokyo, Japan" },
    { label: "Languages", value: "Japanese (native), English (fluent)" },
    { label: "Interests", value: "Go, Observability, FinTech, Payment Systems, Real Estate, and Stocks" },
  ],
  professionalExperiences: [
    {
      title: "Engineering Manager",
      company: "Mercari, Inc.",
      period: "March 2025 - Present",
      description:
        "Leading the Payment Core team developing payment platform. Managing a team of 8 engineers with mixed Japanese and English speakers.",
      type: "main",
    },
    {
      title: "Chief Technology Officer",
      company: "Yomoyama, Inc.",
      period: "May 2025 - Present",
      description: "Leading full-stack development of a real estate price estimation service.",
      type: "side",
    },
    {
      title: "Senior Software Engineer",
      company: "Yomoyama, Inc.",
      period: "Jul 2024 - May 2025",
      description: "Developed a real estate price estimation service.",
      type: "past",
    },

    {
      title: "Technical Lead",
      company: "Mercari, Inc.",
      period: "Jul 2024 - Mar 2025",
      description: "Led technical development of payment platform in the Payment Core team.",
      type: "past",
    },
    {
      title: "Software Engineer",
      company: "Mercari, Inc.",
      period: "Apr 2022 - Jun 2024",
      description: "Joined as a new graduate and worked on developing a payment platform used company-wide.",
      type: "past",
    },
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "Tokyo University of Science",
      period: "April 2020 - March 2022",
      description:
        "Focused on artificial intelligence and machine learning. Conducted research on image processing under Professor Yukinobu Taniguchi.",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Tokyo University of Science",
      period: "April 2016 - March 2020",
      description:
        "Coursework in information engineering and statistics. Conducted research on image processing under Professor Yukinobu Taniguchi.",
    },
  ],
  presentations: {
    professional: [
      {
        title: "The Future of encoding/json",
        event: "Go Conference mini 2023 Winter IN KYOTO",
        date: "December 2023",
        link: "https://speakerdeck.com/iamshunta/the-future-of-encoding-json",
      },
      {
        title: "Recap: Automatically Instrument Your Go Source Code with Orchestrion",
        event: "mercari.go #24 - GopherCon 2023 Recap",
        date: "September 2023",
        link: "https://speakerdeck.com/iamshunta/recap-automatically-instrument-your-go-source-code-with-orchestrion",
      },
      {
        title: "Recap: The Future of JSON in Go",
        event: "Go 1.21.1 Release Party & GopherCon 2023 Recap",
        date: "September 2023",
        link: "https://speakerdeck.com/iamshunta/recap-the-future-of-json-in-go",
      },
    ],
    academic: [
      {
        title: "Passenger Flow Estimation with Bipartite Matching on Bus Surveillance Cameras",
        event: "IEEE International Conference on Multimedia Information Processing and Retrieval (MIPR) 2021",
        date: "April 2021",
      },
    ],
  },
  publications: [
    {
      title: "PCP LLM Week: How We Become AI-Native",
      publisher: "Mercari Engineering Blog",
      date: "June 2025",
      link: "https://engineering.mercari.com/blog/entry/20250604-pcp-llm-week/",
    },
    {
      title: "事業者請求払い: 多様な決済を支える決済基盤の仕組み",
      publisher: "Mercari Engineering Blog",
      date: "December 2024",
      link: "https://engineering.mercari.com/blog/entry/20241221-invoice-payment/",
    },
    {
      title: "決済基盤の Observability を向上するための Datadog Dashboard の進化",
      publisher: "Mercari Engineering Blog",
      date: "December 2023",
      link: "https://engineering.mercari.com/blog/entry/20231220-datadog-dashboard-for-observability/",
    },
    {
      title: "メルペイ決済基盤における Source Payment による決済手段の抽象化",
      publisher: "Mercari Engineering Blog",
      date: "June 2023",
      link: "https://engineering.mercari.com/blog/entry/20230613-source-payment/",
    },
  ],
  awards: [
    {
      title: "Best Presentation Award",
      issuer: "Art Science Forum",
      date: "2022",
    },
    {
      title: "Full Exemption Scholarship",
      issuer: "Japan Student Services Organization (JASSO)",
      date: "2020 - 2022",
    },
  ],
  contacts: {
    email: "hi@5n7.me",
    github: "5n7",
    linkedin: "shuntak",
    speakerdeck: "iamshunta",
  },
};
