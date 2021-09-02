import React, { useState,useEffect} from 'react'
let n = 1
function func1(){
  console.log('odd副作用函数1')
  return ()=>{
    console.log('odd清理函数')
  }
}
function func2() {
  console.log('even副作用函数1')
  return () => {
    console.log('even清理函数')
  }
}
export default function App(props) {
  const [,forceUpdate] = useState({})
  useEffect(n%2===0?func2:func1)//不稳定副作用
  //参数不填，默认undefind
  const arr = useState(0); //使用一个状态，该状态的认值是0
  // const n = arr[0]
  // const setN = arr[1]
  const [n,setN] = useState(0) //解构
  const [visible,setVisible] = useState(true)
  return (
    <div>
      <p style={{display: visible?"block":"none"}}>
        <button onClick={() => {
          setN(n - 1)
        }}>-</button>
        <span>{n}</span>
        <button onClick={() => {
          setN(n + 1)
        }}>+</button>
      </p>
      <button onClick={()=>{
        setVisible(!visible)
      }}>显示/隐藏</button>
    </div>
  )
}
