import { BaseURL } from "./apiData";

export function getImageUrl(imageName: string) {
    return `${BaseURL}public/images/${imageName}`;
}


