// components/Navbar.jsx
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";

export default function Navbar() {
  const { dark, setDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="p-4 bg-gradient-to-r from-indigo-600 to-indigo-800 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-3xl font-extrabold text-white tracking-widest">
          <Link to="/">My Portfolio</Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/Home">
            <button className="px-4 py-2 text-white bg-indigo-700 rounded-full shadow-lg hover:bg-indigo-800 transition-all hover:scale-105">
              Home
            </button>
          </Link>
          <Link to="/projects">
            <button className="px-4 py-2 text-white bg-indigo-700 rounded-full shadow-lg hover:bg-indigo-800 transition-all hover:scale-105">
              Projects
            </button>
          </Link>
          <Link to="/achievements">
            <button className="px-4 py-2 text-white bg-indigo-700 rounded-full shadow-lg hover:bg-indigo-800 transition-all hover:scale-105">
              Experiences
            </button>
          </Link>
          <Link to="/contact">
            <button className="px-4 py-2 text-white bg-indigo-700 rounded-full shadow-lg hover:bg-indigo-800 transition-all hover:scale-105">
              Contact
            </button>
          </Link>
          <Link to="/">
            <button className="px-4 py-2 text-white bg-indigo-700 rounded-full shadow-lg hover:bg-indigo-800 transition-all hover:scale-105">
              About
            </button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start space-y-4 mt-4 pl-4">
          <Link to="/Home" onClick={toggleMenu}>
            <button className="text-white">Home</button>
          </Link>
          <Link to="/projects" onClick={toggleMenu}>
            <button className="text-white">Projects</button>
          </Link>
          <Link to="/achievements" onClick={toggleMenu}>
            <button className="text-white">Experiences</button>
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            <button className="text-white">Contact</button>
          </Link>
          <Link to="/" onClick={toggleMenu}>
            <button className="text-white">About</button>
          </Link>
        </div>
      )}
    </nav>
  );
}
