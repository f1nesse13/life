import { useState, useEffect, useRef } from 'react'
import styles from './styles.module'

const Cell = ({
  NUM_ROWS,
  NUM_COL,
  gridX,
  gridY,
  gridState,
  isActive,
  changeCellState,
  iteration,
}) => {
  const [cellActive, setCellActive] = useState(isActive)
  const cell = useRef(`${gridY}${gridX}`)
  useEffect(() => {
    drawCell()
  }, [cellActive, gridState, isActive])

  useEffect(() => {
    shouldBeAlive()
  }, [iteration])
  const drawCell = () => {
    console.log('draws cell')
    const element = cell.current
    if (cellActive) {
      element.classList.remove(styles.inactive)
      element.classList.add(styles.active)
    } else {
      element.classList.remove(styles.active)
      element.classList.add(styles.inactive)
    }
  }

  const isAlive = positions => positions.length === 3 || positions.length === 2

  const shouldBeAlive = () => {
    // const myPosition = [gridX, gridY]
    const top = [gridX, gridY + 1]
    const bottom = [gridX, gridY - 1]
    const left = [gridX - 1, gridY]
    const right = [gridX + 1, gridY]
    const topLeft = [gridX - 1, gridY + 1]
    const topRight = [gridX + 1, gridY + 1]
    const bottomLeft = [gridX - 1, gridY - 1]
    const bottomRight = [gridX + 1, gridY - 1]
    const validPositions = [
      top,
      bottom,
      left,
      right,
      topLeft,
      topRight,
      bottomLeft,
      bottomRight,
    ].filter(
      ([x, y]) =>
        x > 0 && y > 0 && x < NUM_COL && y < NUM_ROWS && gridState[y][x]
    )
    setCellActive(isAlive(validPositions))
  }
  const handleCellClick = () => {
    setCellActive(!cellActive)
    console.log(gridState)
    const x = parseInt(gridX)
    const y = parseInt(gridY)
    drawCell()
    changeCellState(y, x)
  }
  return (
    <div onClick={handleCellClick} ref={cell} className={`${styles.cell}`} />
  )
}

export default Cell
