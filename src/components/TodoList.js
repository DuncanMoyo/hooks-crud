import React, { useContext } from "react";
import TodoContext from "../Context";

const TodoList = () => {

  const {state, dispatch} = useContext(TodoContext)

  return (
    <div>
      <ul>
        {state.todos.map(({id, text}) => (
          <li key={id}>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default TodoList;
