import React from 'react'
import './app.css'
export default function App() {
  const data = [
    {
      content: "<div>跟进一条消息通知</div><p>您有一条线索即将要跟进，请及时跟进！</p><p>手机号：15313380281</p><p>倒计时：<span>10分钟</span></p><div id='customerManagement'>查看</div>",
      time: '1小时前'
    },
    {
      content: "<div>跟进一条消息通知2</div><p>您有一条线索即将要跟进，请及时跟进！</p><p>手机号：15313380281</p><p>倒计时：<span>10分钟</span></p><div id='customerManagement'>查看</div>",
      time: '1小时前'
    },
    {
      content: "<div>跟进一条消息通知3</div><p>您有一条线索即将要跟进，请及时跟进！</p><p>手机号：15313380281</p><p>倒计时：<span>10分钟</span></p><div id='customerManagement'>查看</div>",
      time: '1小时前'
    },
    {
      content: "<div>跟进一条消息通知4</div><p>您有一条线索即将要跟进，请及时跟进！</p><p>手机号：15313380281</p><p>倒计时：<span>10分钟</span></p><div id='customerManagement'>查看</div>",
      time: '1小时前'
    }
  ]
  function click(e){
    if (e.target.getAttribute("id") === "customerManagement"){
      console.log('查看');
    }
    if (e.target.getAttribute("class") === 'show'){
      e.target.classList.remove("show");
    }else{
      e.target.classList.add("show");
    }
  }
  let messageList = data.map((item,index) => {
    return (
      <div className="message" key={index}>
        <div onClick={click} className="messageList" dangerouslySetInnerHTML={{ __html: item.content }}>
        </div>
        <div className="time">
          {item.time}
        </div>
      </div>
    )
  })
  return (
    <div>
      {messageList}
    </div>
  )
}
