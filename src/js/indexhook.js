import React from 'react';
import ReactDOM from 'react-dom';
import ReducerApp from '../componentHook/ReducerApp'
import CallBack from '../componentHook/MemoApp'
import RefApp from '../componentHook/RefApp'
import ImperativeHandleHook from '../componentHook/ImperativeHandleHook'
import Text from './componentHook/text.tsx'
ReactDOM.render(
  <Text count='sjc'/>,
  document.getElementById('root')
);