import React from "react";
import ToDoList from "./ToDoList";

function Todo({text,todos,setToDos,todo}) {
    function deleteHandler() {
        setToDos(todos.filter(el => el.id !== todo.id));
    };
    function completeHandler() {
       setToDos(todos.map(item => {
           if (item.id === todo.id) {
               return {
                   ...item, completed: !item.completed
               }

           }
           return item;

        })) 
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text} </li>
            <button onClick={completeHandler} className="complete-btn"> 
                <i className="fas fa-check"></i>
                
            </button>
            <button onClick={deleteHandler} className="trash-btn"> 
                <i className="fas fa-trash"></i>
                
            </button>
        </div>

    );
}
export default Todo;