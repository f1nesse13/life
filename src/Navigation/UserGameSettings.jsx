import styles from './styles.module'

const UserGameSettings = ({
  NUM_ROWS,
  NUM_COL,
  setNumRows,
  setNumCol,
  setBtnDisabled,
  setRandomize,
  setIterationSpeed,
  setCellSize,
  setCellShape,
  setCellColor,
}) => {
  const getRows = (e) => {
    e.preventDefault()
    const value = parseInt(e.target.value)
    setNumRows(value)
    setBtnDisabled(!validateValues(value, NUM_COL))
  }
  const getColumns = (e) => {
    e.preventDefault()
    const value = parseInt(e.target.value)
    setNumCol(value)
    setBtnDisabled(!validateValues(value, NUM_ROWS))
  }
  const getIterationSpeed = (e) => {
    e.preventDefault()
    const value = parseInt(e.target.value)
    setIterationSpeed(value)
  }
  const handlerRandomSelect = (e) => {
    e.preventDefault()
    const value = parseInt(e.target.value)
    setRandomize(value)
  }
  const handlerCellSizeSelect = (e) => {
    e.preventDefault()
    const value = parseInt(e.target.value)
    setCellSize(value)
  }
  const handleCellShape = (e) => {
    e.preventDefault()
    const {
      target: { value },
    } = e
    setCellShape(value)
  }
  const handleCellColor = (e) => {
    e.preventDefault()
    const {
      target: { value },
    } = e
    setCellColor(value)
  }
  const validateValues = (value1, value2) =>
    value1 > 0 && value1 <= 5000 && value2 > 0 && value2 < 5000

  return (
    <div className={styles.settings_container}>
      <input
        className={styles.row_input}
        placeholder="Number of rows"
        type="number"
        min="5"
        onInput={getRows}
      />

      <input
        className={styles.col_input}
        placeholder="Number of columns"
        type="number"
        min="5"
        onInput={getColumns}
      />

      <input
        className={styles.iteration_input}
        placeholder="Iteration Speed (ms)"
        type="number"
        min="300"
        onInput={getIterationSpeed}
      />

      <select
        className={styles.start_cell_select}
        onChange={handlerRandomSelect}
        name="randomizerDropDown"
        id="randomizerDropDown"
        defaultValue="LABEL_OPT"
      >
        <option value="LABEL_OPT" disabled>
          Starting active cells
        </option>
        <option value="0">Off</option>
        <option value="10">10%</option>
        <option value="20">20%</option>
        <option value="30">30%</option>
        <option value="40">40%</option>
        <option value="50">50%</option>
        <option value="60">60%</option>
        <option value="70">70%</option>
        <option value="80">80%</option>
        <option value="90">90%</option>
        <option value="100">100%</option>
      </select>

      <select
        className={styles.cell_size_select}
        onChange={handlerCellSizeSelect}
        name="cellSizeDropdown"
        id="cellSizeDropdown"
        defaultValue="LABEL_OPT"
      >
        <option value="LABEL_OPT" disabled>
          Cell Size
        </option>
        <option value="0">1 pixel</option>
        <option value="5">5 pixels</option>
        <option value="10">10 pixels</option>
      </select>

      <select
        className={styles.cell_shape_select}
        onChange={handleCellShape}
        name="cellShapeDropdown"
        id="cellShapeDropdown"
        defaultValue="LABEL_OPT"
      >
        <option value="LABEL_OPT" disabled>
          Cell shape
        </option>
        <option value="0px">Square</option>
        <option value="10px">Square 2</option>
        <option value="50px">Circle</option>
      </select>

      <select
        className={styles.cell_color_select}
        onChange={handleCellColor}
        name="colorSchemeDropdown"
        id="colorSchemeDropdown"
        defaultValue="LABEL_OPT"
      >
        <option value="LABEL_OPT" disabled>
          Cell Color(s)
        </option>
        <option value="default">Default</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="pink">Pink</option>
        <option value="purple">Purple</option>
        <option value="rainbow1">Rainbow</option>
        <option value="hyper">Hyper</option>
        <option value="singleR">Random Color</option>
        <option value="paletteR">Random Palette</option>
      </select>
    </div>
  )
}

export default UserGameSettings
