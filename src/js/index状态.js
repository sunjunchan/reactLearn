// import React from 'react';
// import ReactDOM from 'react-dom';
// ReactDOM.render(
//   <div>xxx</div>,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom';
import Tick from './component/Tick'
var num = 6;
ReactDOM.render((<Tick number={num}></Tick>),document.getElementById('root'));