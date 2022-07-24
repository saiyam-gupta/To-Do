import React, {useState,useEffect} from "react";
import './App.css';
import Form from "./Components/Form.js";
import ToDoList from "./Components/ToDoList.js";

function App() {
  
  const [inputText,setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    getLocalTodos();
  }, [])
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [toDos,status]);
  function filterHandler() {
    switch(status) {
      case "completed" :
        setFilteredTodos(toDos.filter(toDos => (toDos.completed === true)));
        break;
      case "uncompleted" :
        setFilteredTodos(toDos.filter(toDos => (toDos.completed === false)));
        break;
      default:
        setFilteredTodos(toDos);
        break;
    }

  };
  function saveLocalTodos() {
    localStorage.setItem("toDos",JSON.stringify(toDos));
    
  };
  function getLocalTodos() {
    if (localStorage.getItem("toDos")===null){
      localStorage.setItem("toDos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("toDos"));
      setToDos(todoLocal);
    }

  };
  
  return (
    <div className="App">
      <header><h1>My To Do List</h1></header>
      <Form 
        toDo = {toDos} 
        setToDo = {setToDos} 
        setInputText= {setInputText} 
        inputText= {inputText}
        setStatus={setStatus}
        />
      <ToDoList setToDos={setToDos} filteredTodos={filteredTodos} todos={toDos}/>
    </div>
  );  
}

export default App;
