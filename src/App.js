import "./App.css";
import NewTaskForm from "./components/NewTaskForm";

if (localStorage.getItem("tasksArray") === null) {
  localStorage.setItem("tasksArray", JSON.stringify([]));
}

function App() {
  return (
    <div className="App">
      <h1>Tasks</h1>
      <NewTaskForm />
    </div>
  );
}

export default App;
