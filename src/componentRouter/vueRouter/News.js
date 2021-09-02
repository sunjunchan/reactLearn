import React from 'react'
import {Link} from 'react-router-dom'
export default function News() {
  return (
    <div>
      <h1>新闻页</h1>
      <nav>
        <Link to="">新闻首页</Link>
        <Link to="">新闻详情页</Link>
        <Link to="">新闻搜索页</Link>
      </nav>
      <div>
        {/* 匹配新闻页的值 */}
      </div>
    </div>
  )
}
