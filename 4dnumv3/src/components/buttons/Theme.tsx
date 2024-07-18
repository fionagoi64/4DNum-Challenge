import React from "react";
import { MdLightMode } from "react-icons/md";

const Theme = () => {
  return (
    <div className="flex flex-row items-center gap-2">
      <MdLightMode className="text-heading text-xl" />
      <p>Light Mode</p>
      <div className="relative h-4 w-6 bg-gray-400 rounded-full">
        <div className="absolute w-3 h-3 bg-white rounded-full" />
      </div>
    </div>
  );
};

export default Theme;
