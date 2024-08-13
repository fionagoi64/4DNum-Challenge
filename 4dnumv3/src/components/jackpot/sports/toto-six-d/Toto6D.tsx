import React from "react";
import { JackpotContentHeader } from "../../shared/JackpotContentHeader";
import { NumbersHeader } from "../../shared/NumbersHeader";
import { NumberBox } from "../../shared/NumberBox";
import { Toto6DNumbers } from "./Toto6DNumbers";
import { JackpotAmount } from "../../shared/JackpotAmount";
import sports from "../../../assets/images/branches/sports.svg";

export const Toto6D = () => {
  return (
    // <div className="mt-14">
    //   <JackpotContentHeader
    //     backgroundColor="!bg-red-100"
    //     logoImage={sports}
    //     logoName="sports"
    //     title="Toto 6D"
    //   />
    //   {allData.map((sportsJackpot, sportsJackpotIndex) => {
    //     const isSTJP1 = sportsJackpot.type === "STJP1";
    //     const isSTJP50 = sportsJackpot.type === "STJP6/50";

    //     return (
    //       <div key={sportsJackpotIndex}>
    //         <div className="mb-2">
    //           {isSTJP1 && (
    //             <div className="space-y-2">
    //               <div className="flex flex-row gap-2 text-center my-2">
    //                 <NumbersHeader
    //                   className="w-1/2 uppercase !p-0.5"
    //                   isBlackBg={true}
    //                   title="1ST"
    //                 />
    //                 <NumberBox
    //                   className="!font-bold !rounded-lg p-0.5 "
    //                   number={sportsJackpot.fdData.n7}
    //                 />
    //               </div>

    //               <Toto6DNumbers
    //                 title="2ND"
    //                 jackpotNumber={sportsJackpot.fdData.n7}
    //                 jackpotSecondNumber={sportsJackpot.fdData.n8}
    //               />

    //               <Toto6DNumbers
    //                 title="3RD"
    //                 jackpotNumber={sportsJackpot.fdData.n9}
    //                 jackpotSecondNumber={sportsJackpot.fdData.n10}
    //               />

    //               <Toto6DNumbers
    //                 title="4TH"
    //                 jackpotNumber={sportsJackpot.fdData.n11}
    //                 jackpotSecondNumber={sportsJackpot.fdData.n12}
    //               />

    //               <Toto6DNumbers
    //                 title="5TH"
    //                 jackpotNumber={sportsJackpot.fdData.n13}
    //                 jackpotSecondNumber={sportsJackpot.fdData.n14}
    //               />
    //             </div>
    //           )}
    //         </div>
    //         {isSTJP50 && (
    //           <>
    //             <NumbersHeader isBlackBg={true} title={sportsJackpot.name} />
    //             <div className="grid grid-cols-6 my-2 gap-2">
    //               {Object.keys(sportsJackpot.fdData)
    //                 .filter((nData) => nData.startsWith("n"))
    //                 .slice(0, 6)
    //                 .map((numbers, numbersIndex) => {
    //                   const winner = sportsJackpot.fdData[numbers];
    //                   return (
    //                     <div
    //                       key={numbersIndex}
    //                       className="bg-white-100 dark:bg-black-400 border dark:text-white-100 border-transparent dark:border-gray-700 shadow-all rounded-md text-center font-medium"
    //                     >
    //                       {winner}
    //                     </div>
    //                   );
    //                 })}
    //             </div>

    //             <JackpotAmount
    //               title="Jackpot 1"
    //               amount={sportsJackpot.fdData.jp1}
    //             />

    //             <JackpotAmount
    //               title="Jackpot 2"
    //               amount={sportsJackpot.fdData.jp2}
    //             />
    //           </>
    //         )}
    //       </div>
    //     );
    //   })}
    // </div>
    <></>
  );
};
