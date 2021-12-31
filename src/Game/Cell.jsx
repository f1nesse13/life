import { useEffect, useRef } from 'react'
import styles from './styles.module.scss'

const Cell = ({ gridX, gridY, isActive }) => {
  const cell = useRef(`${gridY}${gridX}`)
  useEffect(() => {
    drawCell()
  })

  const drawCell = () => {
    const element = cell.current
    if (isActive) {
      element.classList.remove(styles.inactive)
      element.classList.add(styles.active)
    } else {
      element.classList.remove(styles.active)
      element.classList.add(styles.inactive)
    }
  }

  return <div ref={cell} className={`${styles.cell}`} />
}

export default Cell
