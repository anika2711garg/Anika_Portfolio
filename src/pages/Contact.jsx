import emailjs from "emailjs-com";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { FaLinkedin, FaGithub, FaInstagram, FaCode } from "react-icons/fa";
import MovingSphere from "../components/3d/MovingSphere";

export default function Contact() {
  const [isTyping, setIsTyping] = useState(false);
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const handleTyping = (e) => {
    setIsTyping(e.target.value.length > 0);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          form.current.reset(); // ✅ Clear the form fields after sending
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#111827] to-[#1f2937] text-white flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-10">
      {/* LEFT: Contact Form + Socials */}
      <div className="w-full md:w-1/2 max-w-md space-y-5">
        <h2 className="text-4xl font-bold mb-2">
          Let’s <span className="text-yellow-400">talk</span>
        </h2>
        <p className="text-gray-300">
          Whether you have an idea or just want to connect, feel free to drop a message!
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="user_name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              handleTyping(e);
            }}
            placeholder="Your Name"
            className="w-full p-3 bg-[#1e293b] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              handleTyping(e);
            }}
            placeholder="Your Email"
            className="w-full p-3 bg-[#1e293b] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <textarea
            name="message"
            rows="5"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              handleTyping(e);
            }}
            placeholder="Your Message"
            className="w-full p-3 bg-[#1e293b] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <button
            type="submit"
            className="bg-yellow-400 text-black px-6 py-3 rounded-md font-bold hover:bg-yellow-500"
          >
            {sent ? "✅ Sent!" : "SEND MESSAGE"}
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex gap-5 pt-6 text-2xl">
          <a href="https://www.linkedin.com/in/anika-garg" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaLinkedin />
          </a>
          <a href="https://github.com/anika2711garg" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaGithub />
          </a>
          <a href="mailto:1406anika@gmail.com" className="hover:text-yellow-400">
            <FaGlobe />
          </a>
          <a href="https://leetcode.com/u/anika2711garg/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaCode />
          </a>
        </div>
      </div>

      {/* RIGHT: 3D Sphere Animation */}
      <div className="w-full md:w-1/2 h-[400px] sm:h-[500px]">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <MovingSphere isTyping={isTyping} />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
}
