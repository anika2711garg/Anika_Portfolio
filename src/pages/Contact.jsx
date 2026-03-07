import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { FaLinkedin, FaGithub, FaCode, FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import MovingSphere from "../components/3d/MovingSphere";
import { motion } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const phoneNumber = "7814996769";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20 px-4 md:px-12 lg:px-24 bg-[var(--background)] text-[var(--foreground)] flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-24 transition-colors duration-300 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[120px] -z-10" />

      {/* LEFT: Contact Actions */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full lg:w-1/2 max-w-xl space-y-10"
      >
        <div className="space-y-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, rotate: -2 }}
            animate={{ opacity: 1, rotate: 0 }}
            className="font-handwriting text-indigo-400 text-3xl md:text-5xl"
          >
            Connect with me instantly
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[0.85]">
            Let's <span className="text-gradient">Talk</span>
          </h2>
          <p className="text-xl text-[var(--text-muted)] leading-relaxed max-w-md mx-auto lg:mx-0 font-medium">
            Skip the forms. Reach out directly for project discussions, collaborations, or a quick technical chat.
          </p>
        </div>

        <div className="space-y-4">
          <div className="relative group">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center gap-4 py-6 rounded-3xl bg-indigo-600 text-white font-black text-xl md:text-2xl shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:shadow-[0_0_50px_rgba(79,70,229,0.5)] transition-all"
            >
              <FaPhoneAlt className="animate-bounce" /> {phoneNumber}
            </motion.a>
            <button
              onClick={copyToClipboard}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 glass rounded-2xl border border-white/20 hover:bg-white/10 transition-colors flex items-center gap-2 group/copy"
              title="Copy Number"
            >
              <span className={`text-xs font-bold transition-opacity duration-300 ${copied ? 'opacity-100' : 'opacity-0'}`}>
                COPIED!
              </span>
              <FaCode className="text-xl" />
            </button>
          </div>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 py-6 rounded-3xl border-2 border-emerald-500 text-emerald-500 font-black text-xl md:text-2xl hover:bg-emerald-500/10 transition-all font-outfit"
          >
            <FaWhatsapp size={32} /> WHATSAPP MESSAGE
          </motion.a>
        </div>

        <div className="flex gap-8 pt-6 justify-center lg:justify-start">
          {[
            { icon: FaLinkedin, url: "https://www.linkedin.com/in/anika-garg-b594442a4/", color: "hover:text-blue-500" },
            { icon: FaGithub, url: "https://github.com/anika2711garg", color: "hover:text-slate-500" },
            { icon: FaEnvelope, url: "mailto:1406anika@gmail.com", color: "hover:text-emerald-500" },
            { icon: FaCode, url: "https://leetcode.com/u/anika2711garg/", color: "hover:text-orange-500" }
          ].map((social, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.25, rotate: 5 }}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-4xl text-slate-400 transition-colors ${social.color}`}
            >
              <social.icon />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* RIGHT: 3D Visualization */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/2 h-[400px] md:h-[600px] relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-indigo-500/10 rounded-full blur-[100px] -z-10 animate-pulse" />
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={2} />
          <Suspense fallback={null}>
            <MovingSphere isTyping={false} />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </motion.div>
    </div>
  );
}
