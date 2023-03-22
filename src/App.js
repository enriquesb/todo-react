import "./App.css";
import { useState, useEffect } from "react";
import NewTaskForm from "./components/NewTaskForm";
import TaskItem from "./components/TaskItem";

if (localStorage.getItem("tasksArray") === null) {
  localStorage.setItem("tasksArray", JSON.stringify([]));
}

// let didInit = false;

function App() {
  function createInitialTaskArray() {
    const initialTasksArray = JSON.parse(localStorage.getItem("tasksArray"));
    return initialTasksArray;
  }

  function addTask(newTask) {
    let nextId;
    if (tasksArray.length === 0) {
      nextId = 0;
    } else {
      nextId = tasksArray.slice(-1)[0].id + 1;
    }
    const newTasksArray = [
      ...tasksArray,
      {
        id: nextId,
        text: newTask,
        crossOut: false,
      },
    ];
    setTasksArray(newTasksArray);
  }

  const [tasksArray, setTasksArray] = useState(createInitialTaskArray);

  useEffect(() => {
    localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
  }, [tasksArray]);

  console.log(tasksArray);

  return (
    <div className="App">
      <h1>Tasks</h1>
      <NewTaskForm handleSubmit={addTask} />
      <TaskItem />
    </div>
  );
}

export default App;
