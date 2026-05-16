import { useState } from "react";
import { Menu, X, Sun, Moon, Home as HomeIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: <HomeIcon size={18} />, path: "#top", label: "Home" },
    { name: "Experience", path: "#work" },
    { name: "Projects", path: "#projects" },
    { name: "Skills", path: "#skills" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[rgba(10,10,15,0.72)] backdrop-blur-xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter"
        >
          <a href="#top" className="hover:opacity-90 transition-opacity">
            <span className="text-gradient">AG Portfolio</span>
          </a>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.path}
              className="text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors uppercase tracking-[0.24em] relative group opacity-90 hover:opacity-100"
            >
              <span className="flex items-center gap-2">
                {link.name}
                {link.label ? <span>{link.label}</span> : null}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-[var(--primary)]"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-white/10 bg-white/5 text-[var(--primary)]"
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
            className="md:hidden border-t border-white/10 bg-[rgba(10,10,15,0.96)] backdrop-blur-xl transition-colors duration-300"
          >
            <div className="flex flex-col p-5 gap-2">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.path}
                  onClick={toggleMenu}
                  className="text-base font-semibold hover:text-[var(--primary)] transition-colors py-3 flex items-center gap-3 text-[var(--foreground)]"
                >
                  {link.name === navLinks[0].name ? <><HomeIcon size={18} /> Home</> : link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
