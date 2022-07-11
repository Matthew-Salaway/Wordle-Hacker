import React, { useContext } from 'react'
import { AppContext } from '../App'

function GameOver() {
    const {gameOver, currAttempt, correctWord} = useContext(AppContext)
  return (
    <div className='gameOver'>
        <h3>{gameOver.guessWord ? "Congrats! You Win!" : "Don't give up! Try again!"}</h3>
        <h1>Correct: {correctWord}</h1>
        {gameOver.guessWord && (<h3> You guessed in {currAttempt.attempt} attempts</h3>)}
    </div>
  )
}

export default GameOver