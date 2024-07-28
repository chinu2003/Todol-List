import React from "react";
import TodoItem from "../Components/TodoItem";

export default function Todo(props) {
  const myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  return (
    <div className="container" style={myStyle}>
      <h3 className=" my-3">Todos List</h3>
      {props.todo.length === 0
        ? "No Todos to Display"
        : props.todo.map((todo) => {
            return (
              
                <TodoItem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />
                
              
            );
          })}
    </div>
  );
}
