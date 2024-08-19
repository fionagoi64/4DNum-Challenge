import activeDashboard from "../assets/images/sidemenu/active-dashboard.svg";
import activeJackpot from "../assets/images/sidemenu/active-jackpot.png";
import activeSpecialDraw from "../assets/images/sidemenu/active-special-draw.png";
import activeAnalysis from "../assets/images/sidemenu/active-analysis.png";
import activeSpin from "../assets/images/sidemenu/active-spin.png";
import activeHotFourD from "../assets/images/sidemenu/active-hot-four-d.png";
import activeLuckyBook from "../assets/images/sidemenu/active-lucky-book.png";

import inactiveDashboard from "../assets/images/sidemenu/inactive-dashboard.png";
import inactiveJackpot from "../assets/images/sidemenu/inactive-jackpot.svg";
import inactiveSpecialDraw from "../assets/images/sidemenu/inactive-special-draw.png";
import inactiveAnalysis from "../assets/images/sidemenu/inactive-analysis.png";
import inactiveSpin from "../assets/images/sidemenu/inactive-spin.png";
import inactiveHotFourD from "../assets/images/sidemenu/inactive-hot-four-d.png";
import inactiveLuckyBook from "../assets/images/sidemenu/inactive-lucky-book.png";

import darkDashboard from "../assets/images/sidemenu/dark-dashboard.png";
import darkJackpot from "../assets/images/sidemenu/dark-jackpot.png";
import darkSpecialDraw from "../assets/images/sidemenu/dark-special-draw.png";
import darkAnalysis from "../assets/images/sidemenu/dark-analysis.png";
import darkSpin from "../assets/images/sidemenu/dark-spin.png";
import darkHotFourD from "../assets/images/sidemenu/dark-hot-four-d.png";
import darkLuckyBook from "../assets/images/sidemenu/dark-lucky-book.png";

export const sidebar = [
    {
        label: "results",
        list_items: [
            {
                defaultIcon: inactiveDashboard,
                activeIcon: activeDashboard,
                darkIcon: darkDashboard,
                label: "dashboard",
                url: "/",
            },
            {
                defaultIcon: inactiveJackpot,
                activeIcon: activeJackpot,
                darkIcon: darkJackpot,
                label: "jackpot",
                url: "/jackpot",
            },
        ],
    },
    {
        label: "toolbox",
        list_items: [
            {
                defaultIcon: inactiveSpecialDraw,
                activeIcon: activeSpecialDraw,
                darkIcon: darkSpecialDraw,
                label: "specialDrawDate",
                url: "/special-date",
            },
            {
                defaultIcon: inactiveAnalysis,
                activeIcon: activeAnalysis,
                darkIcon: darkAnalysis,
                label: "fourDNumberAnalysis",
                url: "/number-analysis",
            },
            {
                defaultIcon: inactiveSpin,
                activeIcon: activeSpin,
                darkIcon: darkSpin,
                label: "spinMyLuck",
                url: "/spin-my-luck",
            },
            {
                defaultIcon: inactiveHotFourD,
                activeIcon: activeHotFourD,
                darkIcon: darkHotFourD,
                label: "hotFourDNumber",
                url: "/hot-dddd-num",
            },
            {
                defaultIcon: inactiveLuckyBook,
                activeIcon: activeLuckyBook,
                darkIcon: darkLuckyBook,
                label: "luckyBook",
                url: "/lucky-book",
            },
        ],
    },

];
