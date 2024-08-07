import React from "react";
import { AiFillMoon } from "react-icons/ai";
import { MdLightMode } from "react-icons/md";

interface ThemeProps {
  darkMode: boolean;
  handleTheme: () => void;
}

export const Theme: React.FC<ThemeProps> = ({ darkMode, handleTheme }) => {
  return (
    <div className="flex flex-row items-center gap-2 justify-between md:justify-center">
      <div className="flex items-center gap-2">
        {darkMode ? (
          <AiFillMoon className="text-xl text-white-200" />
        ) : (
          <MdLightMode className="text-xl text-gray-300" />
        )}

        {darkMode ? (
          <h1 className="text-sm text-wrap text-white-200">
            Dark
            <br className="hidden md:block" /> Mode
          </h1>
        ) : (
          <h1 className="text-sm text-wrap text-gray-300 md:!text-black-300">
            Light
            <br className="hidden md:block" /> Mode
          </h1>
        )}
      </div>

      <button onClick={handleTheme}>
        <div className="relative">
          <div
            className={`block ${
              darkMode ? "bg-purple-400" : "bg-gray-200"
            } w-7 h-4 rounded-full`}
          ></div>
          <div
            className={`absolute ${
              darkMode ? "right-[2px]" : "left-[2px]"
            } top-[2px] bg-white-100 w-3 h-3 rounded-full transition`}
          ></div>
        </div>
      </button>
    </div>
  );
};
