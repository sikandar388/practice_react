import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";


function App() {

  return (
    <>
      <h1 className="bg-green-500 p-4">Vite + React</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
