import React, { use } from 'react'
import { useState } from 'react'
import {nanoid} from 'nanoid'

function Create(props) {
  const info = props.info
  const setInfo = props.setInfo

  const [task, setTask] = useState("")

  const createTodo = (e) => {
    e.preventDefault()
    const newData = {
      id: nanoid(),
      task: task,
      completed: false
    }
    setInfo([...info, newData])
    setTask("")
  }


  return (
    <div>
      <form onSubmit={(e) => { createTodo(e) } }>
        <input type="text" placeholder='task' onChange={(e) => { setTask(e.target.value) } } value={task} />
        <br />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default Create
