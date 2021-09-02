import React from 'react'
import useAllStudents from './UseAllStudents'
function Test(){
  const stus = useAllStudents()
  const list = stus.map((it,index)=><li key={index}>{it.name}</li>)
  return <ul>
    {list}
  </ul>
}
export default function App() {
  return (
    <div>
      <Test/>
    </div>
  )
}
