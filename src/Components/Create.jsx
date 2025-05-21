import React, { use } from 'react'
import { useState } from 'react'
import {nanoid} from 'nanoid'
import { useForm } from "react-hook-form"
import { toast} from 'react-toastify'

function Create(props) {
  const info = props.info 
  const setInfo = props.setInfo

  // const [task, setTask] = useState("")
const {register, handleSubmit, reset,formState:{errors}} = useForm()

  const createTodo = (data) => {
    data.id=nanoid()
    data.task=data.title
    data.status=false
    setInfo([...info, data])
    toast.success("Task created successfully");
    reset();
  }


  return (
    <div>
      <h1>Set the <span>Reminder</span> to-do</h1>
      <form onSubmit={handleSubmit(createTodo)}>
        <input type="text" placeholder="task" {...register("title", { required: "task cant be empty" })} />
        <span>{errors.title?.message}</span>
        <br />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default Create
