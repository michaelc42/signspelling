import './App.css';
import { useState, useEffect} from 'react';
import LetterGameApp from './components/LetterGame/LetterGameApp';
import { Menu } from './components/Menu/Menu';
import WordGame from './components/WordGame/WordGame';


function App() {
  
  const games = {
    'letter': <LetterGameApp 
      getGame={getGame}
    />,
    'menu': <Menu
      getGame = {getGame}
    />,
    'word': <WordGame
      getGame={getGame}
    />,
  }

  const [game, setGame] = useState(games['menu'])
  const [menuShow, setMenuShow] = useState(false)
  
  function getGame(e) {
    let choice = e.target.value
    setMenuShow((prev)=>!prev)
    setGame(games[choice])
  }

  
  useEffect(() => {
    
  }, [])

  return (
    <div className='App'>
      {menuShow && <button onClick={(e)=>getGame(e)} value='menu'>Menu</button>}
      {game} 
    </div>
  )
 
}

export default App;
