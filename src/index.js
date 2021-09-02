import React from 'react';
import ReactDOM from 'react-dom';
import App from './componentTest/test2'
import './componentRedux'
import moment from 'moment'
import 'moment/locale/zh-cn'
// 今天: [moment(), moment()],
// 昨天: [
//   moment().subtract(1, 'days'),
//   moment().subtract(1, 'days'),
// ],
// 本周: [moment().startOf('week'), moment().endOf('week')],
// 上周: [moment().subtract(1, 'week'), moment().subtract('week')],
// 本月: [moment().startOf(1, 'month'), moment().endOf('month')],
// 上月: [moment().subtract(1, 'month'), moment().subtract('month')],
console.log('今天:', [moment(), moment()])
console.log('昨天:', [moment().subtract(1, 'days'),moment().subtract(1, 'days'),])
console.log('本周:', [moment().startOf('week'), moment().endOf('week')])
ReactDOM.render(
  <App></App>,
  document.getElementById('root')
);