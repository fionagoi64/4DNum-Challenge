import React from "react";
import logo from "../../assets/images/logo.png";
import logoText from "../../assets/images/logotext.svg";

interface LogoProps {
  className: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div id="logo" className={`flex flex-row gap-2 items-center ${className}`}>
      <img src={logo} alt="" className="rounded-full h-9" />
      <h1 className="logo-text hidden lg:inline-block uppercase">4D Num</h1>
    </div>
  );
};
