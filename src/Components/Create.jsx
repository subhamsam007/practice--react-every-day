import React from "react";
import { useState } from "react";
import {nanoid} from "nanoid"




const Create =( props) =>{
  const task =  props.task
  const setTask = props.setTask
  const [info,setInfo] = useState("")   
  const submitHandeler = (e) =>{
    e.preventDefault()
    const data ={
      id:nanoid(),
      title:info,
      status: "false"
    }
    setTask([...task,data])
    setInfo("")
  }
  return(
    <div className=" w-[60%] m-10 p-10 rounded-2xl text-center">
    <h1 className="text-5xl font-semibold  tracking-wide">set the reminder what to do</h1>
    <form onSubmit={submitHandeler} className=""  >
      <input
      className="border-b-1 font-light text-3xl  border-black rounded-xl focus:outline-none  p-2 mt-10 w-full  mb-5 "
        type="text"
        placeholder="Enter your reminder"
        value={info}
        onChange={(e) => setInfo(e.target.value)}
      />
      <br />
      <div className="flex justify-start ">
         <button className="bg-gray-700 text-white px-4 py-2 border-b-2 border-gray-500 rounded-lg hover:bg-gray-500 hover:border-gray-700 transition duration-300 ease-in-out a active:bg-gray-800 active:scale-85">
          <span className="text-2xl font-light">Create</span>
         </button>
      </div>
    </form>
    </div>

  )
}

export default Create;