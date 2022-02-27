import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";

const myTextTest = (
  <p>Ghbdtn</p>
  // <button onClick={clickText}>
  //   Нажми на кнопку
  // </button>
);
const myTextClick = "Всем привет!!!";
const clickText = () => {
  console.log("клик!");
  return (
    <div>
      <h1 className="App-header">{myTextClick}</h1>
    </div>
  );
};
const Message = () => {
  return (<button onClick={clickText}>Нажми на кнопку</button>);
};

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Message />
    
  </React.StrictMode>,
  document.getElementById("root")
);
