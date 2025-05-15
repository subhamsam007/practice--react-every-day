import React from 'react'

const Read = (props) => {
  const info = props.info
  const setInfo = props.setInfo
  const renderuserr = (info.map((task,index)=>{
    return ( 
        <li key={index}>{task.task}</li>
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