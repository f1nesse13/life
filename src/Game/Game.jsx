import React, { useState } from 'react'
import Window from './Window'
import Navigation from './Navigation/Navigation'

const NUM_ROWS = 500
const NUM_COL = 500
const Game = (props) => {
  const [activeGame, setActiveGame] = useState(false)
  const [boardState, setBoardState] = useState([[]])
  let NUM_ROWS, NUM_COL
  return (
    <div>
      <Navigation />
      <Window
        setBoardState={setBoardState}
        NUM_ROWS={NUM_ROWS}
        NUM_COL={NUM_COL}
        activeGame={activeGame}
      />
    </div>
  )
}

export default Game
