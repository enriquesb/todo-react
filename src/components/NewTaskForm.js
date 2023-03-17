import { useState, useEffect } from "react";

export default function NewTaskForm() {
  const [taskInput, setTaskInput] = useState("");
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setTaskInput(e.target.value);
  }

  useEffect(() => {
    if (newTask) {
      const currentTasksArray = JSON.parse(localStorage.getItem("tasksArray"));
      let nextId;
      if (currentTasksArray.length === 0) {
        nextId = 0;
      } else {
        nextId = currentTasksArray.slice(-1)[0].id + 1;
      }
      console.log(nextId);
      const newTaskArray = [
        ...currentTasksArray,
        {
          id: nextId,
          text: newTask,
          crossOut: false,
        },
      ];
      localStorage.setItem("tasksArray", JSON.stringify(newTaskArray));
    }
  }, [newTask]);

  return (
    <div>
      <p>Hola mundo</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setNewTask(taskInput);
          setTaskInput("");
        }}
      >
        <input value={taskInput} onChange={handleInputChange} />
        <button disabled={!taskInput}>Add</button>
      </form>
    </div>
  );
}
