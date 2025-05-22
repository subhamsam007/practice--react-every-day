import React from 'react'
import {toast} from 'react-toastify'

const Read = (props) => {
  const info = props.info
  const setInfo = props.setInfo

  const deletetask = (id) => {
    const dedata = info.filter((task) => {
      return task.id !== id
    })
    toast.error("Task deleted successfully");
    setInfo(dedata)
  }

  const renderuserr = info.map((task, index) => {
    return (
      <li className='border-2 mt-4  border-gray-500 rounded-lg h-20 w-full flex items-center justify-between ' key={index} >
        {task.task} 
        <button className='bg-red-500 text-white  w-[40%] rounded-lg px-2 py-2 ' onClick={() => deletetask(task.id)}>

          delete
        </button>
      </li>
    );
  })

  return (
    <div className='border-4 border-amber-300  w-[30%] mt-10 p-5  '>
      <h1 className='text-6xl text-pink-500 font-extralight '>Pendeing</h1>
      <br />
      <ul>
        {renderuserr}
      </ul>
    </div>
  )
}
export default Read
