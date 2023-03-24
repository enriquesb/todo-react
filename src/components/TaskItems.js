export default function TaskItems({ tasksArray, deleteTask, toggleCrossOut }) {
  if (tasksArray.length === 0) {
    return (
      <div className="no-tasks stored-tasks-card">
        <p> No task stored. Add a new task.</p>
      </div>
    );
  }
  const listOfTasks = tasksArray.map((task) => (
    <div key={task.id} className="task-item">
      <input type="checkbox" onClick={() => toggleCrossOut(task.id)} checked={task.crossOut} />
      <p className={`${task.crossOut ? "crossedOut" : ""} task-text`}>{task.text}</p>
      <button className="delete-button" onClick={() => deleteTask(task.id)}>
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  ));
  return <div className="stored-tasks-card">{listOfTasks}</div>;
}
