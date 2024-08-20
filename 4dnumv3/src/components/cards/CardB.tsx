import React, { ReactNode } from "react";

export const CardB = ({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className="md:py-20">
      <div
        className={`${className} bg-white-100 max-w-4xl container mx-auto rounded-xl`}
      >
        <div
          className=" bg-purple-300 text-center w-full text-2xl font-black text-white-100 p-16 
        rounded-t-xl rounded-b-[34px]"
        >
          {title}
        </div>
        {children}
      </div>
    </div>
  );
};
