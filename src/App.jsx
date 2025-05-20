import Create from './Components/Create'
import { useState } from 'react'
import Read from './Components/Read'

const App = () => {
  const [info, setInfo] = useState([
    // { id: 1, task: "Task 1", status: false },
    // { id: 2, task: "Task 2", status: false },
    // { id: 3, task: "Task 3", status: false },
    
  ])
  
  return (
    <div className="p-5 bg-black h-screen text-white">
      <h1>user  registration </h1>
      <hr />
      <br />
      <Create info={info} setInfo={setInfo} />
      <hr />
      <Read info={info} setInfo={setInfo} />
    </div>
  )
}

export default App
