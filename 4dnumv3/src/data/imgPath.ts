import { BaseURL } from "../data/apiData";

export function getImageUrl(imageName: string) {
    return `${BaseURL}public/images/${imageName}`;
}
