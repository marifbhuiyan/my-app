import { useState } from "react";
import Layout from "../components/Layout/Layout";
import CreateTask from "../components/Tasks/CreateTask";
import shortid from "shortid";
import ShowTask from "../components/Tasks/ShowTasks";
const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [visibality, setvisibality] = useState("all");

  const createTask = (text) => {
    const task = {
      text,
      isComplite: false,
      createdDate: new Date(),
      id: shortid.generate(),
    };

    setTasks([task, ...tasks]);
  };

  const checkHandel = (id) => {
    const newtask = tasks.map((item) => {
      if (item.id === id) {
        item.isComplite = !item.isComplite;
      }

      return item;
    });
    setTasks(newtask);
  };
  const handelVisibality = (text) => setvisibality(text);

  const gettasked = () => {
    if (visibality === "complite") {
      return tasks.filter((item) => item.isComplite);
    }
    if (visibality === "incomplite") {
      return tasks.filter((item) => !item.isComplite);
    }
    return tasks;
  };

  const deletHandeler = (id) => {
    const task = tasks.filter((item) => {
      return item.id !== id;
    });
    setTasks(task);
  };

  return (
    <Layout>
      <h1> Task Pages</h1>
      <CreateTask createTaskHandeler={createTask} />
      <div>
        <button
          onClick={() => {
            handelVisibality("all");
          }}>
          ALL
        </button>
        <button
          onClick={() => {
            handelVisibality("complite");
          }}>
          Complite
        </button>
        <button
          onClick={() => {
            handelVisibality("incomplite");
          }}>
          In Complite
        </button>
        <p>Select Visibality : {visibality}</p>
      </div>
      <ShowTask
        deletHandeler={deletHandeler}
        checkHandel={checkHandel}
        tasks={gettasked()}
      />
    </Layout>
  );
};
export default Task;
