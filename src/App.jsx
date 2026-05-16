import { useEffect, useState } from "react";
import Anika from "./assets/anika_pro.jpeg";
import ReactifyImg from "./assets/Reactify.png";
import NexusImg from "./assets/Nexus.png";
import CrisisConnectImg from "./assets/CrisisConnect.png";

const typeWords = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "Frontend Architect",
  "GenAI Builder",
];

const projects = [
  {
    name: "Reactify",
    accent: "#c8f542",
    image: ReactifyImg,
    tagline: "URLs and screenshots to production-ready React + Tailwind components",
    description:
      "A full-stack platform that converts website URLs or screenshots into production-ready React + Tailwind CSS components with live preview, responsive device simulation, and one-click export. Uses Groq (Llama 3) and Google Gemini 1.5 for AI-assisted UI generation.",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Groq API", "Puppeteer"],
    live: "https://reactify-3f22.vercel.app/",
    github: "https://github.com/anika2711garg/Reactify",
  },
  {
    name: "Nexus",
    accent: "#7b61ff",
    image: NexusImg,
    tagline: "Decentralized prediction market on Solana Devnet",
    description:
      "Built a full-stack decentralized application with a Next.js + React frontend and on-chain transactions via @solana/web3.js. Includes multi-wallet support for Phantom and Solflare for trustless market resolution.",
    tags: ["Next.js", "React.js", "Solana Web3.js", "TypeScript"],
    live: "https://nexus-atkp.vercel.app/",
    github: "https://github.com/anika2711garg/Nexus",
  },
  {
    name: "CrisisConnect",
    accent: "#f5a623",
    image: CrisisConnectImg,
    tagline: "Emergency response platform with Azure AI triage",
    description:
      "Architected a high-availability crisis reporting platform with 20+ REST APIs for CRUD operations and deployed Node.js clusters for horizontal scalability. Integrated Azure AI for real-time crisis classification and intelligent triage.",
    tags: ["Node.js", "Express.js", "MongoDB", "Azure AI", "REST APIs"],
    live: "https://youtu.be/tpAC3SFzV_4",
    github: "https://github.com/anika2711garg/Microsoft-Hackathon",
  },
];

