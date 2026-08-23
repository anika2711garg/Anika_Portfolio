import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Anika from "./assets/anika.jpg";
import ReactifyImg from "./assets/Reactify.png";
import NexusImg from "./assets/Nexus.png";
import CrisisImg from "./assets/CrisisConnect.png";
import { FaGithub, FaLinkedin, FaExternalLinkAlt, FaDownload } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { ArrowDown, ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";

const EMAIL = "anika7work@gmail.com";
const PHONE = "+917814996769";
const RESUME_LINK = "https://drive.google.com/file/d/1gj6DwccN3pCyQCr2j7udrrvTz5avBK_Z/view?usp=sharing";
const RESUME_DOWNLOAD = "https://drive.google.com/uc?export=download&id=1gj6DwccN3pCyQCr2j7udrrvTz5avBK_Z";
const NAV = [
  ["Home", "#top"],
  ["Work", "#work"],
  ["Projects", "#projects"],
  ["Practice", "#leetcode"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

const jobs = [
  {
    when: "May 2026 – Present",
    role: "Software Developer Intern",
    company: "Xelron · Remote",
    points: [
      "Interned at an AI studio that builds production-grade systems and evaluation pipelines for labs and enterprise teams.",
      "Worked with engineering on software tasks around model evaluation, data quality, and shipping reliable internal tools.",
      "Moved between research, implementation, and review in a small team that iterates quickly.",
    ],
  },
  {
    when: "Aug 2025 – Oct 2025",
    role: "Full Stack Developer Intern",
    company: "ETY Company · Remote",
    points: [
      "Improved API response time by 15% through backend cleanup and database indexing.",
      "Built 10+ reusable React components inside an Agile sprint cycle.",
      "Cut frontend development time by about 20% after the UI patterns were shared.",
    ],
  },
];

const projects = [
  {
    name: "Reactify",
    note: "Featured · Generative AI",
    featured: true,
    image: ReactifyImg,
    blurb: "Paste a URL or a screenshot and it comes back as a React + Tailwind component. Live preview, code, and a refine step.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Groq", "Gemini"],
    live: "https://reactify-3f22.vercel.app/",
    liveLabel: "Live site",
    git: "https://github.com/anika2711garg/Reactify",
  },
  {
    name: "Nexus",
    note: "2026 · Software",
    image: NexusImg,
    blurb: "Prediction market on Solana Devnet. Yes/No trades, AMM pricing, and the UI only updates after the wallet transaction actually confirms.",
    tags: ["Solana", "Web3.js", "Next.js", "TypeScript"],
    live: "https://nexus-atkp.vercel.app/",
    liveLabel: "Live site",
    git: "https://github.com/anika2711garg/Nexus",
  },
  {
    name: "CrisisConnect",
    note: "2025 · Full stack + AI",
    image: CrisisImg,
    blurb: "Incident reporting with Azure AI on video, image, and audio so responders get something usable, not a pile of files.",
    tags: ["Node.js", "MongoDB", "Azure AI"],
    live: "https://youtu.be/tpAC3SFzV_4",
    liveLabel: "Watch demo",
    git: "https://github.com/anika2711garg/Microsoft-Hackathon",
  },
];

const disciplines = [
  {
    no: "01",
    title: "DSA & software",
    copy: "Java practice on LeetCode — Knight, 500+ accepted. Also 500+ on GFG and 3★ on CodeChef. Mentored 400+ students for DSA and placements.",
    href: "#leetcode",
  },
  {
    no: "02",
    title: "Full stack",
    copy: "MERN day to day. Interned at ETY shipping React and API work, and I keep product UIs close to the data layer.",
    href: "#projects",
  },
  {
    no: "03",
    title: "Generative AI",
    copy: "Reactify runs on Groq and Gemini. CrisisConnect uses Azure AI on media. At Xelron the work sits next to model evaluation pipelines.",
    href: "#work",
  },
];

const markers = [
  ["2026", "Xelron — Software Developer Intern, remote"],
  ["2025", "Microsoft Hackathon — CrisisConnect"],
  ["2025", "ETY — Full Stack Developer Intern"],
  ["Now", "IIIT Vadodara · B.Tech IT · CPI 8.2"],
];

function reveal(reduce) {
  return {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };
}

function ProjectCard({ project, fade }) {
  return (
    <Motion.article
      className={`project-card ${project.featured ? "featured" : ""}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={fade}
    >
      <div className="shot">
        <img
          src={project.image}
          alt={`${project.name} preview`}
          width="1200"
          height="750"
          loading={project.featured ? "eager" : "lazy"}
          decoding="async"
        />
      </div>
      <div className="project-meta">
        <span>{project.name}</span>
        <span>{project.note}</span>
      </div>
      <div className="project-body">
        <h3>{project.name}</h3>
        <p className="muted">{project.blurb}</p>
        <div className="tags">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <div className="links">
          <a href={project.git} target="_blank" rel="noopener noreferrer"><FaGithub /> Source</a>
          <a href={project.live} target="_blank" rel="noopener noreferrer">{project.liveLabel} <FaExternalLinkAlt size={11} /></a>
        </div>
      </div>
    </Motion.article>
  );
}

export default function App() {
  const reduce = useReducedMotion();
  const fade = reveal(reduce);
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  useEffect(() => {
    document.title = "Anika Garg · Software · DSA · Generative AI";
    document.documentElement.setAttribute("data-theme", theme);
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute("content", theme === "dark" ? "#0b0b0b" : "#ebe8e0");
    try { localStorage.setItem("theme", theme); } catch { /* ignore */ }
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["top", "work", "projects", "leetcode", "about", "contact"];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(`#${visible.target.id}`);
    }, { rootMargin: "-35% 0px -50% 0px", threshold: [0.15, 0.4, 0.7] });
    ids.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return undefined;
    const onKey = (event) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const onSubmit = (event) => {
    event.preventDefault();
    const text = encodeURIComponent(
      `Portfolio inquiry from ${form.name}\n${form.email}\n\n${form.message}`
    );
    const ios = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    window.location.href = ios
      ? `sms:${PHONE}&body=${text}`
      : `sms:${PHONE}?body=${text}`;
  };

  const goTo = (event, href) => {
    event.preventDefault();
    setOpen(false);
    setActive(href);
    const node = document.querySelector(href);
    if (node) node.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <div>
      <a className="skip" href="#main">Skip to content</a>
      {!reduce && <Motion.div className="progress" style={{ scaleX: progress }} aria-hidden="true" />}

      <header className={`site-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="wrap nav-row">
          <a className="brand" href="#top" onClick={(event) => goTo(event, "#top")}>Anika Garg</a>
          <nav className="nav-links" aria-label="Primary">
            {NAV.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className={active === href ? "active" : undefined}
                aria-current={active === href ? "location" : undefined}
                onClick={(event) => goTo(event, href)}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <button
              className="theme-btn"
              type="button"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              onClick={() => setTheme((value) => (value === "dark" ? "light" : "dark"))}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a className="btn btn-ghost nav-resume" href={RESUME_LINK} target="_blank" rel="noopener noreferrer">Resume</a>
            <a className="btn btn-fill nav-mail" href="#contact" onClick={(event) => goTo(event, "#contact")}>Contact</a>
            <button
              className="menu-btn"
              type="button"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <Motion.nav
              id="mobile-nav"
              className="drawer wrap"
              aria-label="Mobile"
              initial={reduce ? false : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={reduce ? { opacity: 1 } : { opacity: 0, height: 0 }}
              transition={{ duration: 0.28 }}
            >
              {NAV.map(([label, href]) => (
                <a key={href} href={href} onClick={(event) => goTo(event, href)}>{label}</a>
              ))}
            </Motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main id="main">
        <section id="top" className="wrap hero">
          <div>
            <div className="hero-meta mono rise d1">
              <span>Full stack · DSA · Generative AI</span>
              <span>01 / 06</span>
            </div>
            <h1 className="rise d2">
              Build it. <span className="gold italic">Prove it.</span>
            </h1>
            <p className="hero-copy muted rise d3">
              I’m Anika — B.Tech IT at IIIT Vadodara, CPI 8.2. I write MERN software,
              practice DSA in Java (LeetCode Knight, 500+), and ship generative-AI features
              with Groq, Gemini, and Azure AI. Interned at Xelron and ETY.
            </p>
            <div className="hero-foot rise d4">
              <div className="actions" style={{ marginTop: 0 }}>
                <a className="btn btn-fill" href="#projects" onClick={(event) => goTo(event, "#projects")}>Selected work</a>
                <a className="btn btn-ghost" href={RESUME_DOWNLOAD} target="_blank" rel="noopener noreferrer">
                  <FaDownload /> Download resume
                </a>
              </div>
              <a className="btn-oval" href="#projects" aria-label="Scroll to projects" onClick={(event) => goTo(event, "#projects")}>
                <ArrowDown size={18} />
              </a>
            </div>
          </div>
          <div className="portrait-wrap rise d3">
            <div className="portrait">
              <img src={Anika} alt="Portrait of Anika Garg" width="640" height="800" />
            </div>
            <div className="shot-meta mono">
              <span>Portrait / Anika Garg · Punjab</span>
              <a className="arrow" href="#contact" aria-label="Go to contact"><ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="wrap">
            <Motion.div className="section-top" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fade}>
              <p className="mono gold">Selected work — 02 / 06</p>
              <div>
                <h2>Quietly <span className="gold italic">useful.</span></h2>
                <p className="muted" style={{ marginTop: 12 }}>
                  Reactify first — generative UI. Then a Solana market, then a hackathon incident tool.
                </p>
              </div>
            </Motion.div>
            <div className="project-grid">
              {projects.map((project) => (
                <ProjectCard key={project.name} project={project} fade={fade} />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="wrap">
            <p className="mono gold">What I do — 03 / 06</p>
            <div style={{ marginTop: 28 }}>
              {disciplines.map((item) => (
                <Motion.a
                  className="do-row"
                  key={item.no}
                  href={item.href}
                  onClick={(event) => goTo(event, item.href)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={fade}
                >
                  <span className="mono">{item.no}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                  <span className="arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
                </Motion.a>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section">
          <div className="wrap">
            <Motion.div className="section-top" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fade}>
              <p className="mono gold">Experience — 04 / 06</p>
              <h2>Software, <span className="gold italic">then AI.</span></h2>
            </Motion.div>
            {jobs.map((job) => (
              <Motion.article className="job-row" key={job.company} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fade}>
                <span className="mono">{job.when.match(/\d{4}/)?.[0]}</span>
                <div>
                  <h3>{job.role}</h3>
                  <p>{job.company} · {job.when}</p>
                  <ul className="muted" style={{ margin: "10px 0 0", paddingLeft: 18 }}>
                    {job.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
                <span className="arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
              </Motion.article>
            ))}
          </div>
        </section>

        <section id="leetcode" className="section">
          <div className="wrap">
            <Motion.div className="section-top" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fade}>
              <p className="mono gold">A few markers — 05 / 06</p>
              <h2>In good <span className="gold italic">company.</span></h2>
            </Motion.div>
            {markers.map(([year, line]) => (
              <Motion.div className="marker" key={line} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fade}>
                <span className="mono">{year}</span>
                <p>{line}</p>
              </Motion.div>
            ))}
            <div className="practice" style={{ marginTop: 8 }}>
              <p className="muted">
                DSA stays in Java. Knight on LeetCode, 500+ accepted. GFG 500+. CodeChef 3★.
                The problem list lives on the profile, not here.
              </p>
              <div className="actions" style={{ marginTop: 0 }}>
                <a className="btn btn-fill" href="https://leetcode.com/u/anika2711garg/" target="_blank" rel="noopener noreferrer">
                  <SiLeetcode /> LeetCode
                </a>
                <a className="btn btn-ghost" href="https://github.com/anika2711garg/Leetcode" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Solutions
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="wrap">
            <div className="contact-grid">
              <div>
                <p className="mono gold">Let’s make something — 06 / 06</p>
                <h2 className="contact-title">
                  Have a role <span className="gold italic">in mind?</span>
                </h2>
                <p className="muted contact-lead">
                  Open to internships and full-time software roles. The form sends a text
                  to my phone with your name, email, and message.
                </p>
                <div className="reach-list">
                  <a href={`mailto:${EMAIL}`}>
                    <span className="mono">Email</span>
                    <strong>{EMAIL}</strong>
                  </a>
                  <a href={`tel:${PHONE}`}>
                    <span className="mono">Phone</span>
                    <strong>+91 78149 96769</strong>
                  </a>
                  <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer">
                    <span className="mono">Resume</span>
                    <strong>View PDF</strong>
                  </a>
                </div>
              </div>
              <form className="form-panel" onSubmit={onSubmit}>
                <p className="mono gold">Send a note</p>
                <label className="field">
                  <span>Name</span>
                  <input name="name" autoComplete="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required />
                </label>
                <label className="field">
                  <span>Email</span>
                  <input type="email" name="email" autoComplete="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required />
                </label>
                <label className="field">
                  <span>Message</span>
                  <textarea name="message" rows="4" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} required />
                </label>
                <button className="btn btn-fill form-submit" type="submit">
                  Send inquiry <ArrowUpRight size={14} />
                </button>
              </form>
            </div>

            <div className="profile-grid">
              <div>
                <p className="mono gold">Practice</p>
                <a className="profile-card" href="https://leetcode.com/u/anika2711garg/" target="_blank" rel="noopener noreferrer">
                  <SiLeetcode />
                  <span>
                    <strong>LeetCode</strong>
                    <em>Knight · 500+</em>
                  </span>
                  <ArrowUpRight size={16} />
                </a>
                <a className="profile-card" href="https://www.geeksforgeeks.org/user/anika2711garg/" target="_blank" rel="noopener noreferrer">
                  <SiGeeksforgeeks />
                  <span>
                    <strong>GeeksforGeeks</strong>
                    <em>500+ solved</em>
                  </span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
              <div>
                <p className="mono gold">Code & work</p>
                <a className="profile-card" href="https://github.com/anika2711garg" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                  <span>
                    <strong>GitHub</strong>
                    <em>anika2711garg</em>
                  </span>
                  <ArrowUpRight size={16} />
                </a>
                <a className="profile-card" href="https://www.linkedin.com/in/anika-garg-b594442a4/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                  <span>
                    <strong>LinkedIn</strong>
                    <em>anika-garg-b594442a4</em>
                  </span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
              <div>
                <p className="mono gold">File</p>
                <a className="profile-card" href={RESUME_DOWNLOAD} target="_blank" rel="noopener noreferrer">
                  <FaDownload />
                  <span>
                    <strong>Download resume</strong>
                    <em>Anika_Resume.pdf</em>
                  </span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            <footer className="foot">
              <span>© 2026 Anika Garg · Punjab</span>
              <a className="top-link" href="#top" onClick={(event) => goTo(event, "#top")}>Back to top</a>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
