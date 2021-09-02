import React, { Component } from 'react'

export default class newLiftCycle extends Component {
  state = {
    n : 0
  }
  static getDerivedStateFromProps(props, state) {
    
  }
  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    
  }
  shouldComponentUpdate(nextProps, nextState) {
    
  }
  componentDidUpdate(prevProps, prevState,snap) {
    
  }
  
  
  
  render() {
    return (
      <div>
        <h1>{state.n}</h1>
        <button
          onClick={()=>{
            this.setState({
              n: this.state.n + 1
            })
          }}
        ></button>
      </div>
    )
  }
}
