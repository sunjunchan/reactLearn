import React from 'react';
import ReactDOM from 'react-dom';
import TickControl from './component/TickControl'
// function handleClick(){
//   console.log('点击了@@！！')
// }
// const btn = <button onClick={handleClick}>点击</button>
// ReactDOM.render(
//   btn,
//   document.getElementById('root')
// );
// const btn = <button 
//   onClick={()=>{
//     console.log('点击了')
//   }}
//   onMouseEnter={(e)=>{
//     console.log(e,'鼠标移入')
//   }}
// >点击</button>
// ReactDOM.render(
//   btn,
//   document.getElementById('root')
// );
ReactDOM.render(<TickControl/>,document.getElementById("root"));