import React from 'react'
//实现根据数据渲染出的一组表单组件
export default function withDataGroup(Comp){
  return class DataGroupWrapper extends React.Component {
    static defaultProps = {
      datas : []
    }
    static propTypes = {

    }
    render(){
      const comps = this.props.datas.map(it=><Comp key={it.value} {...this.props} info={it}/>)
      return(<>
        {comps}
      </>)
    }
  }
}