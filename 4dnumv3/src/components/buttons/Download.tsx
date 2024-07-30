import React from "react";
import { FaDownload } from "react-icons/fa";

export const Download = () => {
  return (
    <button>
      <div className="flex flex-row gap-2">
        <FaDownload />
        <p className="text-white-100">Download</p>
      </div>
    </button>
  );
};
