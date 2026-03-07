// components/Navbar.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Sun, Moon, Home as HomeIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: <HomeIcon size={20} />, path: "/" },
    { name: "Technical Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experiences", path: "/achievements" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-[var(--glass-border)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter"
        >
          <Link
            to="/"
            className="hover:scale-105 transition-transform"
          >
            <span className="text-gradient">AG Portfolio</span>
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="text-sm font-bold text-[var(--foreground)] hover:text-indigo-500 transition-colors uppercase tracking-widest relative group opacity-90 hover:opacity-100"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full glass hover:bg-white/10 transition-colors text-indigo-500"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full glass text-indigo-500"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={toggleMenu} className="text-indigo-500">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass border-t border-[var(--glass-border)] transition-colors duration-300"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  onClick={toggleMenu}
                  className="text-lg font-bold hover:text-indigo-500 transition-colors py-2 flex items-center gap-2"
                >
                  {link.name === "Home" ? <><HomeIcon size={20} /> Home</> : link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
