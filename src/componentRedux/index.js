import {createStore} from "redux";
import reducer from "./reducer"
import {createAddUserAction} from "./action/usersAction"
const store = createStore(reducer);
console.log(store,'store');
console.log(store.getState());
const unListen = store.subscribe(()=>{
  console.log('状态改变了');
})
unListen(); //取消监听
store.dispatch(createAddUserAction({
  id: 3,
  name:"abc",
  age: 10
}));
console.log(store.getState());