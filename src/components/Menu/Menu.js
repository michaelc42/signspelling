import React from 'react'

export const Menu = (props) => {
    const { getGame } = props
  return (
      <div className='menu'>
        <button onClick={(e)=>getGame(e)} value="letter">Letter Game</button>
        <button onClick={(e) => getGame(e)} value="word">Word Game</button>
    </div>
  )
}
