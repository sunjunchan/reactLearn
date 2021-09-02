# ref转发
forwardRef
用函数组件中的方法
1. 参数传递的是一个函数组件，不能是类组件，并且函数组件需要有第二个参数来得到ref
2. 返回一个新的组件
funtion A(props,ref){
  //最终ref在这
  return <h1 ref={ref}></h1>
}
const NewA = React.forwardRef(A)

const Aref = React.createRef()
<NewA ref={this.Aref}/>
类组件
class A extends React.Component{
  render(){
    return <h1 ref={this.props.ref1}>组件</h1>
  }
}
<NewA ref1={this.Aref}/>
用ref1命名，ref是特殊的属性
2. const NewA = React.forwardRef((props,ref)=>{
  return <A {...props} ref1={ref}>
})