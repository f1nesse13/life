import { useState } from 'react'
import UserGameSettings from './UserGameSettings'
import GameButton from './GameButton/GameButton'
import styles from './styles.module'

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
  setCellSize,
  setCellShape,
  setCellColor,
}) => {
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [gridCreated, setGridCreated] = useState(false)
  const [openSettings, setOpenSettings] = useState(false)

  const handleGridCreate = () => {
    setGridCreated(!gridCreated)
    setCreateNewGrid(!createNewGrid)
  }
  const handleGameState = () => {
    setGameStart(!gameStart)
  }
  const handlerOpenSettings = () => {
    setOpenSettings(!openSettings)
  }

  return (
    <div className={styles.nav_container}>
      <div className={styles.gamebtn_container}>
        <GameButton
          styleName="create_grid_btn"
          createNewGrid={createNewGrid}
          setCreateNewGrid={setCreateNewGrid}
          btnDisabled={btnDisabled || (gridCreated && gameStart)}
          btnText={createNewGrid ? 'Reset Grid' : 'Create New Grid'}
          clickHandler={handleGridCreate}
        />

        <GameButton
          styleName="start_game_btn"
          btnDisabled={btnDisabled || !gridCreated}
          btnText={gameStart ? 'Stop Game' : 'Start Game'}
          clickHandler={handleGameState}
        />
        <GameButton
          styleName="settings_control_btn"
          btnDisabled={createNewGrid}
          btnText={openSettings && !createNewGrid ? 'Close Settings' : 'Open Settings'}
          clickHandler={handlerOpenSettings}
        />
      </div>
      {openSettings && !createNewGrid && (
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
          setCellSize={setCellSize}
          setCellShape={setCellShape}
          setCellColor={setCellColor}
        />
      )}
    </div>
  )
}

export default Navigation