const skillGroups = [
  ["Frontend", ["React.js", "Next.js 14", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"]],
  ["Backend", ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Microservices"]],
  ["Databases", ["MongoDB", "MySQL", "NoSQL", "Query Optimization", "DB Indexing"]],
  ["Languages", ["JavaScript", "TypeScript", "Java", "C", "SQL"]],
  ["AI/GenAI", ["Groq (Llama 3)", "Google Gemini 1.5", "Azure AI", "Prompt Engineering"]],
  ["Tools & DevOps", ["Git", "GitHub", "Postman", "Linux", "CI/CD", "Vercel", "Puppeteer"]],
];

const achievements = [
  ["Knight", "LeetCode · 1877 rating · Top 5% worldwide"],
  ["300+", "LeetCode problems solved"],
  ["400+", "GeeksforGeeks problems solved"],
  ["3-Star", "CodeChef competitive programmer"],
  ["Finalist", "Microsoft Hackathon participant"],
  ["400+", "Students mentored through SPC"],
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [typeIndex, setTypeIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const word = typeWords[typeIndex];
    const delay = deleting ? 55 : charIndex === word.length ? 1300 : 90;
    const timeout = window.setTimeout(() => {
      if (!deleting && charIndex === word.length) {
        setDeleting(true);
        return;
      }
      if (deleting && charIndex === 0) {
        setDeleting(false);
        setTypeIndex((index) => (index + 1) % typeWords.length);
        return;
      }
      setCharIndex((index) => index + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [charIndex, deleting, typeIndex]);

  useEffect(() => {
    document.title = "Anika Garg | Full Stack Developer";
  }, []);

  const portfolioHref = typeof window !== "undefined" ? window.location.href : "#top";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=DM+Mono:wght@300;400;500&family=Syne:wght@400;500;600;700;800&display=swap');

        :root {
          --background: #0a0a0f;
          --surface: #111118;
          --foreground: #f4f7fb;
          --text-muted: #92a0b5;
          --primary: #c8f542;
          --secondary: #7b61ff;
          --accent: #f5a623;
          --border: rgba(255,255,255,0.08);
          --glass: rgba(255,255,255,0.04);
          --shadow: 0 20px 60px rgba(0,0,0,0.35);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          background: var(--background);
          color: var(--foreground);
          font-family: 'Syne', sans-serif;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }
        body::-webkit-scrollbar { width: 4px; }
        body::-webkit-scrollbar-track { background: var(--background); }
        body::-webkit-scrollbar-thumb { background: var(--primary); border-radius: 999px; }

        h1, h2, h3, h4, h5, h6 { font-family: 'Playfair Display', serif; margin: 0; }
        a { color: inherit; text-decoration: none; }
        img { display: block; max-width: 100%; }

        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes grain {
          0%,100% { transform: translate(0,0); }
          10% { transform: translate(-2%, -3%); }
          30% { transform: translate(3%, -1%); }
          50% { transform: translate(-1%, 3%); }
          70% { transform: translate(2%, 1%); }
          90% { transform: translate(-3%, 2%); }
        }

        .page {
          min-height: 100vh;
          position: relative;
          background:
            radial-gradient(circle at top right, rgba(200,245,66,0.08), transparent 28%),
            radial-gradient(circle at 20% 20%, rgba(123,97,255,0.10), transparent 28%),
            radial-gradient(circle at 80% 70%, rgba(245,166,35,0.08), transparent 24%),
            var(--background);
        }
        .noise::after {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 999;
          opacity: 0.35;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          animation: grain 8s steps(10) infinite;
        }
        .container { width: min(1180px, calc(100% - 32px)); margin: 0 auto; }
        .fade-up { animation: fadeUp 0.8s ease both; }
        .float-slow { animation: float 7s ease-in-out infinite; }
        .glass {
          background: var(--glass);
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }
        .kicker {
          font-family: 'DM Mono', monospace;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: 11px;
          color: var(--primary);
        }
        .title-gradient {
          background: linear-gradient(90deg, var(--primary), var(--accent), var(--secondary), var(--primary));
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }
        .mono-tag {
          display: inline-flex;
          align-items: center;
          padding: 7px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.04);
          color: var(--text-muted);
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: all 200ms ease;
        }
        .mono-tag:hover {
          transform: translateY(-2px);
          border-color: rgba(200,245,66,0.35);
          box-shadow: 0 0 0 1px rgba(200,245,66,0.08), 0 14px 26px rgba(0,0,0,0.25);
          color: var(--foreground);
        }
        .pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px;
          border-radius: 999px;
          font-weight: 700;
          transition: transform 200ms ease, box-shadow 200ms ease, background 200ms ease;
        }
        .pill:hover { transform: translateY(-2px); }
        .pill-primary {
          background: linear-gradient(90deg, var(--primary), rgba(200,245,66,0.86));
          color: #09100f;
          box-shadow: 0 12px 30px rgba(200,245,66,0.18);
        }
        .pill-secondary {
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.04);
          color: var(--foreground);
        }
        .stat-card, .section-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
          border: 1px solid var(--border);
          border-radius: 28px;
          box-shadow: 0 18px 45px rgba(0,0,0,0.22);
        }
        .stat-card {
          min-height: 145px;
          padding: 22px 20px;
        }
        .section-card {
          padding: 28px;
        }
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          padding: 18px 0;
          transition: all 220ms ease;
        }
        .nav.frosted {
          background: rgba(10,10,15,0.82);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        .brand {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 24px;
          font-weight: 900;
          letter-spacing: 0.02em;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 30px;
          flex-wrap: wrap;
        }
        .nav-links a {
          position: relative;
          color: var(--text-muted);
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          transition: color 180ms ease;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          transition: width 220ms ease;
        }
        .nav-links a:hover { color: var(--foreground); }
        .nav-links a:hover::after { width: 100%; }
        .hero {
          min-height: calc(100vh - 96px);
          display: grid;
          align-items: center;
          padding: 36px 0 64px;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 36px;
          align-items: center;
        }
        .badge-dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: var(--primary);
          box-shadow: 0 0 0 0 rgba(200,245,66,0.45);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(200,245,66,0.45); }
          70% { box-shadow: 0 0 0 12px rgba(200,245,66,0); }
          100% { box-shadow: 0 0 0 0 rgba(200,245,66,0); }
        }
        .hero-title {
          font-size: clamp(3.2rem, 7.5vw, 6.2rem);
          line-height: 0.94;
          letter-spacing: -0.04em;
          margin: 0;
        }
        .hero-copy {
          font-size: clamp(1rem, 1.6vw, 1.18rem);
          line-height: 1.72;
          color: var(--text-muted);
          max-width: 36rem;
        }
        .typewriter {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: clamp(1rem, 1.9vw, 1.5rem);
          font-weight: 700;
          color: var(--primary);
        }
        .cursor {
          display: inline-block;
          width: 1ch;
          animation: blink 1s steps(1) infinite;
        }
        .orbs {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(8px);
          opacity: 0.9;
          animation: float 8s ease-in-out infinite;
        }
        .orb.one {
          width: 380px;
          height: 380px;
          top: 10%;
          right: 10%;
          background: radial-gradient(circle, rgba(123,97,255,0.18) 0%, rgba(123,97,255,0) 70%);
        }
        .orb.two {
          width: 280px;
          height: 280px;
          bottom: 14%;
          left: -40px;
          background: radial-gradient(circle, rgba(200,245,66,0.12) 0%, rgba(200,245,66,0) 72%);
          animation-direction: reverse;
          animation-duration: 10s;
        }
        .ring {
          position: absolute;
          top: 50%;
          right: 3%;
          transform: translateY(-50%);
          width: clamp(260px, 34vw, 360px);
          height: clamp(260px, 34vw, 360px);
          border-radius: 50%;
          border: 1px dashed rgba(200,245,66,0.22);
          animation: spinSlow 20s linear infinite;
        }
        .ring::before {
          content: '';
          position: absolute;
          inset: 26px;
          border-radius: 50%;
          border: 1px solid rgba(245,166,35,0.14);
        }
        .portrait-shell {
          position: relative;
          max-width: 380px;
          margin-left: auto;
        }
        .portrait-shell::before {
          content: '';
          position: absolute;
          inset: -16px;
          border-radius: 40px;
          background: linear-gradient(145deg, rgba(200,245,66,0.20), rgba(123,97,255,0.14), rgba(245,166,35,0.14));
          filter: blur(18px);
          opacity: 0.75;
        }
        .portrait-card {
          position: relative;
          overflow: hidden;
          border-radius: 32px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          box-shadow: var(--shadow);
        }
        .portrait-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          aspect-ratio: 4 / 5;
        }
        .portrait-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.28), transparent 40%);
          pointer-events: none;
        }
        .section {
          padding: 72px 0;
        }
        .section-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 24px;
        }
        .section-title {
          font-size: clamp(2.4rem, 5vw, 4.4rem);
          line-height: 0.95;
          letter-spacing: -0.04em;
        }
        .section-note {
          max-width: 40rem;
          color: var(--text-muted);
          line-height: 1.75;
        }
        .experience-card {
          position: relative;
          padding: 28px;
          border-radius: 28px;
          background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
          border: 1px solid var(--border);
          border-left: 4px solid var(--primary);
          box-shadow: var(--shadow);
          overflow: hidden;
        }
        .metrics {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 14px;
          margin-top: 22px;
        }
        .metric {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          padding: 16px 18px;
          border-radius: 20px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
        }
        .metric span:first-child {
          font-size: 1.2rem;
        }
        .project-grid,
        .skill-grid,
        .achievement-grid,
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }
        .project-card {
          position: relative;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border-radius: 28px;
          background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
          border: 1px solid var(--border);
          box-shadow: 0 14px 36px rgba(0,0,0,0.28);
          transition: transform 220ms cubic-bezier(.2,.9,.2,1), box-shadow 220ms ease, border-color 220ms ease;
        }
        .project-card:hover {
          transform: translateY(-8px) scale(1.002);
          box-shadow: 0 32px 80px rgba(0,0,0,0.48), 0 6px 30px rgba(200,245,66,0.04);
          border-color: rgba(200,245,66,0.26);
        }
        .project-media {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
        }
        .project-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 420ms cubic-bezier(.2,.9,.2,1);
        }
        .project-card:hover .project-media img { transform: scale(1.06); }
        .project-media::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.46), transparent 42%);
        }
        .project-body, .skill-card, .achievement-card, .contact-card {
          padding: 18px;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 16px;
        }
        .project-tag {
          padding: 7px 10px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          color: var(--text-muted);
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .links-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid rgba(255,255,255,0.08);
          font-size: 12px;
          font-family: 'DM Mono', monospace;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .links-row a {
          transition: color 180ms ease, opacity 180ms ease;
          opacity: 0.86;
        }
        .links-row a:hover { opacity: 1; }
        .skill-card,
        .achievement-card,
        .contact-card {
          border-radius: 24px;
          background: linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.02));
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }
        .skill-card:hover,
        .achievement-card:hover,
        .contact-card:hover {
          transform: translateY(-4px);
          border-color: rgba(200,245,66,0.22);
          box-shadow: 0 22px 60px rgba(0,0,0,0.34);
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 16px;
        }
        .contact-grid .contact-card { display: flex; align-items: center; gap: 14px; }
        .contact-icon {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          color: var(--primary);
          font-family: 'DM Mono', monospace;
          font-size: 16px;
        }
        .footer {
          padding: 20px 0 34px;
          margin-top: 30px;
          border-top: 1px solid rgba(255,255,255,0.08);
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-muted);
        }
        .footer::before {
          content: '';
          display: block;
          height: 1px;
          margin-bottom: 18px;
          background: linear-gradient(90deg, transparent, rgba(200,245,66,0.24), rgba(123,97,255,0.22), transparent);
        }

        @media (max-width: 980px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
          .ring {
            right: -14px;
            top: 20px;
            transform: none;
            opacity: 0.55;
          }
          .portrait-shell {
            max-width: 380px;
            margin: 14px auto 0;
          }
          .nav-inner,
          .section-head {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 640px) {
          .container { width: min(100% - 20px, 1180px); }
          .nav-links { gap: 16px; }
          .nav-links a { font-size: 11px; }
          .hero { padding-top: 24px; }
          .section { padding: 56px 0; }
          .section-card, .experience-card, .project-body, .skill-card, .achievement-card, .contact-card { padding: 18px; }
          .metrics { grid-template-columns: 1fr; }
          .project-grid, .skill-grid, .achievement-grid, .contact-grid { grid-template-columns: 1fr; }
          .stat-card { min-height: 128px; }
        }
      `}</style>

      <div className="page noise">
        <header className={`nav ${scrolled ? "frosted" : ""}`}>
          <div className="container nav-inner">
            <a className="brand" href="#top" aria-label="AG logo">AG</a>
            <nav className="nav-links" aria-label="Primary navigation">
              <a href="#work">Work</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </nav>
            <a className="pill pill-primary" href="mailto:1406anika@gmail.com">Hire Me</a>
          </div>
        </header>

        <main>
          <section id="top" className="hero">
            <div className="orbs" aria-hidden="true">
              <div className="orb one" />
              <div className="orb two" />
              <div className="ring" />
            </div>

            <div className="container hero-grid">
              <div className="fade-up" style={{ animationDelay: "0ms" }}>
                <div className="glass" style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "10px 16px", borderRadius: 999, marginBottom: 24 }}>
                  <span className="badge-dot" />
                  <span className="kicker" style={{ color: "var(--foreground)" }}>Available for opportunities</span>
                </div>

                <div className="kicker" style={{ marginBottom: 14, animation: "fadeUp 0.8s ease both" }}>Punjab, India · IIIT Vadodara · CPI 8.17</div>
                <h1 className="hero-title">
                  Anika <span className="title-gradient">Garg</span>
                </h1>

                <div className="typewriter" style={{ marginTop: 18, minHeight: 28 }}>
                  <span>{typeWords[typeIndex].slice(0, charIndex)}</span>
                  <span className="cursor">|</span>
                </div>

                <p className="hero-copy" style={{ marginTop: 22 }}>
                  Full Stack Developer (MERN) building polished, scalable web products with a focus on clean architecture, responsive interfaces, and product thinking. Knight at LeetCode with 300+ problems solved and 400+ on GFG.
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 24 }}>
                  {["MERN Stack Developer", "LeetCode Knight (1877)", "Top 5% worldwide", "Microsoft Hackathon participant"].map((item) => (
                    <span className="mono-tag" key={item}>{item}</span>
                  ))}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 28 }}>
                  <a className="pill pill-primary" href="#projects">View Projects →</a>
                  <a className="pill pill-secondary" href="#contact">Get in Touch</a>
                </div>

                <div
                  className="fade-up"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
                    gap: 16,
                    marginTop: 32,
                    maxWidth: 860,
                    animationDelay: "180ms",
                  }}
                >
                  {[
                    ["8.17", "CPI / 10"],
                    ["300+", "LeetCode"],
                    ["400+", "GFG"],
                  ].map(([value, label]) => (
                    <div className="stat-card" key={label}>
                      <div style={{ fontSize: "clamp(2rem, 3vw, 3.1rem)", lineHeight: 1, fontWeight: 900, letterSpacing: "-0.05em" }}>{value}</div>
                      <div className="kicker" style={{ marginTop: 14, color: "var(--text-muted)" }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="fade-up" style={{ animationDelay: "120ms" }}>
                <div className="portrait-shell float-slow">
                  <div className="portrait-card">
                    <img src={Anika} alt="Anika Garg portrait" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="work" className="section">
            <div className="container">
              <div className="section-head fade-up">
                <div>
                  <div className="kicker">01 · Experience</div>
                  <h2 className="section-title">Professional impact</h2>
                </div>
                <p className="section-note">
                  ETY Company · Software Developer Intern (Full Stack MERN) · Aug 2024 – Oct 2024 · Remote.
                </p>
              </div>

              <div className="experience-card fade-up" style={{ animationDelay: "80ms" }}>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 18, paddingBottom: 18, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <div>
                    <h3 style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)" }}>Software Developer Intern</h3>
                    <p style={{ color: "var(--text-muted)", marginTop: 8 }}>ETY Company · Full Stack (MERN)</p>
                  </div>
                  <div className="mono-tag" style={{ color: "var(--primary)", borderColor: "rgba(200,245,66,0.24)" }}>MERN Stack</div>
                </div>
                <div className="metrics">
                  <div className="metric"><span>⚡</span><p><strong>+15%</strong> API response speed by optimizing backend flow and database indexing.</p></div>
                  <div className="metric"><span>🧩</span><p><strong>10+</strong> reusable React components built inside an Agile/Scrum workflow.</p></div>
                  <div className="metric"><span>🚀</span><p><strong>-20%</strong> front-end development time with scalable UI patterns.</p></div>
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="section">
            <div className="container">
              <div className="section-head fade-up">
                <div>
                  <div className="kicker">02 · Projects</div>
                  <h2 className="section-title">Selected work</h2>
                </div>
                <p className="section-note">
                  Three representative builds across AI, web3, and emergency response systems. Each one shows product thinking, execution, and polish.
                </p>
              </div>

              <div className="project-grid">
                {projects.map((project, index) => (
                  <article
                    key={project.name}
                    className="project-card fade-up"
                    style={{ animationDelay: `${index * 110}ms` }}
                  >
                    <div className="project-media">
                      <img src={project.image} alt={project.name} />
                      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${project.accent}20, transparent 55%)` }} />
                    </div>
                    <div className="project-body" style={{ borderTop: `1px solid ${project.accent}40` }}>
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 14 }}>
                        <div>
                          <div className="kicker" style={{ color: project.accent }}>Project {index + 1}</div>
                          <h3 style={{ fontSize: "clamp(1.6rem, 2.4vw, 2.1rem)", marginTop: 8 }}>{project.name}</h3>
                        </div>
                        <div className="mono-tag" style={{ borderColor: `${project.accent}55`, color: project.accent }}>LIVE</div>
                      </div>
                      <p style={{ color: "var(--text-muted)", lineHeight: 1.75, marginTop: 14 }}>{project.tagline}</p>
                      <p style={{ color: "var(--text-muted)", lineHeight: 1.75, marginTop: 12 }}>{project.description}</p>
                      <div className="project-tags">
                        {project.tags.map((tag) => <span className="project-tag" key={tag}>{tag}</span>)}
                      </div>
                      <div className="links-row">
                        <a href={project.live} target="_blank" rel="noreferrer">Live ↗</a>
                        <a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="skills" className="section">
            <div className="container">
              <div className="section-head fade-up">
                <div>
                  <div className="kicker">03 · Skills</div>
                  <h2 className="section-title">Technical arsenal</h2>
                </div>
                <p className="section-note">
                  A focused stack for building modern frontend experiences, strong backends, and practical AI integrations.
                </p>
              </div>

              <div className="skill-grid">
                {skillGroups.map(([label, items], index) => (
                  <div className="skill-card fade-up" style={{ animationDelay: `${index * 90}ms` }} key={label}>
                    <div className="kicker">{label}</div>
                    <div className="skill-tags">
                      {items.map((item) => <span className="mono-tag" key={item}>{item}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="achievements" className="section">
            <div className="container">
              <div className="section-head fade-up">
                <div>
                  <div className="kicker">04 · Achievements</div>
                  <h2 className="section-title">Recognition & leadership</h2>
                </div>
                <p className="section-note">
                  Competitive coding, team leadership, and hackathon experience that rounds out the technical profile.
                </p>
              </div>

              <div className="achievement-grid">
                {achievements.map(([stat, label], index) => (
                  <div className="achievement-card fade-up" style={{ animationDelay: `${index * 90}ms` }} key={label}>
                    <div style={{ fontSize: "clamp(2rem, 3vw, 3rem)", fontWeight: 900, letterSpacing: "-0.04em", color: index === 0 ? "var(--primary)" : index === 3 ? "var(--accent)" : index === 1 ? "var(--secondary)" : "var(--foreground)" }}>
                      {stat}
                    </div>
                    <p style={{ marginTop: 12, color: "var(--text-muted)", lineHeight: 1.7 }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="section">
            <div className="container">
              <div className="section-head fade-up">
                <div>
                  <div className="kicker">05 · Contact</div>
                  <h2 className="section-title">Open to opportunities</h2>
                </div>
                <p className="section-note">
                  I’m open to software engineering internships and full-time roles, especially in MERN stack, AI product development, and scalable web applications.
                </p>
              </div>

              <div className="contact-grid">
                {[
                  ["Email", "✉", "mailto:1406anika@gmail.com", "1406anika@gmail.com"],
                  ["LinkedIn", "in", "https://www.linkedin.com/in/anika-garg-b594442a4/", "LinkedIn Profile"],
                  ["GitHub", "GH", "https://github.com/anika2711garg", "GitHub Profile"],
                  ["Portfolio", "↗", portfolioHref, "Current Portfolio"],
                ].map(([label, icon, href, meta]) => (
                  <a key={label} className="contact-card fade-up" href={href} target={label === "Email" ? undefined : "_blank"} rel={label === "Email" ? undefined : "noreferrer"}>
                    <div className="contact-icon">{icon}</div>
                    <div>
                      <div className="kicker" style={{ color: label === "Email" ? "var(--primary)" : label === "LinkedIn" ? "var(--secondary)" : label === "GitHub" ? "var(--accent)" : "var(--foreground)" }}>{label}</div>
                      <div style={{ marginTop: 6, fontWeight: 700 }}>{meta}</div>
                    </div>
                  </a>
                ))}
              </div>

              <footer className="footer">
                <div>© 2026 Anika Garg · Crafted with precision in India</div>
              </footer>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
