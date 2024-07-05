import hamburger from "../images/mobileHamburger.svg";
import refresh from "../images/webRefresh.svg";
import { extraData } from "../data/extraData";
import { BaseURL } from "../data/apiData";
import { publicImage } from "../data/apiData";

type ButtonProps = {
    onClick: () => void
}

export const Hamburger = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick}>
            <img src={hamburger} alt="" />
        </button>
    )
}

export const Refresh = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick}>
            <img src={refresh} alt="" />
        </button>
    )
}

export const ScrollToCard = (props: ButtonProps) => {
    return (
        <div className="bg-white rounded-[18px] shadow-md min-w-[600px]">
            <ul className="flex gap-3 justify-center items-center p-1">
                {extraData.map((logos, logoindex) => {
                    console.log(extraData)
                    return (
                        <li>
                            <button onClick={props.onClick}>
                                <img className="h-10" src={`${BaseURL}${publicImage}${logos.img_path}`} alt="" />
                            </button>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}



