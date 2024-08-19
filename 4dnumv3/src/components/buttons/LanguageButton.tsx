import React, { useContext } from "react";
import { GrLanguage } from "react-icons/gr";
import LanguageContext from "../../context/Language";

export const LanguageButton = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
  };

  return (
    <div className="relative ">
      <label htmlFor="language">
        <GrLanguage className="text-xl dark:text-white-100" />
      </label>
      <select
        id="language"
        className="absolute top-0 bg-transparent w-5 text-transparent focus:outline-none"
        value={language}
        onChange={handleLanguageChange}
      >
        <option value="bm">Malay</option>
        <option value="en">English</option>
        <option value="zh">中文</option>
      </select>
    </div>
  );
};
