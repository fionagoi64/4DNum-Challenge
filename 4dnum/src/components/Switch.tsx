import React, { useState } from 'react'
import { AiFillMoon } from "react-icons/ai";
import { MdLightMode } from "react-icons/md";

const Switch = () => {

    const [isLightOn, setIsLightOn] = useState(true);

    const handleSwitch = () => {
        setIsLightOn(!isLightOn);
    };
    return (
        <div className="flex gap-3 items-center ">
            {isLightOn ? <MdLightMode className="text-xl" /> : <AiFillMoon className="text-xl" />}
            <h1 className="text-sm">{` ${isLightOn ? "Light Mode" : "Dark Mode"}`}</h1>
            <button onClick={handleSwitch}>
                <div className={`relative w-7 h-4 rounded-full ${isLightOn ? "bg-gray" : "bg-purple"}`}>
                    <div className={`absolute h-3 w-3 bg-white rounded-full ${isLightOn ? "left-0" : "right-0"}`} />
                </div>
            </button>
        </div>

    )
}

export default Switch