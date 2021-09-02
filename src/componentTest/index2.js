import React from 'react'
import { Badge, Table } from 'antd'
import { UserOutlined, SendOutlined, AppstoreOutlined } from '@ant-design/icons'

const iconMap = {
  0: <UserOutlined title="客户管理" />,
  1: <SendOutlined title="客户行为" />,
  2: <AppstoreOutlined title="项目管理" />,
}
const getIcon = category => iconMap[category]
const data = [
  {
    content: "你好， 孙隽婵转让给你一条线索，建议及时跟进客户。\n\r客户手机号：13051956039\n\r微信昵称：xxzx_4516334",
    time: '1小时前',
    id: 1
  },
  {
    content: "<div>跟进一条消息通知2</div><p>您有一条线索即将要跟进，请及时跟进！</p><p>手机号：15313380281</p><p>倒计时：<span>10分钟</span></p><div id='customerManagement'>查看</div>",
    time: '1小时前',
    id: 2
  },
  {
    content: "<div>跟进一条消息通知3</div><p>您有一条线索即将要跟进，请及时跟进！</p><p>手机号：15313380281</p><p>倒计时：<span>10分钟</span></p><div id='customerManagement'>查看</div>",
    time: '1小时前',
    id: 3
  },
  {
    content: "<div>跟进一条消息通知4</div><p>您有一条线索即将要跟进，请及时跟进！</p><p>手机号：15313380281</p><p>倒计时：<span>10分钟</span></p><div id='customerManagement'>查看</div>",
    time: '1小时前',
    id: 4
  }
]
const columns = [
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    width: 22,
    render: text => (text === 0 ? <Badge status="error" /> : ''),
  },
  {
    title: '图标',
    dataIndex: 'category',
    key: 'category',
    width: 30,
    render: text => getIcon(text),
  },
  {
    title: '内容',
    dataIndex: 'content',
    key: 'content',
    ellipsis: true,
  },
  {
    title: '时间',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
]
const NotificationContent = props => {
  const updateList = (current, size) => {
    props.onGetData({
      current,
      pageSize: size,
    })
  }
  const onRowClick = record => {
    props.onClickNotice({
      id: record.id,
    })
    record.status = 1
  }

  return (
    <Table
      rowKey={record => record.id}
      onRow={record => ({ onClick: () => onRowClick(record) })}
      dataSource={props.userNotice}
      pagination={{
        ...props.userNoticePagination,
        onChange: updateList,
      }}
      showHeader={false}
      columns={columns}
      scroll={{ x: 400 }}
    />
  )
}

export default NotificationContent
