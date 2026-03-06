import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Anika from "../assets/anika_pro.jpeg"; // Updated professional photo
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaGlobe,
  FaGraduationCap,
} from "react-icons/fa";
import "../styles/animations.css";

function FloatingSphere() {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.y += 0.01;
    ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.8, 48, 48]} />
      <meshStandardMaterial color="#60a5fa" wireframe />
    </mesh>
  );
}

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900 px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-12">

      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-8">
        <img
          src={Anika}
          alt="My Portrait"
          className="w-48 h-48 rounded-full border-4 border-blue-400 shadow-xl object-cover object-top animate-float"
        />

        <h1 className="text-6xl font-extrabold text-blue-800 animate-text-slide whitespace-nowrap">
          Hey, I’m Anika Garg 👋
        </h1>

        <p className="text-2xl font-bold text-gray-800 animate-fade-in">
          🚀 B.Tech IT student at <span className="text-blue-600 font-extrabold">IIIT Vadodara</span>
        </p>

        <p className="text-xl font-bold max-w-xl animate-fade-in">
          I'm a passionate <span className="text-indigo-700 font-extrabold">MERN Stack Developer</span> dedicated to building scalable and functional web applications. Enthusiastic about problem-solving and exploring new technologies.
        </p>

        <p className="text-lg italic text-gray-700 font-semibold animate-fade-in">
          "Building functional code, one line at a time! 💻✨"
        </p>

        <div className="mt-4 space-y-3 animate-fade-in">
          <h2 className="text-3xl font-extrabold text-blue-700">🧠 Tech Stack</h2>
          <p className="text-lg font-semibold leading-relaxed">
            Java, C, JavaScript, TypeScript, SQL, React.js, HTML5, CSS3, Tailwind CSS, Bootstrap, Node.js, Express.js, MongoDB, MySQL, RESTful APIs, Git, GitHub, Azure, Postman
          </p>
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-md font-medium text-black text-xl flex items-center gap-2">
              <FaCode className="text-yellow-500" /> Solved <span className="text-blue-600 font-bold">260+ problems</span> on <a href="https://leetcode.com/u/anika2711garg/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-600">LeetCode</a>
            </p>
            <p className="text-md font-medium text-black text-xl flex items-center gap-2">
              <FaGraduationCap className="text-green-600" /> Solved <span className="text-blue-600 font-bold">350+ problems</span> on <a href="https://www.geeksforgeeks.org/user/anika2711garg/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-600">GFG</a>
            </p>
            <p className="text-md font-medium text-black text-xl flex items-center gap-2">
              <FaCode className="text-amber-800" /> <span className="text-blue-600 font-bold">2 star Coder</span> on <a href="https://www.codechef.com/users/anika2711garg" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-600">CodeChef</a>
            </p>
          </div>
        </div>


        <div className="mt-4 space-y-3 animate-fade-in">
          <h2 className="text-3xl font-extrabold text-blue-700">🎯 Leadership & More</h2>
          <ul className="list-disc list-inside text-left text-lg font-semibold space-y-2">
            <li>SPC Core Member @ IIIT Vadodara — Mentoring 400+ students.</li>
            <li>Cultural Lead & Theatre Performer — Managing events like "Krieva".</li>
            <li>Robotics Champion & Hostel Gen. Secy.</li>
            <li>Passionate about Agile methodologies and SDLC.</li>
          </ul>
        </div>

        <div className="mt-6 flex gap-6 text-4xl text-blue-600 animate-fade-in">
          <a href="https://www.linkedin.com/in/anika-garg-b594442a4/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaLinkedin />
          </a>
          <a href="https://github.com/anika2711garg" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaGithub />
          </a>
          <a href="mailto:1406anika@gmail.com" className="hover:text-yellow-400">
            <FaGlobe />
          </a>
        </div>
      </div>

      {/* Right Side: Skills Grid + Learning + 3D */}
      <div className="md:w-1/2 w-full flex flex-col gap-8">

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-blue-800 font-bold text-lg">
          <div className="bg-white shadow-md rounded-lg p-4 transition-transform hover:scale-110">React.js</div>
          <div className="bg-white shadow-md rounded-lg p-4 transition-transform hover:scale-110">Node.js</div>
          <div className="bg-white shadow-md rounded-lg p-4 transition-transform hover:scale-110">MongoDB</div>
          <div className="bg-white shadow-md rounded-lg p-4 transition-transform hover:scale-110">TypeScript</div>
          <div className="bg-white shadow-md rounded-lg p-4 transition-transform hover:scale-110">Tailwind</div>
          <div className="bg-white shadow-md rounded-lg p-4 transition-transform hover:scale-110">Java</div>
        </div>

        {/* Currently Learning Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center animate-fade-in">
          <h2 className="text-2xl font-extrabold text-indigo-700 mb-3">📚 Experience highlights</h2>
          <p className="text-md font-semibold text-gray-700">
            MERN Intern at ETY Company | Scalable Web Apps | API Performance Optimization
          </p>
        </div>

        {/* 3D Sphere */}
        <div className="h-[420px] w-full">
          <Canvas camera={{ position: [2, 2, 4] }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[2, 5, 2]} />
            <FloatingSphere />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
