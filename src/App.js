import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Todo from "./Components/Todos";
import React, { useState, useEffect } from "react";
import Addtodo from "./Components/Addtodo";
import About from "./Components/About";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  let inittodo;

  if (localStorage.getItem("todo") === null) {
    inittodo = [];
  } else {
    inittodo = JSON.parse(localStorage.getItem("todo"));
  }

  const onDelete = (todo) => {
    console.log("i am on delete", todo);
    setTodo((prevTodo) => prevTodo.filter((item) => item !== todo));
    localStorage.setItem("todo", JSON.stringify(todo));
  };

  const addtodo = (title, desc) => {
    console.log("i am adding todo", title, desc);
    let sno;
    if (todo.length === 0) {
      sno = 0;
    } else {
      sno = todo[todo.length - 1].sno + 1;
    }
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodo([...todo, mytodo]);
    console.log(mytodo);
  };
  const [todo, setTodo] = useState(inittodo);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <BrowserRouter>
        <Header title="My Todos List" searchBar={false} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Addtodo addtodo={addtodo} />
                <Todo todo={todo} onDelete={onDelete} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;