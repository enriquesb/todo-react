import "./App.css";
import { useState, useEffect } from "react";
import NewTaskForm from "./components/NewTaskForm";
import TaskItems from "./components/TaskItems";

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

  function deleteTask(deleteId) {
    const newTasksArray = tasksArray.filter((task) => task.id !== deleteId);
    setTasksArray(newTasksArray);
  }

  function toggleCrossOut(crossOutId) {
    const newTasksArray = tasksArray.map((task) => {
      if (task.id === crossOutId) {
        return {
          ...task,
          crossOut: !task.crossOut,
        };
      } else {
        return task;
      }
    });
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
      <TaskItems tasksArray={tasksArray} deleteTask={deleteTask} toggleCrossOut={toggleCrossOut} />
    </div>
  );
}

export default App;
