const UserGameSettings = ({
  NUM_ROWS,
  NUM_COL,
  setNumRows,
  setNumCol,
  setBtnDisabled,
  setRandomize,
  setIterationSpeed,
}) => {
  const getRows = e => {
    e.preventDefault()
    const value = parseInt(e.target.value)
    setNumRows(value)
    setBtnDisabled(!validateValues(value, NUM_COL))
  }
  const getColumns = e => {
    e.preventDefault()
    const value = parseInt(e.target.value)
    setNumCol(value)
    setBtnDisabled(!validateValues(value, NUM_ROWS))
  }
  const getIterationSpeed = e => {
    e.preventDefault()
    const value = parseInt(e.target.value)
    setIterationSpeed(value)
  }
  const handlerRandomSelect = e => {
    e.preventDefault()
    const value = parseInt(e.target.value)
    setRandomize(value)
  }

  const validateValues = (value1, value2) =>
    value1 > 0 && value1 <= 5000 && value2 > 0 && value2 < 5000

  return (
    <>
      <input className="row_input" placeholder="Number of rows" type="number" onInput={getRows} />

      <input
        className="col_input"
        placeholder="Number of columns"
        type="number"
        onInput={getColumns}
      />
      <select
        onChange={handlerRandomSelect}
        name="randomizerDropDown"
        id="randomizerDropDown"
        defaultValue="1"
      >
        <option value="1" disabled>
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
      <input
        className="iteration_input"
        placeholder="Iteration Speed (ms)"
        type="number"
        onInput={getIterationSpeed}
      />
    </>
  )
}

export default UserGameSettings
