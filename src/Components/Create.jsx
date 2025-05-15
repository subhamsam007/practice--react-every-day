import React, { use } from 'react'
import { useState } from 'react'

const Create = (props) => {
  const  info = props.info
  const setInfo = props.setInfo

  const [task, setTask] = useState("")
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        const newData = {
          // id: Math.floor(Math.random() * 1000),
          task: task,
          status: false
        }
        // let copyTodo=[...task]
        // copyTodo.push(newData)
        // setTask(copyTodo)
        setInfo([...info, newData])
        setTask("")
      }}>
        <input type="text" placeholder='task' onChange={(e)=>{setTask(e.target.value)}} value={task} />
        <br />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default Create
