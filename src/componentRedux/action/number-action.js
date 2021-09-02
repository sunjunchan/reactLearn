/**
 * 得到一个用于增加数字操作的action
 */
import * as actionType from "./action-type"
export function getIncreaseAction(){
  return {
    type: actionType.INCREASE
  }
}
export function getDecreaseAction(){
  return{
    type: actionType.DECREASE
  }
}
export function getSetAction(newNumber) {
  return {
    type: actionType.SET,
    payload: newNumber
  }
}