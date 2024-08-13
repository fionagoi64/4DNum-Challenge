import React from "react";
import { MdShare } from "react-icons/md";

export const Share = () => {
  return (
    <button className="p-2 hover:bg-white-100 hover:bg-opacity-20 hover:rounded-full hover:transition hover:duration-300">
      <MdShare className="font-bold text-xl text-white-100 " />
    </button>
  );
};
