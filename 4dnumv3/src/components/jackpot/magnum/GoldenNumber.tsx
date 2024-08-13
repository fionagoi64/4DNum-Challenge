import React from "react";
import { NumbersHeader } from "../shared/NumbersHeader";
import { NumberBox } from "../shared/NumberBox";

export const GoldenNumber = () => {
  return (
    <div className="flex flex-row gap-2 text-center my-2">
      <NumbersHeader
        className="w-1/3 uppercase !p-0.5"
        isBlackBg={true}
        title="Golden Number"
      />
      <div className="flex flex-row gap-2 text-center w-2/3"></div>
    </div>
  );
};
