import styles from './styles.module'

const GameButton = ({ btnDisabled, btnText, clickHandler, styleName }) => (
  <button
    className={`${styles.game_button} ${styles[styleName]}`}
    type="submit"
    disabled={btnDisabled}
    onClick={clickHandler}
  >
    {btnText}
  </button>
)

export default GameButton
