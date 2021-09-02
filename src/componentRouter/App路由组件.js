import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
// as 别名
// /a
function A(){
  return <h1>组件A</h1>
}
// /b
function B() {
  return <h1>
      组件B
    </h1>
}
// 任意路径
function C() {
  return <h1>
    <Route path="/abc" component={D} />
    找不到页面</h1>
}
function D() {
  return <span>组件D</span>
}
export default function App() {
  return (
    //主要的作用是提供一个上下文
    <Router>
      {/* sensitive={true} */}
      {/* <Switch> */}
        {/* <Route path="/a" exact sensitive component={A}>
          <h1 style={{color:"red"}}>必定会看到的内容</h1>
        </Route> */}
        {/* 加上switch,不默认渲染route里面的子组件 */}
        <Route path="/a" exact sensitive component={A}>
          {()=>{
            return <div>
              <h1 style={{ color: "red" }}>必定会看到的内容</h1>
            </div>
          }}
        </Route>
        <Route path="/a/c" component={B} />
        <Route component={C} />
      {/* </Switch> */}
    </Router>
  )
}
