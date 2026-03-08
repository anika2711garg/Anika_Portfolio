import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Anika from "../assets/anika_pro.jpeg";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaEnvelope,
  FaGraduationCap,
} from "react-icons/fa";
import { motion } from "framer-motion";

function FloatingSphere() {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.y += 0.005;
    ref.current.rotation.z += 0.005;
    ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        color="#6366f1"
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

export default function AboutMe() {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20 px-4 md:px-12 lg:px-24 bg-[var(--background)] text-[var(--foreground)] overflow-hidden relative transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-pink-500/10 rounded-full blur-[120px] -z-10" />

      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16"
      >
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-8 md:space-y-10 text-center lg:text-left">
          <motion.div variants={itemVars} className="flex flex-col items-center lg:items-start gap-4 md:gap-6">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, rotate: -2 }}
                animate={{ opacity: 1, rotate: 0 }}
                className="font-handwriting text-indigo-400 text-3xl md:text-5xl drop-shadow-sm"
              >
                Let's build something amazing
              </motion.div>
              <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight leading-none text-[var(--foreground)]">
                Hey, I’m <br />
                <span className="text-gradient">Anika Garg</span> 👋
              </h1>
              <p className="text-xl md:text-2xl font-bold opacity-90 uppercase tracking-[0.2em] mt-6 text-[var(--foreground)]">
                MERN Stack Developer & Problem Solver
              </p>
            </div>
          </motion.div>

          <motion.p variants={itemVars} className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed max-w-2xl px-4 md:p-6 rounded-2xl glass mx-auto lg:mx-0">
            I build scalable, high-performance web applications with a focus on clean code and exceptional user experience. Currently pursuing B.Tech IT at <span className="text-indigo-500 font-bold">IIIT Vadodara</span>.
          </motion.p>

          <motion.div variants={itemVars} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl glass hover:border-indigo-500/50 transition-colors group">
              <div className="flex items-center gap-4 mb-3 justify-center lg:justify-start">
                <FaCode className="text-indigo-500 text-2xl group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-xl">Problem Solving</h3>
              </div>
              <ul className="space-y-1 text-[var(--text-muted)]">
                <li>LeetCode: <span className="text-[var(--foreground)] font-medium">260+ Solved</span></li>
                <li>GFG: <span className="text-[var(--foreground)] font-medium">350+ Solved</span></li>
                <li>CodeChef: <span className="text-indigo-500 font-medium">2★ Coder</span></li>
              </ul>
            </div>
            <div className="p-5 rounded-2xl glass hover:border-pink-500/50 transition-colors group">
              <div className="flex items-center gap-4 mb-3 justify-center lg:justify-start">
                <FaGraduationCap className="text-pink-500 text-2xl group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-xl">Leadership</h3>
              </div>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                SPC Core Member, Cultural Lead, Robotic Champion, and Hostel General Secretary.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVars} className="flex gap-6 pt-4 justify-center lg:justify-start">
            {[
              { icon: FaLinkedin, url: "https://www.linkedin.com/in/anika-garg-b594442a4/", color: "hover:text-blue-500" },
              { icon: FaGithub, url: "https://github.com/anika2711garg", color: "hover:text-slate-500" },
              { icon: FaEnvelope, url: "mailto:1406anika@gmail.com", color: "hover:text-emerald-500" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-3xl text-slate-400 transition-all duration-300 hover:scale-125 ${social.color}`}
              >
                <social.icon />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Content - Profile Image & 3D */}
        <div className="lg:w-1/2 w-full space-y-8 md:space-y-12">
          <motion.div
            variants={itemVars}
            className="relative flex items-center justify-center p-4"
          >
            {/* 3D Background behind image */}
            <div className="absolute inset-0 z-0 h-[400px] md:h-[600px] pointer-events-none opacity-40">
              <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <FloatingSphere />
              </Canvas>
            </div>

            {/* Large Profile Image */}
            <div className="relative group z-10 scale-90 md:scale-100">
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full blur-2xl opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
              <img
                src={Anika}
                alt="Portrait"
                className="relative w-72 h-72 md:w-[450px] md:h-[450px] rounded-full border-2 border-white/20 object-cover object-top shadow-2xl transition-all duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute -bottom-6 -right-6 glass p-5 rounded-2xl shadow-2xl animate-bounce hidden md:flex items-center justify-center">
                <FaCode className="text-indigo-500 text-3xl" />
              </div>
            </div>
          </motion.div>

          {/* Skills Row */}
          <motion.div
            variants={itemVars}
            className="grid grid-cols-3 gap-3 z-20 relative"
          >
            {["React", "Node", "MongoDB", "TypeScript", "Tailwind", "Java"].map((skill) => (
              <div
                key={skill}
                className="glass rounded-xl py-3 text-center text-sm md:text-base font-bold text-[var(--text-muted)] hover:text-[var(--foreground)] transition-all cursor-default"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
