const GameButton = ({
  btnDisabled,
  btnText,
  createNewGrid,
  setCreateNewGrid,
}) => {
  const handleGameBtnClick = () => {
    console.log('Creating grid...')
    setCreateNewGrid(!createNewGrid)
  }
  return (
    <button type="submit" disabled={btnDisabled} onClick={handleGameBtnClick}>
      {btnText}
    </button>
  )
}

export default GameButton
