import React from 'react'

export default function FuncDefault(props) {
  return (
    <div>
      a:{props.a},
      b:{props.b},
      c:{props.c}
    </div>
  )
}
//属性默认值
FuncDefault.defaultProps = {
  a: 1,
  b: 2
}