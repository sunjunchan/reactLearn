import React, { Component } from 'react'
import TaskList from './TaskList'
import AddTask from './AddTask'
export default class TaskContainer extends Component {
  state = {
    tasks:[]
  }
  componentDidMount(){
    const ts = [];
    for(let i = 1;i<=10;i++){
      ts.push({
        name: `任务${i}`,
        isFinish: Math.random()>0.5
      })
    }
    this.setState({
      tasks: ts
    })
  }
  handleAdd = newTask=>{
    this.setState
      ({
        tasks: [...this.state.tasks, newTask]
      })
  }
  render() {
    return (
      <div>
        {/* <AddTask onAdd={newTask=>{
          this.setState
          ({
            tasks: [...this.state.tasks,newTask]
          })
        }}/>
        每次传递是一个新的函数 */}
        <AddTask onAdd={this.handleAdd} />
        <TaskList tasks={this.state.tasks}/>
      </div>
    )
  }
}
