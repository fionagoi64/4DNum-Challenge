import React from "react";
import { CgClose } from "react-icons/cg";

export const Close = () => {
  return (
    <button className="absolute right-0 m-6 xl:hidden">
      <CgClose className="text-2xl" />
    </button>
  );
};
