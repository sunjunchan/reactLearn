import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
function User(props){
  console.log(props)
  return <div>
    <h1>user组件固定的区域</h1>
    <p>
      <Link to={`${props.match.url}/update`}>用户信息</Link>
      <Link to={`${props.match.url}/pay`}>充值</Link>
    </p>
    <div style={{
      width: 500,
      height: 500,
      background: "lightblue",
      border: "2px solid",
      margin: "0 auto"
    }}>
      <Route path={`${props.match.url}/update`} component={UserUpdate} />
      <Route path={`${props.match.url}/pay`} component={UserPay} />
    </div>
    {/* User组件变化的区域：根据地址的不同发生变化 */}
  </div>
}
function UserUpdate(){
  return <h1>修改用户信息</h1>
}
function UserPay(){
  return <h1>用户充值</h1>
}
export default function App() {
  return (
    <Router>
      <Route path="/user" component={User}></Route>
      {/* 其他组件 */}
    </Router>
  )
}
