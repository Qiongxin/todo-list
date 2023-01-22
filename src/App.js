import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Lists from './components/Lists';

function App() {
  //set initial todo lists
  const [todo, setTodo] = useState([{id: "001", event: "Sleeping", done: true},
  {id: "002", event: "Eating", done: true}, {id: "003", event: "Coding", done: false}])

  //add new todo item into todo lists
  const addTodo = (newTodo) => {
    setTodo([newTodo, ...todo])
  }

  // update the done property of todos, get it from Item component
  const updateTodo = (done, id) => {
    const newTodo = todo.map(item => {
      if (item.id === id) {
        return {...item, done}
      } else {
        return item
      }
    })
    setTodo(newTodo)
  }

  //delete specified todo
  const deleteTodo = (id) => {
    const newTodo = todo.filter(item => {
      return item.id !== id
    })
    setTodo(newTodo)
  }

  const updateAll = (done) => {
    const newTodo = todo.map(item => ({...item, done}))
    setTodo(newTodo)
  }

  const clearAllDone = () => {
    const newTodo = todo.filter(item => {return !item.done})
    setTodo(newTodo)
  }

  return (
    <div className="App">
      <div className="main">
        <Header addTodo={addTodo}/>
        <Lists todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
        <Footer todo={todo} updateAll={updateAll} clearAllDone={clearAllDone}/>
      </div>
    </div>
  );
}

export default App;
