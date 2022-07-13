import React, { useEffect, useState, useContext } from 'react';
import { genWordArr } from "../Words";
import { tableDefualt } from "../Words";
import { AppContext } from "../App";





function HackerWords() {
    const { currAttempt, disabledLetters, almostLetters, correctLetters, validWords, setValidWords } = useContext(AppContext)
    
    useEffect(() => {
        if(currAttempt.attempt == 0){
            genWordArr().then((words) => {
              setValidWords(words.wordArr);
            });
        }
        else{
            var temp = valid();
            setValidWords(temp);
        }
      }, [currAttempt.attempt])

      function valid() {
        let newWords = [];
        for(let i = 0; i < validWords.length; i++){
            let v = true;
            let currentWord = validWords[i]
            for(let j = 0; j < 5; j++){
                if(disabledLetters.includes((currentWord[j]).toUpperCase())){
                    v = false;
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
        return newWords
    }

      function generateHackerWords(){
        //create lookup table
        var lookupTable = tableDefualt.map(a => {return {...a}});
        for(let i = 0; i < validWords.length; i++){ //traverse word set
            let currWord = validWords[i];
            for(let a = 0; a < 5; a++){ //traverse letters in word
                lookupTable[a][currWord[a]] = lookupTable[a][currWord[a]] + 1;
            }
        }

        let arr = []
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
                for(let k = i+1; k < 5; k++){
                    if(word[i] == word[k]){
                        wordTotal *= .33;
                    }
                }
            }
            arr.push({w: word, s: wordTotal})
        })
        //sort the objects
        arr.sort((a,b) => b.s - a.s)
        
        return arr.map((word) => {
                return <div className='words'>{word.w} - {(word.s/arr.length * 2).toFixed(3)}</div>
                })

    }
  return (
    generateHackerWords()
  )
}

export default HackerWords