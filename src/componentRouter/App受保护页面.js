import React from 'react'
import {BrowserRouter as Router, Route,Switch,Link} from "react-router-dom"
import Home from './Login/Home'
import Login from './Login/Login'
import Personal from './Login/Personal'
import ProtectedRoute from './Login/ProtectedRoute'
function NoPage(){
  return <h1>404</h1>
}
export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/login">登陆页</Link></li>
          <li><Link to="/personal">个人中心</Link></li>
        </ul>
        <div>
          <Switch>
            <Route path="/login" exact component={Login}/>
            <ProtectedRoute path="/Personal" exact component={Personal} />
          {/* render和children的区别：render是匹配后才运行，children无论是否匹配，都会运行 ，参数，上下文*/}
            <Route path="/" exact component={Home} />
            <Route component={NoPage} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}
