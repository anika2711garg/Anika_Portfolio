import { motion } from "framer-motion";
import Anika from "../assets/anika_pro.jpeg";
import ReactifyImg from "../assets/Reactify.png";
import NexusImg from "../assets/Nexus.png";
import CrisisConnectImg from "../assets/CrisisConnect.png";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaExternalLinkAlt, FaWhatsapp } from "react-icons/fa";

const sectionTitle = (number, title) => (
  <div className="space-y-3">
    <div className="section-kicker">{number} · {title}</div>
    <div className="w-14 h-[2px] bg-[var(--primary)]/80 rounded-full" />
  </div>
);

const projects = [
  {
    title: "Reactify",
    image: ReactifyImg,
    description:
      "AI-powered platform converting URLs and screenshots into production-ready React + Tailwind components with live preview and export.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Groq API", "Puppeteer"],
    live: "https://reactify-3f22.vercel.app/",
    source: "https://github.com/anika2711garg/Reactify",
  },
  {
    title: "Nexus",
    image: NexusImg,
    description:
      "Decentralized prediction market on Solana Devnet with wallet integration and on-chain transaction flow.",
    tech: ["Solana", "Web3.js", "TypeScript", "React.js"],
    live: "https://nexus-atkp.vercel.app/",
    source: "https://github.com/anika2711garg/Nexus",
  },
  {
    title: "CrisisConnect",
    image: CrisisConnectImg,
    description:
      "High-availability crisis reporting platform with Azure AI for real-time incident classification and response.",
    tech: ["Node.js", "Express.js", "MongoDB", "Azure AI"],
    live: "https://youtu.be/tpAC3SFzV_4",
    source: "https://github.com/anika2711garg/Microsoft-Hackathon",
  },
];

const skillGroups = [
  {
    label: "Frontend",
    items: ["React.js", "Next.js 14", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Microservices"],
  },
  {
    label: "Databases",
    items: ["MongoDB", "MySQL", "NoSQL", "Query Optimization", "DB Indexing"],
  },
  {
    label: "AI / GenAI",
    items: ["Groq (Llama 3)", "Google Gemini 1.5", "Azure AI", "Prompt Engineering"],
  },
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "C", "SQL"],
  },
  {
    label: "Tools & DevOps",
    items: ["Git", "GitHub", "Postman", "Linux", "CI/CD", "Vercel", "Puppeteer"],
  },
];

const achievements = [
  { stat: "Knight", label: "LeetCode · 1877 rating · 300+ solved" },
  { stat: "3-Star", label: "CodeChef competitive programmer" },
  { stat: "400+", label: "GeeksforGeeks problems solved" },
  { stat: "400+", label: "Students mentored in DSA and interviews" },
  { stat: "500+", label: "Attendees coordinated for Krieva" },
  { stat: "Finalist", label: "Microsoft Hackathon · CrisisConnect" },
];

