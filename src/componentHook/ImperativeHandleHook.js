import React, { useRef, useImperativeHandle} from 'react'
function Test(props,ref){
  useImperativeHandle(ref, ()=>{
    //如果不给依赖想，则每次运行函数组件，都会调用该方法
    //如果使用了依赖项，则第一次调用后，会进行缓存，只有依赖项发生变化时才会重新调用函数
    //该函数第一次加载组件后调用
    //相当于给ref.current = 1
    console.log('useImperativeHandle');
    return {
      method(){
        console.log('text')
      }
    }
  },[])
  return <h1 ref={ref}>Test Component</h1>
}
// class Test extends React.Component{
//   method(){
//     console.log("test")
//   }
//   render(){
//     return <h1>Test Component</h1>
//   }
// }
const Test2 = React.forwardRef(Test)//转发
export default function ImperativeHandleHook() {
  const testRef = useRef()
  return (
    <div>
      <Test2 ref={testRef}/>
      {/* <button onClick={()=>{
        testRef.current.method()
      }}>点击调用Test组件method方法</button> */}
      <button onClick={() => {
        testRef.current.method()
      }}>点击调用Test组件method方法</button>
    </div>
  )
}
