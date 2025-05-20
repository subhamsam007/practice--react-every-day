import React, { use } from 'react'
import { useState } from 'react'
import {nanoid} from 'nanoid'
import { useForm } from "react-hook-form"
import {ToastContainer, toast} from 'react-toastify'

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
    <div className='w-1/2 bg-indigo-300 h-screen text-2xl text-black p-5 border-4 ' >
      <ToastContainer position='top-center' autoClose={2000} />
      <h1>set the <span className='font-bold text-red-400 underline  decoration-black decoration-1 underline-offset-8'>the task u want </span> to-do</h1>
      <form onSubmit={handleSubmit(createTodo)} className='flex flex-col items-center justify-center mt-10'>
        <input type="text" placeholder='task' {...register("title",{required:"task cant be empty"})} />
        <span className='text-red-500'>{errors.title?.message}</span>
        <br />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default Create
