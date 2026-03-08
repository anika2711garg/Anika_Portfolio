import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ThemeProvider from "./components/ThemeProvider";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Achievements = lazy(() => import("./pages/Achievements"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));

// Simple premium loading fallback
const PageLoader = () => (
  <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
  </div>
);

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </Router>
  );
}

// Move all component definitions to their own files in `components/` or `pages/` as appropriate.

// Example: components/Navbar.jsx
// Example: components/ThemeProvider.jsx
// Example: pages/Home.jsx, pages/Projects.jsx, pages/Achievements.jsx, pages/Contact.jsx

// Also move shared 3D components like RotatingCube, BouncingSphere, etc. to a directory like `components/3d/`

// This will modularize the code and make each page/component independently maintainable.
