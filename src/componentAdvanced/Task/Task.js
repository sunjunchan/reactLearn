import React,{PureComponent} from 'react'
import PropTypes from 'prop-types';
import './Task.css'
import {ObjectEqual} from '../../utils/helper'
function memo (FuncComp){
  return class Memo extends PureComponent {
    render(){
      return <FuncComp {...this.props}/>
    }
  }
}
function Task(props){
  Task.propTypes = {
    name: PropTypes.string.isRequired, //任务名称
    isFinish: PropTypes.bool.isRequired //任务是否完成
  }
  return (
      <div>
        <li className={props.isFinish?"finish":""}>{props.name}</li>
      </div>
    )
}
export default React.memo(Task)
// export default class Task extends PureComponent {
//   static propTypes = {
//     name: PropTypes.string.isRequired, //任务名称
//     isFinish: PropTypes.bool.isRequired //任务是否完成
//   }
//   // shouldComponentUpdate(nextProps, nextState) {
//   //   //在适当情况下，返回false
//   //   if (ObjectEqual(this.props, nextProps) && ObjectEqual(this.state,nextState)){
//   //     return false;
//   //   }else{
//   //     return true;
//   //   }
//   // }
  
//   render() {
//     return (
//       <div>
//         <li className={this.props.isFinish?"finish":""}>{this.props.name}</li>
//       </div>
//     )
//   }
// }
