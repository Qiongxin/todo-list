import React from 'react'
import "./Footer.css"

function Footer(props) {
  const {todo, updateAll, clearAllDone} = props
  const finished = todo.reduce((pre, current)=> {return pre + (current.done ? 1 : 0)}, 0)
  const total = todo.length

  const handleAll = (event) => {
    updateAll(event.target.checked)
  }

  return (
    <div className="Footer">
      <label>
        <input type="checkbox" checked={finished === total && total !== 0 ? true : false} onChange={handleAll}/>
        <span>Finished: {finished} / Total: {total}</span>
      </label>
      <button type="button" onClick={clearAllDone}>Clear all finished todos</button>
    </div>
  )
}

export default Footer