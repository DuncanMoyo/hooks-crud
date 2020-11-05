import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import TodosContext from "./Context";
import todosReducer from "./Reducer";
import TodoList from "./components/TodoList";

const App = () => {
  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <TodosContext.Provider value={{state, dispatch}}>
      <TodoList  />
    </TodosContext.Provider>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals();
