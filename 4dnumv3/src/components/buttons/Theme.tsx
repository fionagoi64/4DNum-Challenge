import React from "react";
import { AiFillMoon } from "react-icons/ai";
import { MdLightMode } from "react-icons/md";

interface ThemeProps {
  darkMode: boolean;
  handleTheme: () => void;
}

export const Theme: React.FC<ThemeProps> = ({ darkMode, handleTheme }) => {
  return (
    <div className="flex flex-row items-center gap-2">
      {darkMode ? (
        <AiFillMoon className="text-xl text-white" />
      ) : (
        <MdLightMode className="text-xl text-[#9E9E9E]" />
      )}
      <h1 className="text-sm text-wrap">
        {darkMode ? (
          <h1>
            Dark
            <br /> Mode
          </h1>
        ) : (
          <h1>
            Light
            <br /> Mode
          </h1>
        )}
      </h1>
      <button onClick={handleTheme}>
        <div className="relative">
          <div
            className={`block ${
              darkMode ? "bg-purple-200" : "bg-[#CBD5E0]"
            } w-7 h-4 rounded-full`}
          ></div>
          <button
            className={`absolute ${
              darkMode ? "right-[2px]" : "left-[2px]"
            } top-[2px] bg-white w-3 h-3 rounded-full transition`}
          ></button>
        </div>
      </button>
    </div>
  );
};
