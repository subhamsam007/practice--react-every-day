import React from 'react'

const Read = (props) => {
  const info = props.info
  const setInfo = props.setInfo

  const deletetask = (id) => {
    const dedata = info.filter((task) => {
      return task.id !== id
    })
    setInfo(dedata)
  }

  const renderuserr = info.map((task, index) => {
    return (
      <li key={index}>
        {task.task}
        <button onClick={() => deletetask(task.id)}>
          delete
        </button>
      </li>
    );
  })

  return (
    <div>
      <ul>
        {renderuserr}
      </ul>
    </div>
  )
}
export default Read
