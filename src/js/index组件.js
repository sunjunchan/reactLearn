import React from 'react';
import ReactDOM from 'react-dom';
import MyFuncComp from './component/MyFuncComp'
import MyClassComp from './component/MyClassComp'
// function MyFuncComp() {
//   return <h1>组件内容</h1>
// }
// const comp = <MyFuncComp/> //使用组件生成的仍然是一个React元素，变化的，只是type值
ReactDOM.render(
  <div>
    {/* 第一种用法 不使用，不形成组件结构*/}
    {/* {MyFuncComp()} */}
    <MyFuncComp number="2"/>
    <MyFuncComp number={5}/>
    {/* {comp} */}
    {/* ennable={true} */}
    <MyClassComp 
      obj={{
        name: "sjc"
      }}
      ui={<h1>h1....</h1>}
    /> 
    <MyClassComp number={5}/>
  </div>,
  document.getElementById('root')
);