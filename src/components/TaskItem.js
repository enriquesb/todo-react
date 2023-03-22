import "./TaskItem.css";

export default function TaskItem({ tasksArray, deleteTask }) {
  const listOfTasks = tasksArray.map((task) => (
    <div key={task.id} className="task-item">
      <input type="checkbox" />
      <p>{task.text}</p>
      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  ));
  return <div>{listOfTasks}</div>;
}
