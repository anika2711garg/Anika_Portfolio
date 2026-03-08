import { motion } from "framer-motion";
import ReactifyImg from "../assets/Reactify.png";
import NexusImg from "../assets/Nexus.png";
import CrisisConnectImg from "../assets/CrisisConnect.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Reactify",
      image: ReactifyImg,
      description: "AI-powered platform converting URLs/screenshots to production-ready React + Tailwind components.",
      tech: ["Next.js 14", "Gemini AI", "Puppeteer"],
      projectUrl: "https://reactify-3f22.vercel.app/",
      githubUrl: "https://github.com/anika2711garg/Reactify"
    },
    {
      title: "Nexus",
      image: NexusImg,
      description: "Decentralized prediction market on Solana Devnet with real-time transaction tracking.",
      tech: ["Solana", "Web3.js", "Tailwind"],
      projectUrl: "https://nexus-atkp.vercel.app/",
      githubUrl: "https://github.com/anika2711garg/Nexus"
    },
    {
      title: "CrisisConnect",
      image: CrisisConnectImg,
      description: "High-availability reporting platform with Azure AI for incident analysis.",
      tech: ["Node.js", "Azure AI", "MongoDB"],
      projectUrl: "https://youtu.be/tpAC3SFzV_4",
      githubUrl: "https://github.com/anika2711garg/Microsoft-Hackathon"
    }
  ];

  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20 px-4 md:px-12 lg:px-24 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-pink-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, rotate: -2 }}
            animate={{ opacity: 1, rotate: 0 }}
            className="font-handwriting text-indigo-400 text-3xl md:text-5xl"
          >
            Proof of technical mastery
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
            A selection of my recent full-stack endeavors, bridging complex backends with fluid interfaces.
          </p>
        </div>

        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVars}
              className="glass rounded-3xl overflow-hidden group border border-[var(--glass-border)] hover:border-indigo-500/30 transition-all duration-500 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-indigo-500/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 space-y-4 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-[var(--text-muted)] leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="pt-6 flex items-center justify-between border-t border-[var(--glass-border)] opacity-60 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-bold text-sm hover:text-indigo-400"
                  >
                    <FaGithub /> SOURCE
                  </a>
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-bold text-sm hover:text-pink-400 text-gradient"
                  >
                    LIVE PREVIEW <FaExternalLinkAlt size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
