import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

export const UserContext = React.createContext();

const username = "Duncan";

ReactDOM.render(
  <UserContext.Provider value={username}>
    <App />
  </UserContext.Provider>,
  document.getElementById("root")
);

reportWebVitals();
