// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import RotatingCube from "../components/3d/RotatingCube";
import BouncingSphere from "../components/3d/BouncingSphere";
import Scene from "../components/3d/Scene";
import "../styles/animations.css";
import WavyCone from "../components/3d/WavyCone";
import FloatingIcosahedron from "../components/3d/FloatingIcosahedron";
import SpinningTorus from "../components/3d/SpinningTorus";
import Capsule from "../components/3d/Capsule";
import Cylinder from "../components/3d/Cylinder";
import RotatingDodecahedron from "../components/3d/Dodecahedron";
import { Dodecahedron } from "@react-three/drei";
import ReactIcon from '../assets/react.svg';
import Nextjs from '../icons/nextjs.svg';
import Tailwind from '../icons/tailwindcss.svg';
import Threejs from '../icons/Threejs.svg';
import Stream from '../icons/streamlitt.png';
import Plotly from '../icons/plotly-icon.svg';
import Chart from '../icons/chartjs-logo.svg';
import Node from '../icons/node-js.svg';
import Express from '../icons/express.png';
import Mongo from '../icons/Mongo.png';
import Mysql from '../icons/Mysql.png';
import Python from '../icons/python.png';
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

  const frontend = [
    { name: "React.js", icon: ReactIcon },
    { name: "Next.js", icon: Nextjs },
    { name: "Tailwind CSS", icon: Tailwind },
    { name: "HTML5/CSS3", icon: ReactIcon }, // Generic fallback
    { name: "Bootstrap", icon: Tailwind }, // Generic fallback
  ];

  const backend = [
    { name: "Node.js", icon: Node },
    { name: "Express.js", icon: Express },
    { name: "RESTful APIs", icon: Rest },
    { name: "MongoDB", icon: Mongo },
    { name: "MySQL", icon: Mysql },
    { name: "Java/C", icon: Python }, // Generic fallback
  ];

  const tools = [
    { name: "GitHub", icon: github },
    { name: "Azure", icon: Azure },
    { name: "Postman", icon: Postman },
    { name: "Git", icon: github },
    { name: "VS Code", icon: github },
    { name: "Linux", icon: github },
  ];

  const methodologies = [
    { name: "Agile/Scrum", icon: github },
    { name: "SDLC", icon: github },
    { name: "TDD", icon: github },
    { name: "OO Design", icon: github },
  ];


  const SkillColumn = ({ title, skills }) => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-pink-500 tracking-wide">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
        {skills.map(({ name, icon }) => (
          <div
            key={name}
            className="flex items-center gap-4 p-4 rounded-xl shadow-md backdrop-blur-lg bg-red-300 border border-pink-300/30 transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <img src={icon} alt={name} className="w-7 h-7" />
            <span className="text-black font-bold">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white px-6 py-12 md:px-20 flex flex-col items-center justify-center space-y-20">
      {/* Hero Section */}
      <div className="w-full grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <h1 className="text-6xl font-['Raleway'] tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500 animate-pulse">
            Anika Garg | MERN Developer
          </h1>
          <p className="text-lg leading-relaxed text-gray-300 max-w-xl">
            I’m a MERN stack developer focused on building high-performance web applications and scalable backend architectures. With a strong foundation in Data Structures and Algorithms, I strive to write clean, efficient, and maintainable code. From architecting RESTful APIs to crafting responsive UIs, I am passionate about delivering end-to-end digital solutions.
          </p>
        </div>

        <div className="h-[500px] rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-black animate-fade-in">
          <Scene>
            <RotatingCube position={[-4, 2, -2]} />
            <BouncingSphere position={[4, 2, -2]} />
            <SpinningTorus position={[-4, -2, 2]} />
            <WavyCone position={[4, -2, 2]} />
            <FloatingIcosahedron position={[-2, 0, 4]} />
            <Capsule position={[2, 0, 4]} />
            <Cylinder position={[0, -3, -3]} />
            <Dodecahedron
              position={[0, 3, 0]}
              args={[1, 0]}
              scale={1.5}
              rotation={[Math.PI / 4, Math.PI / 4, Math.PI / 4]}
            />
            <RotatingDodecahedron position={[0, 3, 0]} args={[1, 0]} scale={1.5} rotation={[Math.PI / 4, Math.PI / 4, Math.PI / 4]} />
          </Scene>


        </div>
      </div>

      {/* Tech Stacks Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <SkillColumn title="Frontend" skills={frontend} />
        <SkillColumn title="Backend" skills={backend} />
        <SkillColumn title="Tools & Dev" skills={tools} />
        <SkillColumn title="Methodologies" skills={methodologies} />
      </div>

      {/* Extra Animated Section */}
      {showExtra && (
        <div className="w-full flex flex-col md:flex-row gap-10 justify-center items-center pt-16">

          {/* Rotating Cube */}
          <div className="w-[300px] h-[380px] bg-black rounded-2xl p-4 shadow-lg animate-float flex flex-col items-center justify-between text-white relative">
            <div className="absolute top-4 text-xl">🧊 Optimization Mode</div>
            <Scene>
              <RotatingCube />
            </Scene>
            <div className="text-center mt-4">
              <h2 className="text-xl font-semibold">The Efficiency Cube</h2>
              <p className="text-sm mt-1 text-gray-300">
                Scaling APIs and optimizing databases is my forte. Like this cube, my code is structured and solid.
              </p>
            </div>
          </div>

          {/* Bouncing Sphere */}
          <div className="w-[300px] h-[380px] bg-black rounded-2xl p-4 shadow-lg animate-float delay-500 flex flex-col items-center justify-between text-white relative">
            <div className="absolute top-4 text-xl">☕ Dev. Solve. Deploy.</div>
            <Scene>
              <BouncingSphere />
            </Scene>
            <div className="text-center mt-4">
              <h2 className="text-xl font-semibold">The Problem Solver</h2>
              <p className="text-sm mt-1 text-gray-300">
                260+ LeetCode problems and counting. I bounce between complex algorithms and elegant UI fixes.
              </p>
            </div>
          </div>
        </div>
      )}



      {/* Moving Tagline Section */}
      <div className="text-center mt-20">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-text-slide">
          Code. Build. Scale.
        </h2>
        <p className="text-lg mt-4 text-gray-400">
          Transforming complex problems into seamless digital experiences — I build for the future.
        </p>
      </div>
    </div>
  );
}
