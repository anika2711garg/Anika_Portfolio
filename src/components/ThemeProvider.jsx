// components/ThemeProvider.jsx
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true);
  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      <div className={(dark ? "dark bg-gray-900 text-white" : "bg-gray-50 text-black") + " font-['Poppins']"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
