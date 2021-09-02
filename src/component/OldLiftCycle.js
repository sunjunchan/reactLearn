import React, { Component } from 'react'

export default class OldLiftCycle extends Component {
  constructor(props){
    super(props)
    this.state = {
      n: 0
    };
    console.log("一个新的组件诞生了")
  }
  componentWillMount() {
    console.log("组件即将被挂载")
  }

  componentDidMount() {

  }
  shouldComponentUpdate(nextProps, nextState) {
    
  }
  
  componentWillReceiveProps(nextProps){}
  componentWillUpdate(nextProps, nextState) {}
  componentDidUpdate(prevProps, prevState) {
    
  }
  componentWillUnmount() {
    
  }
  
  
  
  render() {
    return (
      <div>
        旧版生命周期组件
      </div>
    )
  }
  
}
