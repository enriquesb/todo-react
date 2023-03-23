import "./TaskItems.css";

export default function TaskItems({ tasksArray, deleteTask, toggleCrossOut }) {
  const listOfTasks = tasksArray.map((task) => (
    <div key={task.id} className="task-item">
      <input type="checkbox" onClick={() => toggleCrossOut(task.id)} checked={task.crossOut} />
      <p className={`${task.crossOut ? "crossedOut" : ""}`}>{task.text}</p>
      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  ));
  return <div>{listOfTasks}</div>;
}
