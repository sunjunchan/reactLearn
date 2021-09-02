// import React from 'react'
// export default class MyFuncComp extends React.Component {}
import React,{Component} from 'react'
export default class MyFuncComp extends Component{
  constructor(props){
    super();
    console.log(props)
  }
  /**
   * 该方法必须返回React元素
   */
  render() {
    if(this.props.ui){
      return <div>
        {this.props.ui}
      </div>
    }
    if(this.props.obj){
      return <h1>{this.props.obj.name}</h1>
    }
    return <h1>类组件, 数字:{this.props.number}</h1>
  }
}