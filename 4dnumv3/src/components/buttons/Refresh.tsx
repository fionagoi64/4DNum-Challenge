import React from "react";
import { GrRefresh } from "react-icons/gr";

export const Refresh = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <button
      onClick={handleRefresh}
      className="rounded-full p-2 md:p-3 bg-white md:bg-blue-600 bg-opacity-80 md:hidden"
    >
      <GrRefresh className="text-black-100 md:text-white text-base" />
    </button>
  );
};
