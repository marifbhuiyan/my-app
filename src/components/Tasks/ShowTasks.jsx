const ShowTask = ({ tasks, checkHandel, deletHandeler }) => {
  return (
    <div>
      <h1>All Taks</h1>
      {tasks.length > 0 ? (
        tasks.map((task) => {
          return (
            <li key={task.id}>
              <input
                type="checkbox"
                onChange={() => checkHandel(task.id)}
                checked={task.isComplite}></input>
              {task.text}{" "}
              <button onClick={() => deletHandeler(task.id)}>Delet</button>
            </li>
          );
        })
      ) : (
        <p>No Tasks Found</p>
      )}
    </div>
  );
};
export default ShowTask;
