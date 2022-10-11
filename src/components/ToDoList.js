import ToDo from "./ToDo"
import React from "react";
const ToDoList = (props) => {
  
    return (
      <div className="accordion" id="mainAccordion">
        {props.todos.map((item, index) => (
          <ToDo updateTask = {props.updateTask} editTask={props.editTask} key={index} deleteTask={props.deleteTask} task={item} />
        ))}
      </div>
    );
  };

  export default ToDoList;