// inactive images
import inactive_dashboard from '../images/APK.png'
import inactive_jackpot from '../images/APK.png'
import inactive_specailDraw from '../images/APK.png'
import inactive_dddd from '../images/APK.png'
import inactive_spin from '../images/APK.png'
import inactive_hotnum from '../images/APK.png'
import inactive_luckybook from '../images/APK.png'

// active images
import active_dashboard from '../images/navMenu/activeDashboard.svg'
import active_jackpot from '../images/navMenu/jackpotInactive.svg'
import active_specaildate from '../images/APK.png'
import active_dddd from '../images/APK.png'
import active_spin from '../images/APK.png'
import active_hotnum from '../images/APK.png'
import active_luckybook from '../images/APK.png'

import apk from '../images/navMenu/APK.png'
import app from '../images/navMenu/appStore.svg'

export const sidebar = [
    {
        label: "Results",
        list_items: [
            {
                icon: active_dashboard,
                // : inactive_dashboard,
                label: "Dashboard",
                url: "/"
            },
            {
                icon: active_jackpot,
                label: "Jackpot",
                url: "/jackpot"
            },

        ]
    },
    {
        label: "Toolbox",
        list_items: [
            {
                icon: "openFeaturesDropdown ? active_specaildate : inactive_specaildate",
                label: "Sepcial Draw Date",
                url: "/special-date"
            },
            {
                icon: "openFeaturesDropdown ? active_dddd : iactive_specaildate",
                label: "4D Number Analysis",
                url: "/number-analysis"
            },
            {
                icon: "openFeaturesDropdown ? active_spin : inactive_specaildate",
                label: "Spin My Luck",
                url: "/spin-my-luck"
            },
            {
                icon: "openFeaturesDropdown ? active_hotnum : inactive_specaildate",
                label: "Hot 4D Number",
                url: "/hot-dddd-num"
            },
            {
                icon: "openFeaturesDropdown ? active_luckybook : inactive_specaildate",
                label: "Lucky Book",
                url: "/lucky-book"
            }
        ]
    },
    {
        label: "Install App",
        list_items: [
            {
                icon: "openFeaturesDropdown ? active_luckybook : inactive_specaildate",
                label: "Lucky Book",
                url: "/lucky-book"
            },
            {
                icon: "openFeaturesDropdown ? active_luckybook : inactive_specaildate",
                label: "Lucky Book",
                url: "/lucky-book"
            }
        ]
    }
]