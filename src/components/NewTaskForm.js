import { useState } from "react";

export default function NewTaskForm({ handleSubmit }) {
  const [taskInput, setTaskInput] = useState("");

  function handleInputChange(e) {
    setTaskInput(e.target.value);
  }

  return (
    <div className="new-task-card">
      <h1>Tasks</h1>
      <form
        className="new-task-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(taskInput);
          setTaskInput("");
        }}
      >
        <div className="input-wrapper">
          <input type="text" className="new-task-input" value={taskInput} onChange={handleInputChange} />
        </div>

        <button className="add-task-button" disabled={!taskInput}>
          <b>Add</b>
        </button>
      </form>
    </div>
  );
}
