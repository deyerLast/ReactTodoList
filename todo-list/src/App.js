//import logo from './logo.svg';
import './App.css';
import data from "./data.json";
import React, { useState } from 'react';
//components
import Header from "./Header";
import ToDoList from "./ToDoList";


function App() {
    const [toDoList, setToDoList] = useState(data); //useState()

  return (
    <div className="App">
          <Header />
          <ToDoList toDoList={toDoList}/>
    </div>
  );
}

export default App;
