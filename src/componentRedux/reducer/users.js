import * as usersAction from "../action/usersAction"
const initialState = [
  {id:1,name:'用户1',age:11},
  { id: 2, name: '用户2', age: 12 }
]

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case usersAction.ADDUSER:
    return [ ...state, payload ]
  case usersAction.DELETEUSER:
    return state.filter(it => it.id !== payload);
  case usersAction.UPDATEUSER:
    return state.map(it=>it.id===payload ? {...it, ...payload} : it);
  default:
    return state
  }
}
