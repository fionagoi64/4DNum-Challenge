import React from "react";
import logo from "../../assets/images/logo.png";
import logoText from "../../assets/images/logotext.svg";

interface LogoProps {
  className: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex flex-row gap-2 items-center ${className}`}>
      <img src={logo} alt="" className="rounded-full h-9" />
      <img src={logoText} alt="" className="hidden lg:inline-block lg:h-4" />
    </div>
  );
};
