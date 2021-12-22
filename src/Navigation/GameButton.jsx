const GameButton = ({ btnDisabled, btnText, activeGame, setActiveGame }) => {
  const handleGameBtnClick = () => {
    console.log('Activating game...')
    setActiveGame(!activeGame)
  }
  return (
    <button type="submit" disabled={btnDisabled} onClick={handleGameBtnClick}>
      {btnText}
    </button>
  )
}

export default GameButton
