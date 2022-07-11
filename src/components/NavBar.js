import React, { useEffect, useState, useContext } from 'react'
import {ReactComponent as QuestionMark} from "../icons/questionMark.svg"
import {ReactComponent as LightBulb} from "../icons/lightbulb.svg"
import Title from "./Title"
import { genWordArr } from "../Words"
import { tableDefualt } from "../Words"
import { AppContext } from "../App"
import wordBank from "../wordle-bank.txt";
import HackerWords from './HackerWords'


function NavBar() {
    // const { currAttempt, disabledLetters, almostLetters, correctLetters } = useContext(AppContext)
    const [hackerOpen, setHackerOpen] = useState(false);
    // const [validWords, setValidWords] = useState(["Hello"])

    // useEffect(() => {
    //     if(currAttempt.attempt == 0){
    //         genWordArr().then((words) => {
    //           setValidWords(words.wordArr)
    //         });
    //     }
    //     else{
    //         var temp = valid()
    //         console.log(temp)
    //         setValidWords(temp)
    //     }
    //   }, [currAttempt.attempt])

    function toggleHack(e){
        e.preventDefault()
        setHackerOpen(prev => !prev)
        //console.log(validWords[0])
    }

    // function generateHackerWords(){
    //     // if(currAttempt.attempt == 0){
    //     // }
    //     // else{
    //     //     //generate new set of valid words
    //     //     var temp = valid()
    //     //     console.log(temp)
    //     //     setValidWords(temp)
    //     // }
    //     console.log(validWords)

    //     //create lookup table
    //     var lookupTable = structuredClone(tableDefualt);
    //     for(let i = 0; i < validWords.length; i++){ //traverse word set
    //         let currWord = validWords[i];
    //         for(let a = 0; a < 5; a++){ //traverse letters in word
    //             lookupTable[a][currWord[a]] = lookupTable[a][currWord[a]] + 1;
    //         }
    //     }

    //     let arr = []
    //     console.log(lookupTable)
    //     validWords.map((word) => {
    //         var wordTotal = 0
    //         for(let i = 0; i < 5; i++){ //traverse letters
    //             for(let j = 0; j < 5; j++){ //traverse table 
    //                 if(i == j){
    //                     wordTotal += lookupTable[j][word[i]]
    //                 }
    //                 else{
    //                     wordTotal += (lookupTable[j][word[i]] * .5)
    //                 }
    //             }
    //         }
    //         arr.push({w: word, s: wordTotal})
    //     })
    //     //sort the objects
    //     arr.sort((a,b) => b.s - a.s)
    //     console.log(arr)
        
    //     return arr.map((word) => {
    //             return <h1>{word.w} ... {word.s}</h1>
    //             })

    // }

    // async function genWord() {
    //     let data = await fetch(wordBank);
    //     let text = await data.text()
    //     let words = await text.split("\n")
    //     console.log(words)
    //     return words;
    //     }

    // function valid() {
    //     console.log(disabledLetters)
    //     console.log(almostLetters)
    //     console.log(correctLetters)
    //     let newWords = [];
    //     for(let i = 0; i < validWords.length; i++){
    //         let v = true;
    //         let currentWord = validWords[i]
    //         for(let j = 0; j < 5; j++){
    //             if(disabledLetters.includes((currentWord[j]).toUpperCase())){
    //                 console.log(v)
    //                 v = false;
    //                 console.log(v)
    //             }
    //         }
            
    //         if(v == false){continue}
    //         //correct
    //         for(let i = 0; i < correctLetters.length; i++){
    //             if(correctLetters[i].l != (currentWord[correctLetters[i].p]).toUpperCase()){
    //                 v = false;
    //             }
    //         }
    //         if(v == false){continue}
    //         //almost
    //         for(let i = 0; i < almostLetters.length; i++){
    //             let alLetter = almostLetters[i].l
    //             if(currentWord.includes((alLetter).toLowerCase()) == false){
    //                 v = false;
    //             }
    //             for(let j = 0; j < almostLetters[i].p.length; j++){
    //                 console.log(currentWord)
    //                 console.log(alLetter.toLowerCase())
    //                 console.log(currentWord[almostLetters[i].p[j]])
    //                 if((alLetter.toLowerCase()) == currentWord[almostLetters[i].p[j]]){
    //                     v = false;
    //                 }
    //             }
    //         }

    //         //add the word
    //         if(v){
    //             newWords.push(currentWord)
    //             console.log(currentWord)
    //         }
    //     }
    //     console.log(validWords)
    //     console.log(newWords)
    //     return newWords
    // }


// const [validWords, setValidWords] = useState([])
    // const [lookupTable, setLookupTable] = useState([createTable()])
    // const [sortedScores, setSortedScores] = useState([])


    // useEffect (() => {
    //     if(currAttempt.attempt == 0){ 
    //         genWordArr().then((words) => {
    //             setValidWords(words);
    //             console.log(words)
    //         });
    //         console.log(lookupTable)
    //     }
    //     else{
    //         //create all valid words
    //         //setLookupTable(createTable());
    //         console.log(validWords)
    //         console.log(lookupTable)
    //     }
    // },[currAttempt.attempt]) 
    
    
    // function updateTable(){

    // }

    // function createTable(){
    //     var table = structuredClone(tableDefualt);
    //     for(let i = 0; i < validWords.length; i++){ //traverse word set
    //         let currWord = validWords[i];
    //         for(let a = 0; a < 5; a++){ //traverse letters in word
    //             table[a][currWord[a]] = table[a][currWord[a]] + 1;
    //         }
    //     }
    //     // console.log(validWords.length)
    //     console.log(table)
    //     return table;
    // }

    

    // function generateHackerWords(){
    //     let arr = []
    //     console.log(lookupTable)
    //     validWords.map((word) => {
    //         var wordTotal = 0
    //         for(let i = 0; i < 5; i++){ //traverse letters
    //             for(let j = 0; j < 5; j++){ //traverse table 
    //                 if(i == j){
    //                     wordTotal += lookupTable[j][word[i]]
    //                 }
    //                 else{
    //                     wordTotal += (lookupTable[j][word[i]] * .5)
    //                 }
    //             }
    //         }
    //         arr.push({w: word, s: wordTotal})
            
    //         // return <HackCard w={word} s={(wordTotal/validWords.length).toFixed(3)}/>
            
            
    //         // // let score = 0;
    //         // for(let j = 0; j < validWords.length; j++){
    //         //     let wordB = validWords[j]
    //         //     for(let a = 0; a < 5; a++){
    //         //         let letterA = word[a]
    //         //         for(let b = 0; b < 5; b++){
    //         //             let letterB = wordB[b]
    //         //             if(a == b && letterA == letterB){ //the letters are same place and same letter
    //         //                 score += 1;
    //         //             }
    //         //             else if(letterA == letterB){ // letters are same but different palce
    //         //                 score += .5
    //         //             }
    //         //         }
    //         //     }
    //         // }
    //         // let h = <HackCard w={word} s={(score/validWords.length).toFixed(3)}/>
    //         // console.log(h)
    //         // return h;
    //     })
        
    //     // return arr.map((w) => {
    //     //     return <h1>{validWords[0]} {validWords[1]}</h1>
    //     //     // <h1>{w.word} {w.score}</h1>
    //     // })
    //     console.log(arr)
    // }

  return (
    <div className='NavBar'>
        

        <a className='glow-on-hover' onClick={toggleHack}>Hint <LightBulb /></a>
        <div className='hackerWords'>
        {hackerOpen && <HackerWords /> }
        </div>

        <Title />

        <h1>About</h1>
    </div>
  )
}

export default NavBar