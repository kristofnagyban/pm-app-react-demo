export const getFirstLetters = (text: string) => {
    let words = text.split(" ");
    return words.map((word) => word[0].toUpperCase()).join("");
}