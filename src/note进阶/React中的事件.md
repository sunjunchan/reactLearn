# React中的事件

这里的事件：React内置的DOM组件中的事件
React.createElement("header")
1. 给document注册事件
2. 几乎所有的元素事件处理，均在document的事件中处理
  1. 一些不冒泡的事件是在元素上监听
  2. 一些document没有的事件，是在元素上监听的
3. 在document的事件处理中，React会根据实际的虚拟DOM树的完成事件函数的调用
4. React的事件参数，并非真实的DOM事件参数，是React合成的一个对象，该对象类似于真实的DOM的事件参数
  1. stopPropagation, 阻止事件在虚拟dom中的冒泡
  2. nativeEvent,可以得到真实的DOM事件对象 
    1. e.nativeEvent.stopImmediatePropagation(),阻止剩余的事件处理程序运行
  3. 为了提高执行效率，React使用事件对象池来处理事件

**注意事项**
1. 如果给真实的DOM注册事件，阻止了事件冒泡，则会导致react的相应事件无法触发
2. 如果给真实的DOM注册事件，事件会先于React事件运行
3. 通过React的事件中阻止事件冒泡，无法阻止真实的DOM事件冒泡
4. 可以通过e.nativeEvent.stopImmediatePropagation(),阻止剩余的事件处理程序运行
5. 如果在事件处理程序中，不要异步的使用事件对象（由于对象事件池，事件会被重用），如果一定要使用，需要调用e.persist函数，持久保存
