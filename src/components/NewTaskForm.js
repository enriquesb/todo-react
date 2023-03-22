import { useState } from "react";

export default function NewTaskForm({ handleSubmit }) {
  const [taskInput, setTaskInput] = useState("");

  function handleInputChange(e) {
    setTaskInput(e.target.value);
  }

  return (
    <div>
      <p>Hola mundo</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(taskInput);
          setTaskInput("");
        }}
      >
        <input value={taskInput} onChange={handleInputChange} />
        <button disabled={!taskInput}>Add</button>
      </form>
    </div>
  );
}
