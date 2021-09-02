import React, { Component } from 'react'
// const ctx = React.createContext({
//   a: 0,
//   b: "abc"
// })
const ctx = React.createContext()
const ctx2 = React.createContext()
function ChildA(props){
  return(
    <ctx2.Provider value={{
      c: 122
    }}>
      <div>
        childa:
      <h2>
          <ctx.Consumer>
            {value => <>{value.a}</>
            }
          </ctx.Consumer>
        </h2>
        <ChildB />
      </div>
    </ctx2.Provider>
  )
}
class ChildB extends Component {
  static contextType = ctx
  render() {
    return (
      <div>
        childb:
        <h2>
          <ctx2.Consumer>
            {
              value=><>{value.c}</>
            }
          </ctx2.Consumer>
          <ctx.Consumer>
            {value => <>{value.a}</>
            }
          </ctx.Consumer>
        </h2>
      </div>
    )
  }
}
// class ChildB extends Component{
//   static contextType = ctx
//   render(){
//     return(
//       <div>
//         ChildB:{this.context.a}
//       </div>
//     )
//   }
// }
export default class NewCotext extends Component {
  state = {
    ctx:{
      a: 0,
      b: "abc",
      onChangeA: (newA) => {
        this.setState({
          a: newA
        })
      }
    }
  }
  render() {
    // 改变
    
    // const Provider = ctx.Provider;
    return (
      <ctx.Provider value={this.state.ctx}>
        <div>
          <ChildA/>
        </div>
      </ctx.Provider>
      // <Provider value={}>
      //   <div>

      //   </div>
      // </Provider>
    )
  }
}
