import { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import Window from './Window'
import Navigation from '../Navigation/Navigation'

const Game = () => {
  const [NUM_ROWS, setNumRows] = useState(32)
  const [NUM_COL, setNumCol] = useState(32)
  const [randomize, setRandomize] = useState(30)
  const [cellShape, setCellShape] = useState(50)
  const [cellColor, setCellColor] = useState('default')
  const [cellSize, setCellSize] = useState(10)
  const [createNewGrid, setCreateNewGrid] = useState(false)
  const [gameStart, setGameStart] = useState(false)
  const [iterationSpeed, setIterationSpeed] = useState(1000)

  useEffect(async () => {
    if (!gameStart) stopGame()
  }, [gameStart])

  const stopGame = () => {
    setGameStart(false)
  }

  return (
    <div className={styles.game_container}>
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
        setCellSize={setCellSize}
        setCellShape={setCellShape}
        setCellColor={setCellColor}
      />
      {createNewGrid && (
        <Window
          NUM_ROWS={NUM_ROWS}
          NUM_COL={NUM_COL}
          randomize={randomize}
          createNewGrid={createNewGrid}
          gameStart={gameStart}
          iterationSpeed={iterationSpeed}
          cellSize={cellSize}
          cellShape={cellShape}
          cellColor={cellColor}
        />
      )}
    </div>
  )
}

export default Game
