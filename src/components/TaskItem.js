import "./TaskItem.css";

export default function TaskItem({ tasksArray }) {
  const listOfTasks = tasksArray.map((task) => (
    <div className="task-item">
      <input type="checkbox" />
      <p>{task.text}</p>
      <button>X</button>
    </div>
  ));
  return <div>{listOfTasks}</div>;
}
