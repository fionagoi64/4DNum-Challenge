import React from "react";
import { FaDownload } from "react-icons/fa";

const Download = () => {
  return (
    <button>
      <div className="flex flex-row gap-2">
        <FaDownload />
        <p className="text-white">Download</p>
      </div>
    </button>
  );
};

export default Download;
