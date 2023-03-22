import { useState } from "react";

export default function NewTaskForm({ handleSubmit }) {
  const [taskInput, setTaskInput] = useState("");

  function handleInputChange(e) {
    setTaskInput(e.target.value);
  }

  // function handleSubmit() {
  //   const currentTasksArray = JSON.parse(localStorage.getItem("tasksArray"));
  //   let nextId;
  //   if (currentTasksArray.length === 0) {
  //     nextId = 0;
  //   } else {
  //     nextId = currentTasksArray.slice(-1)[0].id + 1;
  //   }
  //   const newTaskArray = [
  //     ...currentTasksArray,
  //     {
  //       id: nextId,
  //       text: taskInput,
  //       crossOut: false,
  //     },
  //   ];
  //   localStorage.setItem("tasksArray", JSON.stringify(newTaskArray));
  // }

  return (
    <div>
      <p>Hola mundo</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // handleSubmit();
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
