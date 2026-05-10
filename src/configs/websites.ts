import type { WebsitesData } from "~/types";

const websites: WebsitesData = {
  favorites: {
    title: "Tai's Links",
    sites: [
      {
        id: "my-portfolio",
        title: "Portfolio",
        img: "https://github.com/nvtai24.png",
        link: "https://nvtai24.vercel.app/",
        inner: true
      },
      {
        id: "my-github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/nvtai24"
      },
      {
        id: "my-linkedin",
        title: "Linkedin",
        img: "img/sites/linkedin.svg",
        link: "https://www.linkedin.com/in/nvtai24/"
      },
      {
        id: "my-email",
        title: "Email",
        img: "img/sites/gmail.svg",
        link: "mailto:nvtai24work@gmail.com"
      },
      {
        id: "my-facebook",
        title: "Facebook",
        img: "img/sites/facebook.svg",
        link: "https://www.facebook.com/nvtai24"
      }
    ]
  },
  freq: {
    title: "Developer Toolbox",
    sites: [
      {
        id: "github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/"
      },
      {
        id: "leetcode",
        title: "LeetCode",
        img: "img/sites/leetcode.svg",
        link: "https://leetcode.com/"
      },
      {
        id: "hacker-news",
        title: "Hacker News",
        img: "img/sites/hacker.svg",
        link: "https://news.ycombinator.com/"
      },
      {
        id: "spring",
        title: "Spring",
        img: "https://spring.io/img/favicon.ico",
        link: "https://spring.io/"
      },
      {
        id: "dotnet",
        title: ".NET",
        img: "https://dotnet.microsoft.com/favicon.ico",
        link: "https://dotnet.microsoft.com/"
      },
      {
        id: "docker",
        title: "Docker",
        img: "https://www.docker.com/favicon.ico",
        link: "https://www.docker.com/"
      },
      {
        id: "aws",
        title: "AWS",
        img: "https://a0.awsstatic.com/libra-css/images/site/fav/favicon.ico",
        link: "https://aws.amazon.com/"
      }
    ]
  }
};

export default websites;
