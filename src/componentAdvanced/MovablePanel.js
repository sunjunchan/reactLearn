import React, { PureComponent } from 'react'
import './style.css'
export default class MovablePanel extends PureComponent {
  state = {
    x: 0,
    y: 0
  }

  divRef = React.createRef()
  handleMouseMove = e => {
    // 更新x,y的值
    console.log(e.pageX,e.pageY);
    const {left,top} = this.divRef.current.getBoundingClientRect();
    const x = e.pageX - left
    const y = e.pageY - top
    this.setState({
      x: x,
      y: y
    })
  }
  render() {
    return (
      <div ref={this.divRef} className="point" onMouseMove={
        this.handleMouseMove
      }>
        <div style={{
          width: 100,
          height: 100,
          background: "#008c8c",
          position: "absolute",
          left: this.state.x,
          top: this.state.y
        }}>

        </div>
      </div>
    )
  }
}
