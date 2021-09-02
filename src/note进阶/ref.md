# ref
reference:引用
场景：希望直接使dom元素中的某个方法，或者希望直接使用自定义组件中的某个方法
this.refs.compa.change(); 调用A的方法
handleClick=()=>{
  this.refs.compa.change();
}
<A ref="compa"/>
<button onClick={this.handleClick}/>

1. ref作用于内置的html组件，得到的将是真实的dom对象
2. ref作用于类组件，得到的将是类的事例
3. ref不能作用于函数组件，函数组件里面可以使用

ref不在推荐使用字符串赋值，字符串赋值的方式将来可能会被移除，有效率不问题，不够灵活
目前，ref推荐使用对象，或者函数
**对象**
通过React.createRef函数创建
父：
constructor(props){
  super(props);
  this.txt = React.createRef();
}
this.txt.change()
子：
<A ref={this.txt}/>

**函数**
函数的调用时间：
1. componentDidMount的时候会调用该函数
  1. 在compnentDidMount事件中可以使用ref
2. 如果ref的值发生了变动（旧的函数被新的函数替代），分别调用旧的函数以及新的函数，时间点出现在componentDidMount之前
  1. 旧的函数被调用时，传递unll
  2. 新的函数被调用是，传递对象
3. 如果ref所在组件被卸载，会调用该函数
**谨慎使用ref**
能够使用属性和状态进行控制，就不要使用ref
1. 调用真实的Dom对象中的方法
2. 某个时候需要调用类组件方法
会调用两次
this.txt.change()
<A ref={(el)=>{
  this.txt = el;
}}/>
2.调用一次
getRef = el => {
  this.txt = el
}
ref={this.getRef}
//组件卸载调用一次