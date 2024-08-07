import { getImageUrl } from "../const/imgPath"
import damacai from "../assets/images/branches/damacai.svg"
import sandakan from "../assets/images/branches/sandakan.svg"
import sabah from "../assets/images/branches/sabah.svg"

export const localData = [
    {
        type: "M",
        name: "Magnum 4D",
        navImg: getImageUrl("magnum.svg"),
        cardImg: getImageUrl("magnum.svg"),
    },
    {
        type: "PMP",
        name: "Da Ma Cai 1+3D",
        navImg: getImageUrl("damacai2.svg"),
        cardImg: damacai,
    },
    {
        type: "ST",
        name: "Sports Toto 4D",
        navImg: getImageUrl("toto.svg"),
        cardImg: getImageUrl("toto.svg"),
    },
    {
        type: "SG",
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
