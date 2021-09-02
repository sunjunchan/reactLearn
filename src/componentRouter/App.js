import React from 'react'
import {Link,BrowserRouter as Router} from 'react-router-dom'
export default function App() {
  return (
    <Router>
      <nav>
        <Link>首页</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link>新闻页</Link>
      </nav>
    </Router>
  )
}
