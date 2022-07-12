import React, { useContext } from 'react'
import { AppContext } from '../App'

function GameOver() {
    const {gameOver, currAttempt, correctWord} = useContext(AppContext)
    function reload(){
      window.location.reload();
    }
  return (
    <div className='gameOver'>
      { 
        gameOver.guessWord && <div className='gameWon'> 
          <h3>Congrats! You Win!</h3>
          <h3> You guessed in {currAttempt.attempt} attempts</h3>
        </div>
      }
      {
        !gameOver.guessWord && <div className='gameLost'>
            <h3>Don't give up! Try using a hint next time!</h3>
            <h3>Correct Word: {correctWord}</h3>
        </div>
      }
      <div className='glow-on-hover' onClick={reload}>
        Play Again!
      </div>
    </div>
  )
}

export default GameOver