import { useState } from 'react'
import Game from './Game/Game'
import Navigation from './Navigation/Navigation'

const App = () => {
  const [NUM_ROWS, setNumRows] = useState(null)
  const [NUM_COL, setNumCol] = useState(null)
  const [activeGame, setActiveGame] = useState(false)
  return (
    <>
      <Navigation
        NUM_ROWS={NUM_ROWS}
        NUM_COL={NUM_COL}
        activeGame={activeGame}
        setActiveGame={setActiveGame}
        setNumRows={setNumRows}
        setNumCol={setNumCol}
      />
      <Game NUM_ROWS={NUM_ROWS} NUM_COL={NUM_COL} activeGame={activeGame} />
    </>
  )
}

export default App
