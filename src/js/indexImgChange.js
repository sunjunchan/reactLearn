import React from 'react';
import ReactDOM from 'react-dom';
import img1 from './assets/1.jpeg'
import img2 from './assets/2.jpeg'
import img3 from './assets/3.jpeg'
import "./index.css"
const srcs = [img1, img2, img3];//保存图片路径的数组
let index = 0; //显示的图片索引
// 原理：`${a} * ${b} = ${a*b}`
const container = document.getElementById('root')
function render(){
  ReactDOM.render(
    (<img src={srcs[index]} alt="" />),
    container
  );
}
let timer;
/**
 * 启动计时器，每隔一段时间切换图片
 */
function start(){
  clearInterval(timer);
  timer = setInterval(()=>{
    console.log(index);
    index = (index + 1) % 3;
    render();
  },2000);
}
function stop(){
  clearInterval(timer);
}
render();
start();
container.onmouseenter = function(){
  stop()
}
container.onmouseleave = function(){
  start()
}