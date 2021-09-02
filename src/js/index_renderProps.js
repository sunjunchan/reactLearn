import React from 'react';
import ReactDOM from 'react-dom';
// import MovablePanel from './componentAdvanced/MovablePanel'
// import ShowMousePoint from './componentAdvanced/ShowMousePoint'
import MouseListener from './componentAdvanced/MouseListener'
import withMouseListener from './componentAdvanced/withMouseListener'
const renderPoint = mouse => <>横坐标: {mouse.x},纵坐标: {mouse.y}</>
function Point(props){
  return <>横坐标: {props.x},纵坐标: {props.y}</>
}
const MousePoint = withMouseListener(Point)
ReactDOM.render(
  <>
    {/* <MovablePanel />
    <ShowMousePoint/> */}
    <MouseListener render={renderPoint}>
      {/* {renderPoint} */}
    </MouseListener>
    <MousePoint/>
  </>
  ,
  document.getElementById('root')
);