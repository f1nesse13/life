import React, { useState } from 'react'

const Cell = ({ NUM_ROWS, NUM_COL, gridX, gridY, isActive }) => {
  const [cellDetails, setCellDetails] = useState({ gridX, gridY, isActive })
  const drawCell = () => {
    console.log('draws cell')
    //element = isActive ? '#fff' : '#000'
  }
  return <div className="piece" />
}

export default Cell
