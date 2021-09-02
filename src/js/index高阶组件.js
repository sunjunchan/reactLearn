import React from 'react';
import ReactDOM from 'react-dom';
import FuncDefault from './componentAdvanced/FuncDefault'
import ClassDefault from './componentAdvanced/ClassDefault'
import ValidationComp from './componentAdvanced/ValidationComp'
import {A,B} from "./componentAdvanced/Comp"
import withLog from "./componentAdvanced/withTest"
import Test from "./component/Select/Test"
const ALog = withLog(A);
const BLog = withLog(B);
// export default function App(){
//   return (
//     <div>
//       <ALog/>
//       <BLog/>
//     </div>
//   )
// }
ReactDOM.render(
  <div>
    <Test/>
  </div>,
  document.getElementById('root')
);