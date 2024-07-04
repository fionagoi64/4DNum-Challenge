import hamburger from "../images/mobileHamburger.svg";

type ButtonProps = {
    onClick: () => void
}

export const Hamburger = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick} className="cursor-pointer">
            <img src={hamburger} alt="" />
        </button>
    )
}

export default Hamburger