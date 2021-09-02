import React,{useEffect,useState} from 'react'
/**
 * 一个可移动的块,该组件每次渲染完成后始终从0，0坐标在一秒钟内，移动到目标点坐标
 * @param {*} props
 * props.left,要移动到目标点横坐标
 * props.right，纵坐标
 */
var ref = React.createRef()
const txtx = React.createRef()
const txty = React.createRef()
let timer = null //计时器id
function stop(){
  clearInterval(timer)
}
function MovableBlock(props){
  console.log('渲染组件')
  useEffect(()=>{
    //渲染完成后
    // window.timer = null·
    const div = ref.current;
    let curTimers = 0;//当前移动的次数
    const disx = props.left / 100;//横坐标每次移动的距离
    const disy = props.right /100;
    timer = setInterval(()=>{
      curTimers ++;
      const newLeft = curTimers * disx;
      const newTop = curTimers * disy;
      div.style.left = newLeft + "px";
      div.style.top = newTop + 'px';
      if(curTimers === 100){
        stop()
      }
    },10)
    return ()=>{
      stop();//直接使用stop做清理函数，隐藏是清理timer，副作用操作
      console.log('清理函数')
    }
  }, [props.left, props.top])
  //跟之前的输入一样，不重新运行副作用操作
  return <div ref={ref} style={{
    width: 100,
    height: 100,
    position:"fixed",
    background:"#f40"
  }}></div>
}
export default function EffectHookApp() {
  const [n,setN] = useState(10)
  const [point,setPoint] = useState({x: 0,y:0})
  const [visible,setVisible] = useState(true)
  // 一下代码属于副作用
  // document.title = `计数器:${n}`
  //专门处理副作用
  useEffect(()=>{
    document.title = `计数器:${n}`
  },[])//空数组的目的，是让该副作用函数没有任何依赖性，从而仅在首次挂载时运行
  useEffect(()=>{
    // console.log("其他的副作用操作");
    if(n === 0){
      return;
    }
    setTimeout(() => {
      setN(n - 1)
    }, 1000);
  },[n])
  return (
    <div style={{
      paddingTop: 200
    }}>
      {
        visible && (
          <div>
            {/* x:<input type="number" value={point.x} onChange={(e) => {
              setPoint({
                ...point,
                x: e.target.value
              })
            }} />
            y:<input type="number" value={point.y} onChange={(e) => {
              setPoint({
                ...point,
                y: e.target.value
              })
            }} /> */}
            x: <input ref = {txtx} type="number"/>
            y: <input ref={txty} type="number"/>
            <button onClick={()=>{
              setPoint({
                x:parseInt(txtx.current.value),
                y:txty.current.value
              })
            }}>确定{n}</button>
            <MovableBlock left={point.x} right={point.y} />
          </div>
        )
      }
      <button onClick={
        ()=>{
          setVisible(!visible)
        }
      }>显示/隐藏</button>
      {/* <p>{n}</p>
      <button onClick={()=>{
        setN(n+1);
      }}>+</button> */}
    </div>
  )
}
