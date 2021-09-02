import * as actionType from '../action/action-type'
//  * reducer本质上就是一个函数
//   * @param state: 之前仓库的状态
//     * @param action: 描述要作什么的对象
//       * /
export default function reducer(state = 10, action) {
  console.log("reducer运行了",state,action);
  switch (action.type){
    case actionType.INCREASE:
      return state + 1;
    case actionType.DECREASE:
      return state - 1;
    case actionType.SET:
      return action.payload;
    default:
      return state;
  }
  //返回一个新的状态
  // if (action.type === actionType.INCREASE) {
  //   return state + 1;
  // } else if (action.type === actionType.DECREASE) {
  //   return state - 1;
  // }
  // else if (action.type === actionType.SET) {
  //   return action.payload;
  // }
  // return state;//如果是一个无效的操作类型，数据不变
} 
//reducer 数据默认值 仓库是一个对象