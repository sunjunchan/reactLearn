import React,{useRef, useState, useEffect} from 'react'
export default function RefApp() {
  const [n, setN] = useState(10)
  const nRef = useRef(n);//{current:10}
  // const inpRef = React.createRef();
  useEffect(()=>{
    const timer = setInterval(()=>{
      nRef.current --;
      setN(nRef.current);
      if(nRef.current === 0){
        clearInterval(timer);
      }
    },1000)
    return()=>{//卸载运行清理函数
      clearInterval(timer);
    }
  },[])
  const inpRef = useRef();
  return (
    <div>
      {n}
      {/* <input ref={inpRef} type="text"/>
      <button onClick={()=>{
        console.log(inpRef.current.value)
      }}>获取</button> */}
    </div>
  )
}
