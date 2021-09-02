# Protals

插槽:将一个React元素，渲染到制定的dom容器中
ReactDom.createProtal(react元素，真实dom容器)，该函数返回一个React元素
**注意事件冒泡**
1. React中的事件是包装过的
2. 它的事件冒泡是根据虚拟DOM树来冒泡的，于真实的dom树无关

return ReactDOM.createPortal(<div className="child-a">
    <ChildB />
  </div>,document.querySelector(".modal"))