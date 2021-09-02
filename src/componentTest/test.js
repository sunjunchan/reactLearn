import React from 'react'
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import { TreeSelect } from 'antd';
import $ from 'jquery';
import { red } from 'chalk';
const { SHOW_PARENT } = TreeSelect;

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];
$('.ant-select-tree').before($('.m-extra'));

class Demo extends React.Component {
  state = {
    value: ['0-0-0'],
  };

  onFocus = () => {
    const oDiv = document.createElement('div')
    oDiv.className = 'insert-tip'
    oDiv.innerText = '请选择查看成员'
    oDiv.style = 'color: red;'
    document.getElementsByClassName('ant-select-tree-list')[0].parentNode.prepend(oDiv)
  }

  onBlur = () => {
    const oDiv = document.getElementsByClassName('insert-tip')[0]
    document.getElementsByClassName('ant-select-tree-list')[0].parentNode.removeChild(oDiv)
  }

  onChange = value => {
    console.log('onChange ', value);
    this.setState({ value });
  };

  render() {
    const tProps = {
      treeData,
      value: this.state.value,
      onChange: this.onChange,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      placeholder: 'Please select',
      style: {
        width: '200px',
      },
    };
    return (
      <div>
        <TreeSelect {...tProps} onFocus={this.onFocus} onBlur={this.onBlur}/>
        {/* <div class="wrap-txt">
          请选择查看成员
        </div> */}
      </div>
    )
  }
}
export default Demo;