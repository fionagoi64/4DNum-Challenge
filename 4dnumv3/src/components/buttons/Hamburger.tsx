import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

interface HamburgerProps {
  handleClick: () => void;
}

export const Hamburger: React.FC<HamburgerProps> = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="xl:hidden rounded-full p-2 bg-white-100 md:bg-white-500 opacity-80"
    >
      <RxHamburgerMenu className="text-black-100 text-lg" />
    </button>
  );
};
