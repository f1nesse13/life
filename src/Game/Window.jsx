/* eslint-disable indent */
import { useState, useEffect } from 'react'
import COLORS from '@constants/colors'
import { randomPick } from '@helpers/randomValues'
import styles from './styles.module'
import Cell from './Cell'
import LoadingIcon from './LoadingIcon'

const Window = ({
  NUM_ROWS,
  NUM_COL,
  randomize,
  createNewGrid,
  iterationSpeed,
  gameStart,
  cellSize,
  cellShape,
  cellColor,
}) => {
  const [grid, setGrid] = useState([[]])
  const [gridState, setGridState] = useState([[]])
  const [loading, setLoading] = useState(false)

  const { active, inactive } = COLORS

  const activeColors = active[cellColor]
  const inactiveColors = inactive.default

  const getColor = (type) =>
    type === 'active' ? randomPick(activeColors) : randomPick(inactiveColors)

  const createGridState = () =>
    new Array(NUM_ROWS).fill([]).map(() =>
      new Array(NUM_COL).fill().map(() =>
        randomize
          ? {
              cellActive: Math.round(Math.random() * 100) <= parseInt(randomize),
              wasActive: false,
            }
          : { cellActive: false, wasActive: false }
      )
    )

  const handleClickCell = (x, y) => {
    gridState[y][x].cellActive = !gridState[y][x].cellActive
    setGridState((oldGridState) => console.log(oldGridState === gridState))
  }
  const drawGrid = () =>
    gridState.map((row, gridY) => (
      <div className={styles.row} key={`${gridY}_row`}>
        {row.map(({ cellActive, wasActive }, gridX) => {
          const activeColor = getColor('active')
          const inactiveColor = getColor('inactive')

          return (
            <div key={`${gridX}_col`} className={styles.column}>
              <Cell
                className={styles.column}
                key={`${gridY}_${gridX}_cell`}
                gridX={gridX}
                gridY={gridY}
                isActive={cellActive}
                wasActive={wasActive}
                activeColor={activeColor}
                inactiveColor={inactiveColor}
                cellSize={cellSize}
                cellShape={cellShape}
                handleClickCell={handleClickCell}
              >
                _
              </Cell>
            </div>
          )
        })}
      </div>
    ))

  const isAlive = (activeNeighbors, cell) =>
    cell ? activeNeighbors === 3 || activeNeighbors === 2 : activeNeighbors === 3

  const shouldBeAlive = (gridX, gridY) => {
    const top = [gridX, gridY - 1]
    const bottom = [gridX, gridY + 1]
    const left = [gridX - 1, gridY]
    const right = [gridX + 1, gridY]
    const topLeft = [gridX - 1, gridY - 1]
    const topRight = [gridX + 1, gridY - 1]
    const bottomLeft = [gridX - 1, gridY + 1]
    const bottomRight = [gridX + 1, gridY + 1]

    const activeNeighbors = [
      top,
      bottom,
      left,
      right,
      topLeft,
      topRight,
      bottomLeft,
      bottomRight,
    ].reduce((count, [x, y]) => {
      let currentCount = count
      if (x >= 0 && y >= 0 && x < NUM_COL && y < NUM_ROWS && gridState[y][x].cellActive) {
        currentCount += 1
      }
      return currentCount
    }, 0)

    return {
      cellActive: isAlive(activeNeighbors, gridState[gridY][gridX].cellActive),
      wasActive: gridState[gridY][gridX].cellActive,
    }
  }

  useEffect(() => {
    if (createNewGrid) {
      setLoading(true)
      const initialGridState = createGridState()
      setGridState(initialGridState)
    } else {
      setGridState([[]])
    }
  }, [createNewGrid])

  useEffect(() => {
    setGrid([drawGrid()])
    setLoading(false)
  }, [gridState])

  useEffect(() => {
    if (gameStart) {
      const timerId = setInterval(
        () =>
          setGridState((oldGridState) =>
            oldGridState.map((row, gridY) => row.map((col, gridX) => shouldBeAlive(gridX, gridY)))
          ),
        iterationSpeed
      )
      return () => clearInterval(timerId)
    }
    return true
  }, [gameStart, gridState])

  return <div className={styles.window}>{loading ? <LoadingIcon /> : grid}</div>
}

export default Window
