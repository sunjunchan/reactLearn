const config = {
  user: {
    root: "/user",
    update: "/update",
    pay: {
      root:"/pay",
      after:"after",
      before: "before"
    }
  }
}
function _setConfig(config){
  setConfig(config,'')
}
/**
 * 将该对象每一个字符串属性，前面添加baseStr
 * 如果属性名为route,则直接添加baseStr
 * 如果属性名不是root，则添加baseStr/root属性值
 * 如果属性不是字符串，递归调用该方法
 */
function setConfig(obj,baseStr){
  const newBaseUrl = baseStr + (obj.root === undefined ? "" : obj.root)
  for(let prop in obj){
    const value = obj[prop];
    if(typeof value === "string"){
      if(prop === 'root'){
        obj[prop] = baseStr + value
      } else {
        obj[prop] = newBaseUrl
      }
    }else{
      _setConfig(obj[prop], newBaseUrl)
    }
  }
}
setConfig();
console.log(config);
export default config;
