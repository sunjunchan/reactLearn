import React, {useState, useCallback, useMemo} from 'react'
function Item(props){
  console.log("Item Render"+props.value)
  return <li>{props.value}</li>
}
class Text extends React.PureComponent {
  render(props) {
    console.log("test rander")
    return <div>
      <h1>{this.props.text}</h1>
      <button onClick={this.props.onClick}>改变文本</button>
    </div>
  }
}
// function handleClick(setTxt){
//   setTxt(Math.random());
// }
function Parent(){
  console.log("Parent Render");
  const [txt, setTxt] = useState("abc")
  const [n, setn] = useState(0)
  // const handleClick = useCallback(()=>{
  //   setTxt(txt+1)
  // },[txt])
  const handleClick = useMemo(() => {
    return()=>{
      setTxt(txt+1)
    }
  }, [txt])
  return (
    <div>
      {/*函数的地址每次渲染都发生了变化，导致了子组件跟着重新渲染，若子组件是经过优化的组件，则可能导致优化失效*/}
      <Text text={txt} onClick={handleClick} />
      <input type="number" value={n} onChange={e=>{
        setn(parseInt(e.target.value))
      }}/>
    </div>
  )
}
export default function CllbackApp() {
  const [range, ] = useState({min:1,max:10000})
  const [n, setN] = useState(0)
  const list = useMemo(()=>{
    const list = [];
    for (let i = range.min; i <= range.max; i++) {
      list.push(<Item key={i} value={i}></Item>)
    }
    return list
  },[range.min,range.max])
  return (
    <div>
      {/* <Parent/> */}
      <input type="number" value={n} onChange={e => {
        setN(parseInt(e.target.value))
      }} />
      <ul>{list}</ul>
    </div>
  )
}
