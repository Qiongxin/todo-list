import React from 'react'
import "./Item.css"

function Item(props) {
  const {id, event, done, updateTodo, deleteTodo} = props

  //get check state and id from onchange event and pass them to App component using updateTodo function
  const handleChange = (event) => {
    updateTodo(event.target.checked, id)
  }

  //if user wants to delete, pass the id of specified todo into App component
  const handleDelete = () => {
    if (window.confirm("Are you sure to delete it?")) {
      deleteTodo(id)
    }
  }

  return (
    <div className="Item">
      <li>
        <label>
          <input type="checkbox" checked={done} onChange={handleChange}/>
          <span>{event}</span>
        </label>
        <button type="button" onClick={handleDelete}>Delete</button>
      </li>
    </div>
  )
}

export default Item