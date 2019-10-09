import React from "react";
import ReactDOM from "react-dom";
import Timer from "./components/Pomodoro/Timer";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Pomodoro</h1>
      <Timer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
