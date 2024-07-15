import React from "react";
import { BaseURL } from "../data/apiData";
import { publicImage } from "../data/apiData";
import { extraData } from "../data/extraData";

type ScrollToCardProps = {
    scrollToRef: (ref: HTMLDivElement | null) => void;
};

const ScrollToCard: React.FC<ScrollToCardProps> = ({ scrollToRef }) => {
    return (
        <div className="white-bg rounded-[18px] shadow-md">
            <ul className="flex gap-3 justify-center items-center p-1">
                {extraData.map((logos, logoindex) => (
                    <li key={logoindex}>
                        <button onClick={() => scrollToRef(document.getElementById(`card-${logoindex}`) as HTMLDivElement)}>
                            <img className="h-10" src={`${BaseURL}${publicImage}${logos.img_path}`} alt="" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ScrollToCard;
