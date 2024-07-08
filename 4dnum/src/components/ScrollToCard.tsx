import { extraData } from "../data/extraData";
import { BaseURL } from "../data/apiData";
import { publicImage } from "../data/apiData";

type ScrollToCardProps = {
    onClick: () => void
}
export const ScrollToCard = (props: ScrollToCardProps) => {
    return (
        <div className="white-bg rounded-[18px] shadow-md min-w-[600px]">
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