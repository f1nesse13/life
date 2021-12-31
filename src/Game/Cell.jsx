import { useEffect, useRef } from 'react'
import styles from './styles.module.scss'

const Cell = ({
  gridX,
  gridY,
  isActive,
  wasActive,
  cellSize,
  fadeIn,
  fadeOut,
  activeColor,
  inactiveColor,
  handleClickCell,
}) => {
  const cell = useRef(`${gridY}${gridX}`)

  useEffect(() => {
    const targetCell = cell.current
    drawCell(targetCell)
    animateCell(targetCell)
  }, [isActive])

  const animateCell = (targetCell) => {
    if (isActive && !wasActive) {
      targetCell.animate({ backgroundColor: [inactiveColor, activeColor] }, { duration: fadeIn })
    }
    if (wasActive && !isActive) {
      targetCell.animate({ backgroundColor: [activeColor, inactiveColor] }, { duration: fadeOut })
    }
  }
  const drawCell = (targetCell) => {
    if (isActive) {
      targetCell.classList.remove(styles.inactive)
      targetCell.classList.add(styles.active)
    } else {
      targetCell.classList.remove(styles.active)
      targetCell.classList.add(styles.inactive)
    }
  }

  return (
    <div className={styles.cell} aria-hidden="true">
      <div ref={cell} className={styles.inner_cell} style={{ width: cellSize, height: cellSize }} />
    </div>
  )
}

export default Cell
