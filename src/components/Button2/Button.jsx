import classes from "./Button.module.css";
const varient = {
  primary: {
    backgroundColor: "#2196f3",
    color: "#fff",
  },
  success: {
    backgroundColor: "#4caf50",
    color: "#000",
  },
  error: {
    backgroundColor: "#f44336",
    color: "#fff",
  },
  warning: {
    backgroundColor: "#ff9800",
    color: "#000",
  },
  info: {
    backgroundColor: "#80d8ff",
    color: "#000",
  },
};

const size = {
  small: {
    padding: "0.5rem 1rem",
  },
  medium: {
    padding: "1rem 1.5rem",
  },
  learg: {
    padding: "1.5rem 2rem",
  },
};
const Button2 = (props) => {
  const userVarient = varient[props.varient];
  const userSize = size[props.size];
  return (
    <div>
      <button
        className={classes.button}
        style={{
          ...userSize,
          ...userVarient,
        }}>
        {props.text}
      </button>
    </div>
  );
};

export default Button2;
