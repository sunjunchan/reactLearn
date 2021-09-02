import React from 'react'
import {withRouter} from "react-router-dom"
function Link(props) {
  return (
    <a href={props.to} onClick={(e)=>{
      e.preventDefault();
      props.history.push(props.to)
    }}>{props.children}</a>
  )
}
export default withRouter(Link);