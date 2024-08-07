import React from "react";

interface JackpotContentHeaderProps {
  logoImage: string;
  logoName: string;
  title: string;
  backgroundColor: string;
}

export const JackpotContentHeader: React.FC<JackpotContentHeaderProps> = ({
  logoImage,
  logoName,
  title,
  backgroundColor,
}) => {
  return (
    <div
      className={`relative ${backgroundColor} text-center mb-2 p-2 rounded-t-[40px] rounded-b-lg`}
    >
      <div className="absolute mx-auto left-0 right-0 -top-8">
        <div className={`logos-bg !h-14 !w-14 mx-auto ${backgroundColor}`}>
          <img src={logoImage} alt={logoName} className="logos !h-12 !w-12" />
        </div>
      </div>
      <p className="text-white-100 pt-4 text-lg font-bold">{title}</p>
    </div>
  );
};
