import './App.css';
import Board from "./components/Board"
import Keyboard from "./components/Keyboard"
import { createContext, useState, useEffect } from "react"
import { boardDefault, generateWordSet, genWordArr } from "./Words"
import GameOver from "./components/GameOver"
import NavBar from "./components/NavBar"
import swal from 'sweetalert';



export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0});
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [almostLetters, setAlmostLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver:false, guessWord: false
  });
  const [correctWord, setCorrectWord] = useState("");
  const [validWords, setValidWords] = useState(["Hello"])
  const [hackerOpen, setHackerOpen] = useState(false);

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord)
    });
    genWordArr().then((words) => {
      setValidWords(words.wordArr)
    });
  }, []);

  const onSelectLetter = (keyVal) => {
    if(currAttempt.letterPos > 4) {return;}
      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
      setBoard(newBoard)
      setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1})
  }

  const onDelete = () => {
    if(currAttempt.letterPos === 0) {return;}
      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
      setBoard(newBoard)
      setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos -1})
  }

  const onEnter = () => {
    if(currAttempt.letterPos !== 5) {return;}

    let currWord = "";
    for (let i = 0; i<5; i++){
      currWord += board[currAttempt.attempt][i]
    }

    if (wordSet.has(currWord.toLocaleLowerCase())){
      setCurrAttempt({attempt: currAttempt.attempt + 1, letterPos: 0})
    }
    else{
      swal("Not a word!", "You got this! Feel free to use a hint if you are stuck!", "error")
    }

    if(hackerOpen){
      setHackerOpen(prev => !prev);
    }

    if(currWord.toLowerCase() === correctWord){
      setGameOver({gameOver: true, guessWord:true})
      return
    }
  
    if(currAttempt.attempt === 5){
      setGameOver({gameOver: true, guessWord: false})
    }



  }

  return (
    <div className="App">
      <AppContext.Provider value={{ board, setBoard, currAttempt, setCurrAttempt, onDelete, onEnter, onSelectLetter, correctWord, setDisabledLetters, disabledLetters, almostLetters, setAlmostLetters, correctLetters, setCorrectLetters, setGameOver, gameOver, validWords, setValidWords, hackerOpen, setHackerOpen }}>
        <div className='game'>
          <NavBar />
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
