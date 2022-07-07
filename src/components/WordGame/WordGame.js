import React, {useState, useEffect} from 'react'
import { Words, getRandomWord } from "../../data/Words";
import QAUI from '../QAUI';
import { getWrongAnswers } from '../../data/Words';
import Shuffle from '../../utils/Shuffle';

const WordGame = (props) => {
  const [gameState, setGameState] = useState(() => {
    return {
      ans: getRandomWord(),
      choices: [],
      score: 0
    }
  })

  const [disabled, setDisabled] = useState(true)
  const [result, setResult] = useState({})

  let word
  let wrongWords
  let shuffledAnswers
  let wordDisplay
  let ansDisplay

  // const word = getRandomWord()
  // const wrongWords = getWrongAnswers(word)
  // wrongWords.push(word.value)
  // const shuffledAnswers = Shuffle(wrongWords)

  // const wordDisplay = [...gameState.ans.images].map(image => {
  //     return <img id={word.id} src={image} />
  // })

  // const ansDisplay = shuffledAnswers.map(word => <button onClick={(e)=>checkAns(e)} value={word}>{word}</button>)

  useEffect(() => {
    
    
    setGameState(prev => {
      return {
        ...prev,
        choices:ansDisplay
      }
    })
    // setDisabled(prev => !prev)
    // console.log('in use effect')
    // setResult({
    //   value: undefined,
    //   text: '',
    //   style: {
    //     'backgroundColor':'white'
    //   },
    // })
  }, [gameState.ans, gameState.score])
  
  function checkAns(e) {
      const guess = e.target.value
      //console.log(e.target.value)
      if (guess === word.value) {
        console.log(true)
      }
    }

    // const ansDisplay = [...shuffledAnswers].map(word => {
    //     if (word.id) {
    //         return <button id={word.id} value={word.value}>{word.value}</button>
    //     }
    // })

    console.log(wrongWords)
  return (
    <div>
      <QAUI
        question={wordDisplay}
        answers={ansDisplay}
      />
    </div>
  )
}

export default WordGame