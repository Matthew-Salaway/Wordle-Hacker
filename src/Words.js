import wordBank from "./wordle-bank.txt";

export const boardDefault = [
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""]
];

export const tableDefualt = [
    {a : 0, b : 0, c : 0, d : 0, e : 0, f : 0, g : 0, h : 0, i : 0, j : 0, k : 0, l : 0, m : 0, n : 0, o : 0, p : 0, q : 0, r : 0, s : 0, t : 0, u : 0, v : 0, w : 0, x : 0, y : 0, z : 0},
    {a : 0, b : 0, c : 0, d : 0, e : 0, f : 0, g : 0, h : 0, i : 0, j : 0, k : 0, l : 0, m : 0, n : 0, o : 0, p : 0, q : 0, r : 0, s : 0, t : 0, u : 0, v : 0, w : 0, x : 0, y : 0, z : 0},
    {a : 0, b : 0, c : 0, d : 0, e : 0, f : 0, g : 0, h : 0, i : 0, j : 0, k : 0, l : 0, m : 0, n : 0, o : 0, p : 0, q : 0, r : 0, s : 0, t : 0, u : 0, v : 0, w : 0, x : 0, y : 0, z : 0},
    {a : 0, b : 0, c : 0, d : 0, e : 0, f : 0, g : 0, h : 0, i : 0, j : 0, k : 0, l : 0, m : 0, n : 0, o : 0, p : 0, q : 0, r : 0, s : 0, t : 0, u : 0, v : 0, w : 0, x : 0, y : 0, z : 0},
    {a : 0, b : 0, c : 0, d : 0, e : 0, f : 0, g : 0, h : 0, i : 0, j : 0, k : 0, l : 0, m : 0, n : 0, o : 0, p : 0, q : 0, r : 0, s : 0, t : 0, u : 0, v : 0, w : 0, x : 0, y : 0, z : 0},

];

export const generateWordSet = async () => {
    let wordSet;
    let todaysWord;
    await fetch(wordBank)
        .then((response) => response.text())
        .then((result) => {
            const wordArr = result.split("\n")
            todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)]
            wordSet = new Set(wordArr)
        });

        return { wordSet, todaysWord };
}

export const genWordArr = async () => {
    let wordArr;
    await fetch(wordBank)
        .then((response) => response.text())
        .then((result) => {
            wordArr = result.split("\n")
        });

        return {wordArr};
}