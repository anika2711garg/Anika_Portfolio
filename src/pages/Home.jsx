import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RotatingCube from "../components/3d/RotatingCube";
import BouncingSphere from "../components/3d/BouncingSphere";
import Scene from "../components/3d/Scene";
import WavyCone from "../components/3d/WavyCone";
import FloatingIcosahedron from "../components/3d/FloatingIcosahedron";
import SpinningTorus from "../components/3d/SpinningTorus";
import Capsule from "../components/3d/Capsule";
import Cylinder from "../components/3d/Cylinder";
import RotatingDodecahedron from "../components/3d/Dodecahedron";
import { Dodecahedron } from "@react-three/drei";
import { motion } from "framer-motion";

// Icons (assuming paths are correct from previous view)
import ReactIcon from '../assets/react.svg';
import Nextjs from '../icons/nextjs.svg';
import Tailwind from '../icons/tailwindcss.svg';
import Node from '../icons/node-js.svg';
import Express from '../icons/express.png';
import Mongo from '../icons/Mongo.png';
import Mysql from '../icons/Mysql.png';
import Rest from '../icons/rest.png';
import github from '../icons/github.png';
import Azure from '../icons/azure.jpeg';
import Postman from '../icons/postman.png';

export default function Home() {
  const [showExtra, setShowExtra] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowExtra(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: ReactIcon },
        { name: "Next.js", icon: Nextjs },
        { name: "Tailwind CSS", icon: Tailwind },
        { name: "JavaScript", icon: ReactIcon },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: Node },
        { name: "Express.js", icon: Express },
        { name: "REST APIs", icon: Rest },
        { name: "MongoDB", icon: Mongo },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "GitHub", icon: github },
        { name: "Azure", icon: Azure },
        { name: "Postman", icon: Postman },
        { name: "Git", icon: github },
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20 px-4 md:px-12 lg:px-24 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-handwriting text-indigo-400 text-3xl md:text-5xl drop-shadow-sm"
          >
            Innovation and Algorithms
          </motion.div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.9] text-[var(--foreground)]">
            Scale <br />
            <span className="text-gradient">Beyond</span> Limits
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed max-w-xl font-medium">
            Merging data structures with dynamic interfaces. Specializing in high-performance architectures and seamless user journeys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/projects" className="btn-premium w-full sm:w-auto text-center">View Projects</Link>
            <Link to="/contact" className="px-6 py-2 rounded-full border border-[var(--glass-border)] glass hover:bg-white/10 transition-colors w-full sm:w-auto text-center">Contact Me</Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="h-[300px] md:h-[500px] rounded-3xl overflow-hidden glass relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 -z-10 group-hover:opacity-20 transition-opacity" />
          <Scene>
            <RotatingCube position={[-4, 2, -2]} />
            <BouncingSphere position={[4, 2, -2]} />
            <SpinningTorus position={[-4, -2, 2]} />
            <Dodecahedron position={[0, 0, 0]} args={[1, 0]} scale={1.5} />
          </Scene>
        </motion.div>
      </div>

      {/* Skills Grid */}
      <div className="max-w-7xl mx-auto mt-24 md:mt-32 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Tech <span className="text-gradient">Arsenal</span></h2>
          <p className="text-[var(--text-muted)]">The tools and technologies I use to bring ideas to life.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillGroups.map((group, gIdx) => (
            <div key={group.title} className="space-y-6">
              <h3 className="text-xl font-bold opacity-70 px-2">{group.title}</h3>
              <div className="grid gap-4">
                {group.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (gIdx * 0.2) + (sIdx * 0.1) }}
                    className="flex items-center gap-4 p-4 rounded-2xl glass hover:border-indigo-500/30 hover:bg-white/5 transition-all group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[var(--background)] border border-[var(--glass-border)] p-2 group-hover:scale-110 transition-transform">
                      <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="font-semibold opacity-80 group-hover:opacity-100">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Extra Interactive Cards */}
      {showExtra && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="p-6 md:p-8 rounded-3xl glass space-y-6 group">
            <div className="h-40 md:h-48 rounded-2xl overflow-hidden glass relative">
              <Scene><RotatingCube /></Scene>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-indigo-500">Efficiency Focused</h3>
              <p className="text-[var(--text-muted)]">Optimizing performance and scalability is at the core of my development process.</p>
            </div>
          </div>
          <div className="p-6 md:p-8 rounded-3xl glass space-y-6 group">
            <div className="h-40 md:h-48 rounded-2xl overflow-hidden glass relative">
              <Scene><BouncingSphere /></Scene>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-pink-500">Problem Solver</h3>
              <p className="text-[var(--text-muted)]">Tackling complex challenges with structured algorithms and elegant solutions.</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Tagline */}
      <div className="text-center mt-24 md:mt-32 py-10 md:py-20 border-t border-[var(--glass-border)]">
        <h2 className="text-4xl md:text-7xl font-extrabold opacity-5 select-none">
          CODE • BUILD • SCALE
        </h2>
      </div>
    </div>
  );
}
