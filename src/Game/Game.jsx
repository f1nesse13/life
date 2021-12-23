import { useState, useEffect } from 'react'
import Window from './Window'
import Navigation from '../Navigation/Navigation'

const Game = () => {
  const [gameStart, setGameStart] = useState(false)
  const [NUM_ROWS, setNumRows] = useState(null)
  const [NUM_COL, setNumCol] = useState(null)
  const [createNewGrid, setCreateNewGrid] = useState(false)
  const [randomize, setRandomize] = useState(false)
  const [iteration, setIteration] = useState(0)
  const [iterationSpeed, setIterationSpeed] = useState(200)

  useEffect(() => {
    setIteration(iteration + 1)
  }, [gameStart])

  return (
    <>
      <Navigation
        NUM_ROWS={NUM_ROWS}
        NUM_COL={NUM_COL}
        createNewGrid={createNewGrid}
        setCreateNewGrid={setCreateNewGrid}
        setNumRows={setNumRows}
        setNumCol={setNumCol}
        setRandomize={setRandomize}
        iterationSpeed={iterationSpeed}
        setIterationSpeed={setIterationSpeed}
        gameStart={gameStart}
        setGameStart={setGameStart}
      />
      <Window
        NUM_ROWS={NUM_ROWS}
        NUM_COL={NUM_COL}
        randomize={randomize}
        createNewGrid={createNewGrid}
        iteration={iteration}
      />
    </>
  )
}

export default Game
