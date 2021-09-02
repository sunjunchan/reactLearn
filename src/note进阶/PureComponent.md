# PureComponent
纯组件，用于避免不必要的渲染（运行render函数），从而提高效率

优化：如果一个组件的属性和状态都没有发生变化，该组件的渲染是没有必要的
pureComponent是一个组件，如果某一个组件继承自该组件，则该组件的shouldComponentUpdate会进行优化，对属性和状态进行浅比较，如果相等则不会重新渲染
import React, { PureComponent } from 'react'
export default class Task extends PureComponent

**注意**
1. PureComponent是浅比较
  1. 为了效率，应该尽量使用PureComponent
  2. 要求不要改动之前的状态，永远是创建新的状态，覆盖之前的状态(Immutable,不可变对象)
  3. 有一个第三方库，Immutable.js，它专门用于制作不可变对象
this.state.tasks.concat(newTask)
this.setState
  ({
    tasks: [...this.state.tasks, newTask]
  })
this.arr.push会出问题，地址没变，浅比较，不变
2. 函数组件，使用React.memo函数制作纯组件（高阶组件）
export default React.memo(Task)   Task.js