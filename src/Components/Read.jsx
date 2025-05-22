import React from 'react'

const Read = (props) => {
  const task = props.task
  const setTask = props.setTask

  const deleteTask = (data) => {
    const newTask = task.filter((abc) => abc.id !== data)
    setTask(newTask)
  }


  const renderUser = task.map((user,index) => {
    return (
      <li key={index}>
        {user.title}
        <br />
        <button onClick={() => deleteTask(user.id)}>Delete</button>
      </li>
    )
  })
  return (
    <div>
      <h3 className='text-4xl text-pink-500'>pending</h3>
      <ul>
        {renderUser}
      </ul>
    </div>
  )
}

export default Read
