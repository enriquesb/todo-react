import "./App.css";
import { useEffect } from "react";
import NewTaskForm from "./components/NewTaskForm";

function App() {
  useEffect(() => {
    if (localStorage.getItem("tasksArray") === null) {
      localStorage.setItem("tasksArray", JSON.stringify([]));
    }
  }, []);

  return (
    <div className="App">
      <h1>Tasks</h1>
      <NewTaskForm />
    </div>
  );
}

export default App;
