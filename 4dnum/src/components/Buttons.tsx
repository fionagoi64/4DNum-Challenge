import hamburger from "../images/mobileHamburger.svg";
import refresh from "../images/webRefresh.svg";

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





