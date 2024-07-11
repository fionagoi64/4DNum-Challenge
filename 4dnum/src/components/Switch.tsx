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
        <div className="flex gap-3 items-center">
            {darkMode ? <MdLightMode className="text-xl" /> : <AiFillMoon className="text-xl" />}
            <h1 className="text-sm">{darkMode ? "Light Mode" : "Dark Mode"}</h1>
            <button onClick={toggleDisplayMode}>
                <div className={`relative w-7 h-4 rounded-full ${darkMode ? "bg-gray-200" : "bg-purple"}`}>
                    <div className={`absolute h-3 w-3 bg-white rounded-full ${darkMode ? "left-0" : "right-0"}`} />
                </div>
            </button>
        </div>
    );
}

export default Switch;
