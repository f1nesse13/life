import { useState } from 'react'
import UserGameSettings from './UserGameSettings'
import GameButton from './GameButton'

const Navigation = ({
  NUM_ROWS,
  NUM_COL,
  setNumRows,
  setNumCol,
  createNewGrid,
  setCreateNewGrid,
  setRandomize,
  gameStart,
  setGameStart,
  iterationSpeed,
  setIterationSpeed,
}) => {
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [gridCreated, setGridCreated] = useState(false)
  const handleGridCreate = () => {
    setGridCreated(!gridCreated)
    setCreateNewGrid(!createNewGrid)
  }
  const handleGameState = () => {
    setGameStart(!gameStart)
  }

  return (
    <div>
      <UserGameSettings
        NUM_ROWS={NUM_ROWS}
        NUM_COL={NUM_COL}
        setNumRows={setNumRows}
        setNumCol={setNumCol}
        setBtnDisabled={setBtnDisabled}
        setRandomize={setRandomize}
        iterationSpeed={iterationSpeed}
        setIterationSpeed={setIterationSpeed}
        setGridCreated={setGridCreated}
      />

      <GameButton
        createNewGrid={createNewGrid}
        setCreateNewGrid={setCreateNewGrid}
        btnDisabled={btnDisabled || (gridCreated && gameStart)}
        btnText={createNewGrid ? 'Reset Grid' : 'Create New Grid'}
        clickHandler={handleGridCreate}
      />

      <GameButton
        btnDisabled={btnDisabled || !gridCreated}
        btnText={gameStart ? 'Stop Game' : 'Start Game'}
        clickHandler={handleGameState}
      />
    </div>
  )
}

export default Navigation
