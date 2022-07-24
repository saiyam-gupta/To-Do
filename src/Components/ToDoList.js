import React from "react";
import Todo from "./ToDo";


function ToDoList({todos,setToDos,filteredTodos}) {
    
    return (
        <div className="todo-container">
            <ul className="todo-list"> 
            {filteredTodos.map(todo => (
            <Todo  setToDos={setToDos} todos={todos} key={todo.id} text={todo.text} todo={todo}/>
            ))}
            </ul>
        </div>
        
    );
};
export default ToDoList;