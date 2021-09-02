import {createStore,bindActionCreators} from "redux";
import * as actionType from "./action/action-type"
import * as numberActions from "./action/number-action"
import reducer from "./reducer/index"
// createStore:创建一个数据仓库
//假设仓库中仅存放一个数字，该数字的变化可能是＋1或-1
//约定action的格式：{type:"操作类型"，payload:附加数据}
/**
 * reducer本质上就是一个函数
 * @param state:之前仓库的状态
 * @param action:描述要作什么的对象
 */
// function reducer(state,action){
//   //返回一个新的状态
//   if (action.type === actionType.INCREASE){
//     return state + 1;
//   } else if (action.type === actionType.DECREASE){
//     return state - 1;
//   }
//   else if (action.type === actionType.SET) {
//     return action.payload;
//   }
//   return state;//如果是一个无效的操作类型，数据不变
// }
//reducer 数据默认值 仓库是一个对象
// const store = createStore(reducer, 10);
const store = createStore(reducer);
//第一个参数，是action创建函数合并的对象，第二个参数是仓库的dispatch
//得到一个新的对象，新对象中的属性名与第一个参数的属性名一致
// const bindActions = bindActionCreators(numberActions, store.dispatch);
// console.log(numberActions,bindActions)
class Action{
  constructor(type){
    this.type = type
  }
}
const action = {
  type: actionType.INCREASE
}
//得到一个increase action，并直接分发
// bindActions.getIncreaseAction();
store.dispatch(numberActions.getIncreaseAction());
console.log(store.getState())//得到仓库中当前的数据
// store.dispatch(action);//分发，向仓库分发action
store.dispatch(numberActions.getIncreaseAction())
store.dispatch(numberActions.getSetAction(2))
console.log(store.getState())