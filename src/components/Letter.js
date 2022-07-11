import React, { useContext, useEffect } from 'react'
import { AppContext } from "../App"

function Letter({ letterPos, attemptVal }) {
    const { board, correctWord, currAttempt, setDisabledLetters, disabledLetters, almostLetters, setAlmostLetters, correctLetters, setCorrectLetters } = useContext(AppContext)
    const letter = board[attemptVal][letterPos]

        const correct = correctWord.toUpperCase()[letterPos] === letter
        const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter)

        const letterState = 
          currAttempt.attempt > attemptVal && (correct ? "correct" : almost ? "almost" : "error")

          useEffect(() => {
            if(letter !== "" && !correct && !almost){
              setDisabledLetters((prev) => [...prev, letter])
            }

            else if(letter !== "" && !correct && almost){
              //if letter is  aready in almost
              let add = true
              for(let i = 0; i < almostLetters.length; i++){
                if(almostLetters[i].l === letter){
                  add = false;
                  let newAlmost = almostLetters.map(a => {
                    var returnVal = {...a};
                    if(a.l == letter){
                      returnVal.p.push(letterPos);
                    }
                    return returnVal
                  })
                  setAlmostLetters(newAlmost)
                  break;
                }
              }
              
              // setAlmostLetters((prev) => {
              //   [...prev, letter]
              // })

              //if letter is not almost and new pos added
              if(add == true){
                setAlmostLetters((prev) =>
                      [...prev, {l: letter, p: [letterPos]}]
                    )
              }

            }
            else if(letter !== "" && correct && !almost){
              setCorrectLetters((prev) => [...prev, {l:letter, p: letterPos}])
            }
          }, [currAttempt.attempt])

  return (
    <div className='letter' id={letterState}> {letter}</div>
  )
}

export default Letter