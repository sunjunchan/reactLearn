// import {useState} from 'react'
// import useReducer from './useReducer/useReducer'
import React,{useReducer} from 'react'
/**
 * 该函数，根据当前的数据，以及action，生成一个新的数据
 * @returns 
 */
function reducer(state,action){
  switch(action.type){
    //增加
    case "increase":
      if (state === 0) {
        return 0;
      }
      return state - 1;
    case "decrease":
        return state + 1;
    default:
      return state;
  }
}
/**
 * 自定义HOOK，用于抽离数据处理
 * @returns 
 */
// function useReducer(){
//   const [n, setN] = useState(0)
//   function dispatch(action) {
//     const newN = reducer(n, action)
//     console.log(`日志：n的值${n}->${newN}`)
//     setN(newN);
//   }
//   return [n,dispatch];
// }
//第三个参数返回值作为初始值，第二个参数可以作为参数传入到点个参数中
export default function ReducerApp() {
  const [n,dispatch] = useReducer(reducer, 0 ,(args)=>{
    return 100
  })
  return (
    <div>
      <button onClick={()=>{dispatch({type:'increase'})}}>-</button>
      <span>{n}</span>
      <button onClick={()=>{dispatch({type:'decrease'})}}>+</button>
    </div>
  )
}
