import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

interface HamburgerProps {
  handleClick: () => void;
}

export const Hamburger: React.FC<HamburgerProps> = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="lg:hidden rounded-full p-2 bg-navbg"
    >
      <RxHamburgerMenu className="text-black-100 text-lg" />
    </button>
  );
};
