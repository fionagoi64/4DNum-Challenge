import activeDashboard from "../assets/images/sidemenu/active-dashboard.svg";
import inactiveDashboard from "../assets/images/sidemenu/inactive-dashbord.png";
import activeJackpot from "../assets/images/sidemenu/active-jackpot.png";
import inactiveJackpot from "../assets/images/sidemenu/inactive-jackpot.svg";
import activeSpecialDraw from "../assets/images/sidemenu/active-special-draw.png";
import inactiveSpecialDraw from "../assets/images/sidemenu/inactive-special-draw.png";
import activeAnalysis from "../assets/images/sidemenu/active-analysis.png";
import inactiveAnalysis from "../assets/images/sidemenu/inactive-analysis.png";
import activeSpin from "../assets/images/sidemenu/active-spin.png";
import inactiveSpin from "../assets/images/sidemenu/inactive-spin.png";
import activeHotFourD from "../assets/images/sidemenu/active-hot-four-d.png";
import inactiveHotFourD from "../assets/images/sidemenu/inactive-hot-four-d.png";
import activeLuckyBook from "../assets/images/sidemenu/active-lucky-book.png";
import inactiveLuckyBook from "../assets/images/sidemenu/inactive-lucky-book.png";

export const sidebar = [
    {
        label: "Results",
        list_items: [
            {
                defaultIcon: inactiveDashboard,
                activeIcon: activeDashboard,
                label: "Dashboard",
                url: "/",
            },
            {
                defaultIcon: inactiveJackpot,
                activeIcon: activeJackpot,
                label: "Jackpot",
                url: "/jackpot",
            },
        ],
    },
    {
        label: "Toolbox",
        list_items: [
            {
                defaultIcon: inactiveSpecialDraw,
                activeIcon: activeSpecialDraw,
                label: "Sepcial Draw Date",
                url: "/special-date",
            },
            {
                defaultIcon: inactiveAnalysis,
                activeIcon: activeAnalysis,
                label: "4D Number Analysis",
                url: "/number-analysis",
            },
            {
                defaultIcon: inactiveSpin,
                activeIcon: activeSpin,
                label: "Spin My Luck",
                url: "/spin-my-luck",
            },
            {
                defaultIcon: inactiveHotFourD,
                activeIcon: activeHotFourD,
                label: "Hot 4D Number",
                url: "/hot-dddd-num",
            },
            {
                defaultIcon: inactiveLuckyBook,
                activeIcon: activeLuckyBook,
                label: "Lucky Book",
                url: "/lucky-book",
            },
        ],
    },

];
