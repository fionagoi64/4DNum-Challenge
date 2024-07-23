import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

interface HamburgerProps {
  handleClick: () => void;
}

export const Hamburger: React.FC<HamburgerProps> = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="xl:hidden rounded-full p-2 bg-white md:bg-[#F3F3F3] opacity-80"
    >
      <RxHamburgerMenu className="text-black text-lg" />
    </button>
  );
};
