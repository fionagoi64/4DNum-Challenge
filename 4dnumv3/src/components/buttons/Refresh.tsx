import React from "react";
import { GrRefresh } from "react-icons/gr";

export const Refresh = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <button
      onClick={handleRefresh}
      className="rounded-full p-2 md:p-3 bg-white-400 md:bg-purple-300 md:hover:bg-purple-100 bg-opacity-80"
    >
      <GrRefresh className="text-black-100 md:text-white-100 text-base" />
    </button>
  );
};
