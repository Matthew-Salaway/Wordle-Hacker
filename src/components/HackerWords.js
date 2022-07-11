import React, { useEffect, useState, useContext } from 'react'
import { genWordArr } from "../Words"
import { tableDefualt } from "../Words"
import { AppContext } from "../App"
import wordBank from "../wordle-bank.txt";





function HackerWords() {
    const { currAttempt, disabledLetters, almostLetters, correctLetters, validWords, setValidWords } = useContext(AppContext)
    

    useEffect(() => {
        if(currAttempt.attempt == 0){
            genWordArr().then((words) => {
              setValidWords(words.wordArr)
            });
        }
        else{
            var temp = valid()
            console.log(temp)
            setValidWords(temp)
        }
      }, [currAttempt.attempt])

      function valid() {
        console.log(disabledLetters)
        console.log(almostLetters)
        console.log(correctLetters)
        let newWords = [];
        for(let i = 0; i < validWords.length; i++){
            let v = true;
            let currentWord = validWords[i]
            for(let j = 0; j < 5; j++){
                if(disabledLetters.includes((currentWord[j]).toUpperCase())){
                    console.log(v)
                    v = false;
                    console.log(v)
                }
            }
            
            if(v == false){continue}
            //correct
            for(let i = 0; i < correctLetters.length; i++){
                if(correctLetters[i].l != (currentWord[correctLetters[i].p]).toUpperCase()){
                    v = false;
                }
            }
            if(v == false){continue}
            //almost
            for(let i = 0; i < almostLetters.length; i++){
                let alLetter = almostLetters[i].l
                if(currentWord.includes((alLetter).toLowerCase()) == false){
                    v = false;
                }
                for(let j = 0; j < almostLetters[i].p.length; j++){
                    console.log(currentWord)
                    console.log(alLetter.toLowerCase())
                    console.log(currentWord[almostLetters[i].p[j]])
                    if((alLetter.toLowerCase()) == currentWord[almostLetters[i].p[j]]){
                        v = false;
                    }
                }
            }

            //add the word
            if(v){
                newWords.push(currentWord)
                console.log(currentWord)
            }
        }
        console.log(validWords)
        console.log(newWords)
        return newWords
    }

      function generateHackerWords(){
        // if(currAttempt.attempt == 0){
        // }
        // else{
        //     //generate new set of valid words
        //     var temp = valid()
        //     console.log(temp)
        //     setValidWords(temp)
        // }
        console.log(validWords)

        //create lookup table
        var lookupTable = structuredClone(tableDefualt);
        for(let i = 0; i < validWords.length; i++){ //traverse word set
            let currWord = validWords[i];
            for(let a = 0; a < 5; a++){ //traverse letters in word
                lookupTable[a][currWord[a]] = lookupTable[a][currWord[a]] + 1;
            }
        }

        let arr = []
        console.log(lookupTable)
        validWords.map((word) => {
            var wordTotal = 0
            for(let i = 0; i < 5; i++){ //traverse letters
                for(let j = 0; j < 5; j++){ //traverse table 
                    if(i == j){
                        wordTotal += lookupTable[j][word[i]]
                    }
                    else{
                        wordTotal += (lookupTable[j][word[i]] * .5)
                    }
                }
            }
            arr.push({w: word, s: wordTotal})
        })
        //sort the objects
        arr.sort((a,b) => b.s - a.s)
        console.log(arr)
        
        return arr.map((word) => {
                return <h1>{word.w} ... {word.s}</h1>
                })

    }




  return (
    generateHackerWords()
  )
}

export default HackerWords