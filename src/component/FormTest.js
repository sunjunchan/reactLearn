import React, { Component } from 'react'

export default class FormTest extends Component {
  state = {
    loginId: "",
    loginPwd: "",
    sex: "male",
    chooseLovers: [],
    loves: [
      {
        value:"a",
        text:"一"
      },
      {
        value: "b",
        text: "二"
      },
      {
        value: "c",
        text: "三"
      }
    ],
    city: "-1"
  }
  handleChange = e =>{
    let val = e.target.value //读取表单的值
    let name = e.target.name //读取表单的name属性
    // const newPartialState = {};
    // newPartialState[name] = val
    if(e.target.type==='checkbox'){
      //对val进行特殊处理
      if(e.target.checked){
        val = [...this.state.chooseLovers,val];
      }else{
        val = this.state.chooseLovers.filter(it=>it!==val);
      }
    }
    this.setState({
      [name]:val
    })
  }
  //获取所以的爱好多选框
  getLoveCheckBoxs(){
    const bs = this.state.loves.map(it=>(
      <label key={it.value}>
        <input type="checkbox" name="chooseLovers"
        value={it.value}
        checked={this.state.chooseLovers.includes(it.value)}
        onChange={this.handleChange}/>
        {it.text}
      </label>
    ))
    return bs;
  }
  render() {
    const bs = this.getLoveCheckBoxs()
    return (
      <div>
        <div>
          loginId:
          <input type="text" name="loginId" value={this.state.loginId} onChange={this.handleChange}/>
        </div>
        <div>
          loginPwd:
          <input type="password" name="loginPwd" value={this.state.loginPwd} onChange={this.handleChange} />
        </div>
        <div>
          <select name="city" value={this.state.city} onChange={this.handleChange}>
            <option value="a">a</option>
            <option value="b">b</option>
          </select>
        </div>
        <div>
          <label>
            <input type="radio" name="sex" value="male" checked={this.state.sex === "male"} onChange={this.handleChange}/>男
          </label>
          <label>
            <input type="radio" name="sex" value="female" checked={this.state.sex === "female"} onChange={this.handleChange} />女
          </label>
        </div>
        <div>
          {bs}
        </div>
        <p>
          <button onClick={()=>{
            console.log(this.state)
          }}>获取表单数据</button>
        </p>
      </div>
    )
  }
}
