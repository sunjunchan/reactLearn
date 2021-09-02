import React,{PureComponent} from 'react'
import './style.css'
export default function withMouseListener(Comp){
  return class MouseListener extends PureComponent {
    state = {
      x: 0,
      y: 0
    }

    divRef = React.createRef()
    handleMouseMove = e => {
      // 更新x,y的值
      console.log(e.pageX, e.pageY);
      const { left, top } = this.divRef.current.getBoundingClientRect();
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
          <Comp {...this.props} x={this.state.x} y={this.state.y}/>
        </div>
      )
    }
  }
}