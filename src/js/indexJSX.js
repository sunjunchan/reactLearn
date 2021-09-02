/**
 * JSX
 */
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
// React.createElement
const h1 = (
  // 真实语法 <React.Fragment></React.Fragment>
  <>
    <h1>hello world</h1>
    <p>as</p>
  </>
)
const a = 1234, b = 4321
// 不能放置普通对象
const arr = [1,2,3,null,undefined,false]
const number = new Array(3)
number.fill(0);
var lis = number.map((item,i) => (<li key={i}>{i}</li>))
const obj = <span>这是一个元素对象</span>
const cls = "header"
const content = "<h1>xxx</h1>"
const div = (
  // 对应dom
  // {}外层jsx表达式，内层对象
    // dangerouslySetInnerHTML={{
    //   __html: content
    // }}
  <div
    className={cls} style={{
    padding: "20px"
  }}>
    {/**
     * 注释
     */}
    {a} * {b} = {a * b}
    {/**
     * 不能放置普通对象
     */}
    {obj}
    {/**
     * 遍历数组，将数组每一个子元素加进来
     */}
    {arr}
    {lis}
    {content}
  </div>
)
// 原理：`${a} * ${b} = ${a*b}`
ReactDOM.render(
  div,
  document.getElementById('root')
);