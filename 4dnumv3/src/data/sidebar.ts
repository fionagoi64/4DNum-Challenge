// active images
import dashboard from "../assets/images/dashboard.svg";

export const sidebar = [
    {
        label: "Results",
        list_items: [
            {
                icon: dashboard,
                // : inactive_dashboard,
                label: "Dashboard",
                url: "/",
            },
            {
                icon: "jackpot",
                label: "Jackpot",
                url: "/jackpot",
            },
        ],
    },
    {
        label: "Toolbox",
        list_items: [
            {
                icon: "openFeaturesDropdown ? active_specaildate : inactive_specaildate",
                label: "Sepcial Draw Date",
                url: "/special-date",
            },
            {
                icon: "openFeaturesDropdown ? active_dddd : iactive_specaildate",
                label: "4D Number Analysis",
                url: "/number-analysis",
            },
            {
                icon: "openFeaturesDropdown ? active_spin : inactive_specaildate",
                label: "Spin My Luck",
                url: "/spin-my-luck",
            },
            {
                icon: "openFeaturesDropdown ? active_hotnum : inactive_specaildate",
                label: "Hot 4D Number",
                url: "/hot-dddd-num",
            },
            {
                icon: "openFeaturesDropdown ? active_luckybook : inactive_specaildate",
                label: "Lucky Book",
                url: "/lucky-book",
            },
        ],
    },

];
