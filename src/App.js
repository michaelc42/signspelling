import './App.css';
import { useState, useEffect } from 'react';
import { getWrongAnswersScrambled, randLetter } from './data/Alphabet';
import LetterGame from './components/LetterGame/LetterGame';


function App() {

  const [gameState, setGameState] = useState(() => {
      return {
        ans: randLetter(),
        choices: [],
        score: 0
      }
  })
  
  useEffect(() => {
    setGameState(prev => {
      return {
        ...prev,
        choices:getWrongAnswersScrambled(gameState.ans, 3)
      }
    })
  }, [gameState.score])


  
  function checkAns(e) {
    if (e.target.value === gameState.ans.value) {
      setInterval(setGameState(prev => {
        return {
          ans: randLetter(),
          choices: [],
          score:(prev.score+1)
        }
      }), 2000)
      // setGameState(prev => {
      //   return {
      //     ans: randLetter(),
      //     choices: [],
      //     score:(prev.score+1)
      //   }
      // })
        
    }
  }
  
  
  return (
    <div className='App'>
      <LetterGame
        gameState={gameState}
        checkAns={checkAns}
      />
    </div>
  )
 
}

export default App;
