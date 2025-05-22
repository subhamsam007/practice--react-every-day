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
    <div className='border-4 border-amber-300 w-[60%] mt-10 p-15 transition-all duration-500 ease-out' >
      <h1 className='text-4xl   text-white font-extralight mb-5'>Set the <span className='text-6xl text-red-500 '>Reminder's</span> what-to-do</h1>
      <form onSubmit={handleSubmit(createTodo)}>
        <input className=' w-full border-b-2 p-2 h-12 rounded-lg border-gray-900  outline-0 text-white focus:outline-none transition-opacity duration-500 ' type="text" placeholder="task" {...register("title", { required: "task cant be empty" })} />
        <br />
        <span className='text-red-500 font-light text-2xl'>{errors.title?.message}</span>
        <br />
        <br />
        <button type="submit" className='border-b-2 rounded-lg p-2 w-[30%] border-gray-900 text-2xl text-white font-light hover:bg-gray-500 active:scale-75 '>Create</button>
      </form>
    </div>
  )
}

export default Create
