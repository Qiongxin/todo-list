import React from 'react'
import Item from '../Item'
import "./Lists.css"

function Lists(props) {
  const {todo, updateTodo, deleteTodo} = props
  return (
    <div className="Lists">
      <ul>
        {todo.map( item => <Item key={item.id} {...item} updateTodo={updateTodo} deleteTodo={deleteTodo}/>)}
      </ul>
    </div>
  )
}

export default Lists