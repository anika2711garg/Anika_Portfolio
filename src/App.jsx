// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ThemeProvider from "./components/ThemeProvider";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import About from "./pages/About";
export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
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
