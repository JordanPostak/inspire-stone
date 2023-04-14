import "./App.css";
import { useState } from "react";
import logo from "./images/inspirenoshadow.png";
import { Task } from "./Task";

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
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div
      className="App"
    >
      <div className="appHeader" style={{ padding: "20px" }}>
        <div className="flashy-word">Inspire Stone</div>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="addTask">
          <input
            onChange={handleChange}
            style={{ backgroundColor: "white", color: "darkred" }}
          />
          <button
            onClick={addTask}
            style={{ backgroundColor: "darkred", color: "white" }}
          >
            {" "}
            Receive
          </button>
        </div>
      </div>
      <div style={{
        background: 'linear-gradient(to bottom, darkred, black)',
        padding: '5px'
      }}>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
      <div style={{
        background: 'linear-gradient(to bottom, black, darkred)',
        padding: '5px'
      }}>
      </div>
    </div>
  );
}

export default App;
