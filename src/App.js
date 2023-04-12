import "./App.css";
import { useState } from "react";
import logo from "./inspirenoshadow.png";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div className="App" style={{ backgroundColor: "darkgrey", padding: "20px" }}>
      <div className="flashy-word" >Inspire Stone</div>
      <img src={logo} className="App-logo" alt="logo" />
      <div className="addTask">
        <input onChange={handleChange} style={{ backgroundColor: "white", color: "darkred" }}/>
        <button onClick={addTask} style={{ backgroundColor: "darkred", color: "white" }}> Add Task</button>
      </div>
      <div className="list" ></div>
      {todoList.map((task) => {
        return (
          <div>
            <h1>{task.taskName}</h1>
            <button onClick={() => deleteTask(task.id)}>X</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
