import React from 'react'
export default function withTest(Comp) {
  return class LogWrapper extends React.Component{
    rander(){
      return(
        <>
          <Comp {...this.props} />
        </>
      )
    }
  }
}

