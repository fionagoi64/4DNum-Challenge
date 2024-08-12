import { getImageUrl } from "../const/imgPath"
import damacai from "../assets/images/branches/damacai.svg"
import sandakan from "../assets/images/branches/sandakan.svg"
import sabah from "../assets/images/branches/sabah.svg"

export const localData = [
    {
        type: "M",
        jpType: [
            { type: "MJPLIFE", name: "Magnum Life" },
            { type: "MJPGOLD", name: "Golden Jackpot" }],
        name: "Magnum 4D",
        navImg: getImageUrl("magnum.svg"),
        cardImg: getImageUrl("magnum.svg"),
    },
    {
        type: "PMP",
        jpType: { type: "PMPJP1", name: "3+3D Bonus" },
        navImg: getImageUrl("damacai2.svg"),
        name: "Da Ma Cai 1+3D",
        cardImg: damacai,
    },
    {
        type: "ST",
        jpType: [
            { type: "STJP1" },
            { type: "STJP6/58", name: "Supreme Jackpot 6/58" },
            { type: "STJP6/55", name: "Power Jackpot 6/55" },
            { type: "STJP6/50", name: "Star Jackpot 6/50" },
        ],
        name: "Sports Toto 4D",
        navImg: getImageUrl("toto.svg"),
        cardImg: getImageUrl("toto.svg"),
    },
    {
        type: "SG",
        jpType: { type: "SGJP6/45", name: "Winning Numbers" },
        name: "Singapore 4D",
        navImg: getImageUrl("sg.svg"),
        cardImg: getImageUrl("sg.svg"),
    },
    {
        type: "STC",
        name: "Sandakan 4D",
        navImg: getImageUrl("sandakan.svg"),
        cardImg: sandakan,
    },
    {
        type: "EE",
        jpType: { type: "EEJP6/45", name: "Sports Toto Jackpot" },
        name: "Sabah 88 4D",
        navImg: getImageUrl("diriwan2.svg"),
        cardImg: sabah,
    },
    {
        type: "CS",
        name: "Special CashSweep",
        navImg: getImageUrl("ssc.svg"),
        cardImg: getImageUrl("ssc.svg"),
    },
    {
        type: "HT15:30",
        jpType: { type: "HJPT15:30", name: "Lucky Hari Hari 6D" },
        name: "Lucky Hari Hari",
        navImg: getImageUrl("lhh.svg"),
        cardImg: getImageUrl("lhh.svg"),
    },
    {
        type: "PT15:30",
        name: "Perdana Lottery",
        navImg: getImageUrl("Perdana%20svg.svg"),
        cardImg: getImageUrl("Perdana%20svg.svg"),
    },
]
