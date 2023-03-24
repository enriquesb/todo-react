import "./App.css";
import { useState, useEffect } from "react";
import NewTaskForm from "./components/NewTaskForm";
import TaskItems from "./components/TaskItems";

// Create variable in localStorage if it doesn't exist yet
if (localStorage.getItem("tasksArray") === null) {
  localStorage.setItem("tasksArray", JSON.stringify([]));
}

function App() {
  // Get initial array of tasks from localStorage
  function createInitialTaskArray() {
    const initialTasksArray = JSON.parse(localStorage.getItem("tasksArray"));
    return initialTasksArray;
  }

  // Add a new task to the array
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

  // Delete a task from the array
  function deleteTask(deleteId) {
    const newTasksArray = tasksArray.filter((task) => task.id !== deleteId);
    setTasksArray(newTasksArray);
  }

  // Change value of property crossOut of a task
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

  // Save changes of tasks array in localStorage
  useEffect(() => {
    localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
  }, [tasksArray]);

  return (
    <div className="app">
      <NewTaskForm handleSubmit={addTask} />
      <TaskItems tasksArray={tasksArray} deleteTask={deleteTask} toggleCrossOut={toggleCrossOut} />
    </div>
  );
}

export default App;
