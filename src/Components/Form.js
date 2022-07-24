import React from "react";


function Form({setInputText,toDo,setToDo,inputText,setStatus }) {
  function InputTextHandler(e) {
    console.log(e.target.value);
    setInputText(e.target.value); //to add text for todo
  }
  function submitToDoHandler(e) {
    e.preventDefault();
    setToDo([...toDo,{text:inputText,completed:false,id:Math.random()*1000}]);
    setInputText(""); //submit button
  };
  function statushandler(e) {
    setStatus(e.target.value);
    
    
  }

  return (
      <form>
    <input value = {inputText} onChange = {InputTextHandler} type="text" className="todo-input" />
    <button onClick = {submitToDoHandler}className="todo-button" type="submit">
      <i className="fas fa-plus-square"></i>
      
    </button>
    <div className="select">
      <select onChange={statushandler} name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  </form>
  ) ;

};
export default Form;