import React from "react";
import logo from "../../assets/images/logo.png";

interface LogoProps {
  className: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div id="logo" className={`flex flex-row gap-2 items-center ${className}`}>
      <img src={logo} alt="" className="rounded-full h-9" />
      <h1 className="bg-gradient-to-r from-purple-500 to-red-300 bg-clip-text text-transparent dark:text-white-100 font-bold text-nowrap text-2xl hidden lg:inline-block uppercase">
        4D Num
      </h1>
    </div>
  );
};
