import React, { Component } from 'react'
import ReactDOM from "react-dom"
import ErrorBound from "./ErrorBound/index"
function getdatas(){
  return;
}
function ChildA(){
  throw new Error("xxxx")
  return ReactDOM.createPortal(<div className="child-a">
    <ChildB />
  </div>,document.querySelector(".modal"))
  return <div className="child-a">
    <ChildB/>
  </div>
}
function ChildB(){
  return <div className="child-b">xxx</div>
}
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <ErrorBound>
          <ChildA />
        </ErrorBound>
      </div>
    )
  }
}
