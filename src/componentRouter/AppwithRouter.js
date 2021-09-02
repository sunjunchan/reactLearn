import React from 'react'
import {BrowserRouter as Router,Route,Switch, withRouter} from "react-router-dom"
import qs from "query-string"
const Awrapper = withRouter(A);
function A(props){
  const q = qs.parse(props.location.hash)
  const p = qs.parse(props.location.search)
  console.log(q,p,props.match)
  return <div>
    组件A
      <p>{props.match.params.year}年{props.match.params.month}月{props.match.params.day}日</p>
      <p>访问地址:{props.location.pathname}</p>
      <button onClick={()=>{
        props.history.push("/b","状态数据");
      }}>跳转到/b</button>
    </div>
}
function B(props){
  return <div>
    组件B
      <p>获取状态数据:{props.history.location.state} {props.location.state}</p>
      <button onClick={() => {
      props.history.push("/a");
    }}>跳转到a</button>
  </div>
}
function NotFound(){
  return <h1>找不到页面</h1>
}
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/a/:year(\d+)?/:month?/:day?" exact component={A}></Route>
        <Route path="/b" component={B}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  )
}
