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
    <div className='w-1/2 bg-indigo-300 h-screen text-2xl text-black p-5 border-4 ' >
      <h1>set the <span className='font-bold text-red-400 underline  decoration-black decoration-1 underline-offset-8'>the task u want </span> to-do</h1>
      <form onSubmit={(e) => { createTodo(e) } } className='flex flex-col items-center justify-center mt-10'>
        <input type="text" placeholder='task' onChange={(e) => { setTask(e.target.value) } } value={task} />
        <br />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default Create
