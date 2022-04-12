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

  const [disabled, setDisabled] = useState(true)
  const [result, setResult] = useState({})
  const [fadeOut, setFadeout] = useState('')
  
  useEffect(() => {
    setGameState(prev => {
      return {
        ...prev,
        choices:getWrongAnswersScrambled(gameState.ans, 3)
      }
    })
    setDisabled(prev => !prev)
    console.log('in use effect')
    setResult({
      value: undefined,
      text: '',
      style: {
        'backgroundColor':'white'
      },
    })
  }, [gameState.score])


  
  function checkAns(e) {
    setFadeout(()=>'fade-out')
    
    setTimeout(()=>setFadeout(''), 2000)
    if (e.target.value === gameState.ans.value) {      
      
      setResult({
        value: true,
        text: 'CORRECT',
        style: {
          'backgroundColor':'green'
        }
      })

      setDisabled(prev => !prev)

      setTimeout(() => {
        setGameState(prev => {
          return {
            ans: randLetter(),
            choices: [],
            score: (prev.score + 1)
          }
        })
      }, 2000)
    } else {
      setResult({
        value: false,
        text: 'INCORRECT',
        style: {
          'backgroundColor':'red'
        }
      })
    }

    //sets result div to black after transition
    setTimeout(() => {
      setResult({
        value: undefined,
        text: '',
        style: {
          'backgroundColor':'white'
        },
      })
    }, 2000)
  }
  
  
  return (
    <div className='App'>
      <LetterGame
        gameState={gameState}
        checkAns={checkAns}
        disabled={disabled}
        result={result}
        fadeOut={fadeOut}
      />
    </div>
  )
 
}

export default App;
