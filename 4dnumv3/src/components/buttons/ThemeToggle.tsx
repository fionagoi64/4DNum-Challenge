import React from "react";
import { AiFillMoon } from "react-icons/ai";
import { MdLightMode } from "react-icons/md";
import { useTheme } from "../../context/ThemeProvider";

export const ThemeToggle: React.FC = () => {
  const { themeMode, darkTheme, lightTheme } = useTheme();
  const darkMode = themeMode === "dark";
  const lightMode = themeMode === "light";

  const handleToggle = () => {
    if (lightMode) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <div className="flex items-center justify-center">
      <p
        className={`flex items-center justify-center gap-2 text-xs
          ${darkMode ? "text-white-100" : ""} `}
      >
        <span className="text-lg">
          {darkMode ? <AiFillMoon /> : <MdLightMode />}
        </span>
        <span className="w-[12%]">{darkMode ? "Dark Mode" : "Light Mode"}</span>
      </p>

      <div className="relative inline-block w-7">
        <input
          type="checkbox"
          id="toggle"
          onChange={handleToggle}
          checked={darkMode}
          className={`toggle-checkbox absolute block w-4 h-4 rounded-full bg-white-100 border-2 border-gray-200 appearance-none cursor-pointer
          ${darkMode ? "right-0 !border-purple-400" : ""}`}
        />
        <label
          htmlFor="toggle"
          className={`toggle-label block overflow-hidden h-4 rounded-full bg-gray-200
          ${darkMode ? "!bg-purple-400" : ""}`}
        ></label>
      </div>
    </div>
  );
};
