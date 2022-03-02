import React, { useState } from "react";
import ReactDOM from "react-dom";
// import React from "react";
// import ReactDOM, { unstable_renderSubtreeIntoContainer } from "react-dom";
import "./index.css";
import { App } from "./App";

// const myTextTest = (
//   <p>Ghbdtn</p>
//   <button onClick={clickText}>
//     Нажми на кнопку
//   </button>
// );

// const myTextClick = "Всем привет!!!";
// const clickText = () => {
//   console.log("клик!");
//   return (
//     <div>
//       <h1 className="App-header">{myTextClick}</h1>
//     </div>
//   );
// };
// const Message = () => {
//   return (<button onClick={clickText}>Нажми на кнопку</button>);
// };

const MessageList = ({ onClick }) => {
  console.log("ntcn");
  const [messages, sendMessages] = useState(["massage 1"]);
};

const sendMessage = (message) => {
  sendMessages([...messages, message]);
}
const UserText = () => {
  return (
    <div>
      <button onClick={() => sendMessage("Test")}>Отправить сообщение</button>
      <h2>message</h2>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <UserText />
    <App />
    <MessageList />
  </React.StrictMode>,
  document.getElementById("root")
);
