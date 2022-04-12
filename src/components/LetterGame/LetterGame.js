import React from 'react'



const LetterGame = (props) => {

  const { checkAns,} = props
  const { choices, score, ans } = props.gameState
  

  let choicesElements = choices.map((choice) => {
    return <button
      onClick={(e) => checkAns(e)}
      value={choice.value}
      key={choice.id}
      id={choice.id}
    >
      {(choice.value).toUpperCase()}
    </button>
  })

  return (
    <section className='letter-game'>
      <h2>Letter Game</h2>
      <h3>Score: {score}</h3>
      <div>
        <img src={ans.image} alt="guess"/>
      </div>

      <div className='choices'>
        {choicesElements}
      </div>

    </section>
  )
}

export default LetterGame