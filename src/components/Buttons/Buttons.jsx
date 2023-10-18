const Buttons = ({ increment, decrements }) => {
  return (
    <>
      <button onClick={increment}>Increment</button>
      <button onClick={decrements}>Increment</button>
    </>
  );
};

export default Buttons;
