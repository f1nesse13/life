import { useState } from 'react'
import Window from './Window'

const Game = ({ NUM_ROWS, NUM_COL, activeGame }) => (
  <Window
    setBoardState={setBoardState}
    NUM_ROWS={NUM_ROWS}
    NUM_COL={NUM_COL}
    activeGame={activeGame}
  />
)

export default Game
