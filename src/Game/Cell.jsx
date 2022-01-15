import { useEffect, useRef } from 'react'
import styles from './styles.module.scss'

const Cell = ({
  gridX,
  gridY,
  isActive,
  wasActive,
  cellSize,
  cellFadeIn,
  cellFadeOut,
  activeColor,
  inactiveColor,
  cellShape,
}) => {
  const cell = useRef(`${gridY}${gridX}`)

  useEffect(() => {
    const targetCell = cell.current
    drawCell(targetCell)
    animateCell(targetCell)
  }, [isActive])

  const animateCell = (targetCell) => {
    if (isActive && !wasActive) {
      targetCell.animate(
        { backgroundColor: [inactiveColor, activeColor] },
        { duration: cellFadeIn }
      )
    }
    if (wasActive && !isActive) {
      targetCell.animate(
        { backgroundColor: [activeColor, inactiveColor] },
        { duration: cellFadeOut }
      )
    }
  }
  const drawCell = (targetCell) => {
    if (isActive) {
      targetCell.style.backgroundColor = activeColor
    } else {
      targetCell.style.backgroundColor = inactiveColor
    }
  }

  return (
    <div className={styles.cell} aria-hidden="true">
      <div
        ref={cell}
        className={styles.inner_cell}
        style={{
          width: cellSize,
          height: cellSize,
          borderRadius: cellShape,
        }}
      />
    </div>
  )
}

export default Cell
