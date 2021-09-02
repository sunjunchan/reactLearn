import React from 'react'
interface IState {
	title: any
}
interface Iprops {
    count:any
}
let a = [1,2,3,4]
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray(4,a);

class Child extends React.PureComponent<Iprops, IState> {
	state = {
      title: '123'
	}
	render(){
        return <div>
          {this.state.title}
        	{this.props.count}
        </div>
    }
}

export default Child