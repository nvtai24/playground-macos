import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-carbon:user-profile",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-carbon:user-profile",
        excerpt: "Backend developer and software engineering student..."
      },
      {
        id: "education",
        title: "Education",
        file: "markdown/education.md",
        icon: "i-carbon:education",
        excerpt: "Bachelor of Software Engineering at FPT University..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Here are some stats about my GitHub account..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "links",
    title: "Links",
    icon: "i-octicon:repo",
    md: [
      {
        id: "portfolio",
        title: "Portfolio",
        file: "markdown/portfolio.md",
        icon: "i-octicon:browser",
        excerpt: "Tai Nguyen Van's personal portfolio website...",
        link: "https://nvtai24.vercel.app/"
      },
      {
        id: "linkedin",
        title: "LinkedIn",
        file: "markdown/linkedin.md",
        icon: "i-carbon:logo-linkedin",
        excerpt: "Connect with Tai Nguyen Van on LinkedIn...",
        link: "https://www.linkedin.com/in/nvtai24/"
      }
    ]
  }
];

export default bear;
