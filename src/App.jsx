import React from 'react'
import Create from './Components/Create'
import Read from './Components/Read'
import { useState } from 'react'

const App = () => {

  const [task,setTask] = useState([
  ])
  return (
    <div className='bg-gray-700 h-screen flex  text-white'>
      <Create task={task} setTask={setTask} />
      <Read task={task} setTask={setTask} />
    </div>
  )
}

export default App

