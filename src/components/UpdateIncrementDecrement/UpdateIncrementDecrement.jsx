const UpdateIncrementDecrement = ({
  incrementValue,
  decrementValue,
  handelIncrement,
  handelDecrementValue,
}) => {
  return (
    <div>
      <label>Increment</label>
      <input
        type="number"
        value={incrementValue}
        onChange={handelIncrement}></input>
      <label>Decrement</label>
      <input
        type="number"
        value={decrementValue}
        onChange={handelDecrementValue}></input>
    </div>
  );
};

export default UpdateIncrementDecrement;
