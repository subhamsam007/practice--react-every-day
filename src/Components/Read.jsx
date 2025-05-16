import React from 'react'

const Read = (props) => {
  const info = props.info
  const setInfo = props.setInfo
  const btnstyle = {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer'
  }
  const deletetask = (id) => {
    const dedata = info.filter((task) => {
      return task.id !== id
    })
    setInfo(dedata)
  }
  const renderuserr = (info.map((task,index)=>{
    return ( 
        <li key={index}>{task.task} \\\\\\\\\\\\\\\\\ <button style={btnstyle} onClick={()=>deletetask(task.id)}>delete</button></li>
    );
  }) )
  return (
    <>
    <ol>
      {renderuserr}
    </ol>
    </>
  )
}
export default Read