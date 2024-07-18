import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Hamburger = () => {
  return (
    <button className=" lg:hidden rounded-full p-2 bg-navbg">
      <RxHamburgerMenu className="text-black-100 text-lg" />
    </button>
  );
};

export default Hamburger;
