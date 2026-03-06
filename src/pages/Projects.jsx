import ReactifyImg from "../assets/Reactify.png";
import NexusImg from "../assets/Nexus.png";
import CrisisConnectImg from "../assets/CrisisConnect.png";

export default function Projects() {
  const projects = [
    {
      title: "Reactify",
      image: ReactifyImg,
      bullets: [
        "Built an AI-powered platform that converts website URLs or screenshots into production-ready React + Tailwind components using Groq (Llama 3) and Google Gemini 1.5.",
        "Implemented features like live preview, responsive device simulation, AI-assisted design refinement, and component export using Next.js 14, Tailwind CSS, and Puppeteer/Playwright.",
      ],
      projectUrl: "https://reactify.example.com",
      githubUrl: "https://github.com/anika2711garg/Reactify"
    },
    {
      title: "Nexus – Decentralized Prediction Market",
      image: NexusImg,
      bullets: [
        "Contributed to the full-stack development of a decentralized prediction market platform on Solana Devnet.",
        "Built a Next.js + React frontend and integrated blockchain transactions using @solana/web3.js.",
        "Integrated wallet adapters for Phantom/Solflare to ensure seamless user onboarding."
      ],
      projectUrl: "https://nexus.example.com",
      githubUrl: "https://github.com/anika2711garg/Nexus"
    },
    {
      title: "CrisisConnect",
      image: CrisisConnectImg,
      bullets: [
        "Spearheaded the end-to-end development of a highly available crisis reporting platform.",
        "Architected a scalable Node.js backend with 20+ RESTful APIs for CRUD operations.",
        "Deployed on Node.js clusters and integrated Azure AI for intelligent incident analysis."
      ],
      projectUrl: "https://github.com/anika2711garg/CrisisConnect",
      githubUrl: "https://github.com/anika2711garg/CrisisConnect"
    }
  ];

  return (
    <div className="bg-grey py-16 px-6 md:px-20 min-h-screen">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4">
        Recent projects
      </h2>
      <p className="text-center text-red-500 max-w-3xl mx-auto text-lg mb-12">
        Below you can see some examples of my recent work. Check out my complete{" "}
        <a href="https://github.com/anika2711garg" className="text-purple-700 font-semibold underline hover:text-purple-900 transition">
          GitHub
        </a>
        . Have a project you would like to discuss?{" "}
        <a href="mailto:1406anika@gmail.com" className="text-purple-700 font-semibold underline hover:text-purple-900 transition">
          Let’s make something great together!
        </a>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                {project.bullets[0]}
              </p>
              <div className="mt-auto flex gap-3">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium bg-black text-white rounded-full hover:bg-gray-800 transition"
                >
                  View Project →
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition"
                >
                  GitHub ↗
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>

  );
}
