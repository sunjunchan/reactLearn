import React, { PureComponent } from 'react'
/**
 * 该组件用于监听鼠标的变化
 */
export default class MouseListener extends PureComponent {
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
        {/* {this.props.children(this.state)} */}
        {this.props.render?this.props.render(this.state):"默认值"}
      </div>
    )
  }
}
