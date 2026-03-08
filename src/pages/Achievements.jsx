import { motion } from "framer-motion";
import Scene from "../components/3d/Scene";
import FloatingCone from "../components/3d/FloatingCone";
import BouncingSphere from "../components/3d/BouncingSphere";
import ETY from "../assets/ETY.png";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { FaLaptopCode, FaUsers, FaTheaterMasks, FaAward } from "react-icons/fa";

export default function Achievements() {
  const experiences = [
    {
      icon: FaLaptopCode,
      title: "ETY Company",
      subtitle: "MERN Stack Developer Intern",
      description: "Driving performance by 15% via database optimization. Building robust full-stack features.",
      color: "text-indigo-500",
      image: ETY
    },
    {
      icon: FaUsers,
      title: "SPC Core Member",
      subtitle: "IIIT Vadodara",
      description: "Empowering 400+ students with DSA mentorship and placement leadership.",
      color: "text-pink-500"
    },
    {
      icon: FaTheaterMasks,
      title: "Cultural Lead",
      subtitle: "Krieva Fest",
      description: "Orchestrating the creative lifecycle of the university's premier cultural landmark.",
      color: "text-emerald-500"
    },
    {
      icon: FaAward,
      title: "Leadership",
      subtitle: "IIIT Vadodara",
      description: "Robotics Champion & Hostel General Secretary. Leading multiple campus initiatives.",
      color: "text-orange-500"
    },
  ];

  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20 px-4 md:px-12 lg:px-24 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-handwriting text-indigo-400 text-3xl md:text-5xl"
          >
            My journey of impact
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
            Beyond the code—leadership, mentorship, and real-world industrial impact.
          </p>
        </div>

        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVars}
              className="glass p-8 rounded-3xl border border-[var(--glass-border)] hover:border-indigo-500/30 transition-all duration-500 flex flex-col text-center"
            >
              <div className="mb-6 flex justify-center">
                {exp.image ? (
                  <div className="w-16 h-16 rounded-2xl bg-[var(--background)] p-3 border border-[var(--glass-border)]">
                    <img src={exp.image} alt={exp.title} className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <div className={`text-5xl ${exp.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                    <exp.icon />
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
              <p className={`text-sm font-bold uppercase tracking-widest ${exp.color} mb-4`}>
                {exp.subtitle}
              </p>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute inset-0 z-[-5] opacity-20 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <FloatingCone position={[2, 1, -2]} />
            <BouncingSphere position={[-3, -1, 0]} />
            <FloatingCone position={[-1, 2, -1]} />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </div>
    </div>
  );
}
