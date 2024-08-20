import pekKongWan from "../assets/images/lucky-book/tua-pek-kong-wan/pekkong-wan.svg";
import pekKongWanText from "../assets/images/lucky-book/tua-pek-kong-wan/pekkong-wan-text.png";
import guanYinMa from "../assets/images/lucky-book/guan-yin/guanyin.svg";
import guanYinMaText from "../assets/images/lucky-book/guan-yin/guanyin-text.png";
import pekKongQian from "../assets/images/lucky-book/tua-pek-kong-qian/pekkong-qian.svg";
import pekKongQianText from "../assets/images/lucky-book/tua-pek-kong-qian/pekkong-qian-text.png";

export const luckybook = [
    {
        name: "Tuak Pek Kong (Wan) Dictonary",
        shortName: "WZT",
        image: pekKongWan,
        imageText: pekKongWanText,
        route: '/lucky-book-category-list#wzt'

    },
    {
        name: "Guan Yin Ma Dictonary",
        shortName: "GZT",
        image: guanYinMa,
        imageText: guanYinMaText,
        route: '/lucky-book-category-list#gzt'

    },
    {
        name: "Tuak Pek Kong (Qian) Dictonary",
        shortName: "QZT",
        image: pekKongQian,
        imageText: pekKongQianText,
        route: '/lucky-book-category-list#qzt'

    },]