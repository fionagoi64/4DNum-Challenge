// Switch.tsx
import React from 'react';
import { AiFillMoon } from "react-icons/ai";
import { MdLightMode } from "react-icons/md";

interface SwitchProps {
    darkMode: boolean;
    toggleDisplayMode: () => void;
}

const Switch: React.FC<SwitchProps> = ({ darkMode, toggleDisplayMode }) => {
    return (
        <div className="flex flex-row gap-2 items-center dark:text-white">
            {darkMode ? <AiFillMoon className="text-xl" /> : <MdLightMode className="text-xl" />}
            <h1 className="text-sm">{darkMode ? "Dark Mode" : "Light Mode"}</h1>
            <button onClick={toggleDisplayMode}>
                <div className={`relative w-7 h-4 rounded-full ${darkMode ? "bg-purple" : "bg-gray-200"}`}>
                    <div className={`absolute h-4 w-4 top-0 bg-white rounded-full ${darkMode ? "right-0" : "left-0"}`} />
                </div>
            </button>
        </div>
    );
}

export default Switch;
