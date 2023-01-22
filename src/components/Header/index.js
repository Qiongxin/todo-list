import React from 'react'
import "./Header.css"
import {nanoid} from 'nanoid'

function Header(props) {
  const {addTodo} = props

  //user press enter key which means user finished typing
  //enter space and empty is not allowed
  //record user input and pack as an object, pass to App component
  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      (event.target.value.trim() ? 
      addTodo({id: nanoid(), event: event.target.value, done: false}):
      alert("Please enter something!"))
      event.target.value = ''
    }
  }

  return (
    <div className="header">
      <input onKeyUp={handleKeyUp} type="text" placeholder='please enter your todos, and press enter'/>
    </div>
  )
}

export default Header