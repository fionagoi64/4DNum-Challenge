import React from "react";
import { MdLightMode } from "react-icons/md";

export const Theme = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <label className="flex flex-row items-center cursor-pointer gap-2">
        <MdLightMode className="text-heading text-xl" />
        <p>Light Mode</p>
        <div className="relative">
          <div className="block bg-gray-600 w-7 h-4 rounded-full"></div>
          <div className="absolute left-[2px] top-[2px] bg-white w-3 h-3 rounded-full transition"></div>
        </div>
      </label>
    </div>
  );
};