export default function Home() {
  return (
    <main id="top" className="bg-[var(--background)] text-[var(--foreground)] overflow-hidden relative">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10rem] right-[-8rem] w-[34rem] h-[34rem] rounded-full bg-[rgba(200,245,66,0.08)] blur-[120px]" />
        <div className="absolute bottom-[8rem] left-[-10rem] w-[30rem] h-[30rem] rounded-full bg-[rgba(123,97,255,0.12)] blur-[120px]" />
      </div>

      <section className="relative max-w-7xl mx-auto px-4 md:px-6 pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs tracking-[0.18em] uppercase text-[var(--text-muted)] fade-up">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] shadow-[0_0_10px_rgba(200,245,66,0.5)]" />
              <span className="font-handwriting text-[1.2rem] normal-case tracking-normal text-[var(--foreground)]">Open for opportunities</span>
            </div>

            <div className="space-y-5">
              <p className="section-kicker fade-up">Punjab, India · IIIT Vadodara</p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tight max-w-3xl">
                Anika <span className="text-gradient italic">Garg</span>
              </h1>
              <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl leading-relaxed fade-up">
                I build clean, reliable web products with MERN, AI-assisted workflows, and a focus on performance.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 max-w-2xl fade-up" style={{ animationDelay: "120ms" }}>
              {["MERN Stack Developer", "Knight at LeetCode", "AI / GenAI Builder"].map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 fade-up" style={{ animationDelay: "180ms" }}>
              <a href="#projects" className="btn-premium">View Projects</a>
              <a href="#contact" className="px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors font-semibold text-sm tracking-wide">
                Contact Me
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 max-w-3xl fade-up" style={{ animationDelay: "240ms" }}>
              {[
                ["8.17", "CPI / 10"],
                ["300+", "LeetCode"],
                ["400+", "GFG"],
              ].map(([value, label]) => (
                <div key={label} className="soft-card p-4">
                  <div className="font-black text-2xl md:text-3xl">{value}</div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)] mt-2">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="relative float-slow"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(91,140,255,0.10)] via-transparent to-[rgba(16,185,129,0.10)] rounded-[2rem] blur-2xl" />
            <div className="relative soft-card p-3 md:p-4 rounded-[2rem] max-w-[320px] md:max-w-[380px] mx-auto lg:max-w-[420px]">
              <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/5] bg-[#0f1017] border border-white/5">
                <img
                  src={Anika}
                  alt="Anika Garg portrait"
                  className="w-full h-full object-cover object-top scale-[0.98]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="work" className="relative max-w-7xl mx-auto px-4 md:px-6 py-20">
        {sectionTitle("01", "Experience")}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-8 soft-card p-6 md:p-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 border-b border-white/10 pb-6">
            <div>
              <p className="section-kicker mb-3">Aug 2024 – Oct 2024 · Remote</p>
              <h3 className="text-2xl md:text-3xl font-black">Software Developer Intern</h3>
              <p className="text-[var(--text-muted)] mt-2 text-base md:text-lg">ETY Company · Full Stack (MERN)</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="tag">MERN Stack</span>
              <span className="tag">Agile</span>
              <span className="tag">REST APIs</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {[
              ["+15%", "Improved API response time through backend optimization and database indexing"],
              ["10+", "Reusable React UI components shipped in an Agile workflow"],
              ["-20%", "Reduced front-end development time and improved maintainability"],
            ].map(([metric, text]) => (
              <div key={metric} className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                <div className="text-[var(--primary)] font-black text-2xl mb-3">{metric}</div>
                <p className="text-[var(--text-muted)] leading-relaxed text-sm">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="projects" className="relative max-w-7xl mx-auto px-4 md:px-6 py-20">
        {sectionTitle("02", "Projects")}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="soft-card overflow-hidden group flex flex-col"
            >
              <div className="relative h-56 overflow-hidden border-b border-white/8">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => <span key={tech} className="tag">{tech}</span>)}
                </div>
                <h3 className="text-2xl font-black">{project.title}</h3>
                <p className="text-[var(--text-muted)] leading-relaxed mt-3 flex-1">{project.description}</p>
                <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between gap-4">
                  <a href={project.source} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-[var(--primary)]">
                    <FaGithub /> Source
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-[var(--secondary)]">
                    Live <FaExternalLinkAlt size={12} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="skills" className="relative max-w-7xl mx-auto px-4 md:px-6 py-20">
        {sectionTitle("03", "Skills")}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-8">
          {skillGroups.map((group) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="soft-card p-6"
            >
              <h3 className="text-2xl font-black">{group.label}</h3>
              <div className="flex flex-wrap gap-2 mt-5">
                {group.items.map((item) => <span key={item} className="tag">{item}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="achievements" className="relative max-w-7xl mx-auto px-4 md:px-6 py-20">
        {sectionTitle("04", "Achievements")}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-8">
          {achievements.map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="soft-card p-6"
            >
              <div className="font-black text-3xl md:text-4xl text-gradient">{item.stat}</div>
              <p className="mt-2 text-base font-semibold">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative max-w-7xl mx-auto px-4 md:px-6 py-20 pb-28">
        {sectionTitle("05", "Contact")}
        <div className="soft-card p-6 md:p-10 mt-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
          <div className="space-y-5">
            <h2 className="text-4xl md:text-6xl font-black leading-tight">Open to internships and full-time roles.</h2>
            <p className="text-[var(--text-muted)] text-lg leading-relaxed max-w-2xl">
              Reach out for MERN stack development, AI-powered product work, or software engineering opportunities.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:1406anika@gmail.com" className="btn-premium">Email Me</a>
              <a href="https://wa.me/917814996769" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 transition-colors font-semibold">
                WhatsApp
              </a>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              [FaPhoneAlt, "+91-781-499-6769", "Call"],
              [FaEnvelope, "1406anika@gmail.com", "Email"],
              [FaLinkedin, "LinkedIn", "Profile"],
              [FaGithub, "GitHub", "Work"],
            ].map(([Icon, label, action]) => (
              <a
                key={label}
                href={label === "LinkedIn" ? "https://www.linkedin.com/in/anika-garg-b594442a4/" : label === "GitHub" ? "https://github.com/anika2711garg" : label === "Email" ? "mailto:1406anika@gmail.com" : "tel:+917814996769"}
                target={label === "LinkedIn" || label === "GitHub" ? "_blank" : undefined}
                rel={label === "LinkedIn" || label === "GitHub" ? "noreferrer" : undefined}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center text-[var(--primary)]"><Icon /></span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">{action}</p>
                    <p className="font-semibold mt-1">{label}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
