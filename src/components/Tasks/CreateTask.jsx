import { useState } from "react";

const CreateTask = ({ createTaskHandeler }) => {
  const [task, settask] = useState();
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Task"
        onChange={(event) => {
          settask(event.target.value);
        }}
        value={task}></input>
      <button
        onClick={() => {
          if (task) {
            createTaskHandeler(task);
            settask("");
          } else {
            alert("Input Fild is Empty");
          }
        }}>
        Create Taks
      </button>
    </div>
  );
};
export default CreateTask;
