import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi, this is Tai Nguyen Van. I am a backend-focused software engineering
              student at FPT University.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "Backend Development / System Design / Data Management / Clean Code"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content:
          "I'm building reliable backend systems and growing through real-world software engineering work."
      },
      {
        id: "about-education",
        title: "education.txt",
        type: "file",
        content:
          "Bachelor of Software Engineering, FPT University | 2022 - 2026 (expected)"
      },
      {
        id: "about-stack",
        title: "stack.txt",
        type: "file",
        content:
          "Java / C# / JavaScript / TypeScript / Python / Spring / .NET / Node.js / Express / SQL Server / MySQL / PostgreSQL / MongoDB / Redis / Docker / Kubernetes / Jenkins / AWS"
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:nvtai24work@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                nvtai24work@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/nvtai24"
                target="_blank"
                rel="noreferrer"
              >
                @nvtai24
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/nvtai24/"
                target="_blank"
                rel="noreferrer"
              >
                nvtai24
              </a>
            </li>
            <li>
              Personal Website:{" "}
              <a
                className="text-blue-300"
                href="https://nvtai24.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                https://nvtai24.vercel.app/
              </a>
            </li>
            <li>
              Facebook:{" "}
              <a
                className="text-blue-300"
                href="https://www.facebook.com/nvtai24"
                target="_blank"
                rel="noreferrer"
              >
                nvtai24
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
