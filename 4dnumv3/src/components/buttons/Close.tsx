import React from "react";
import { CgClose } from "react-icons/cg";

export const Close = () => {
  return (
    <button className="absolute right-0 m-6 xl:hidden bg-white-100 rounded-full p-2">
      <CgClose className="text-xl" />
    </button>
  );
};
