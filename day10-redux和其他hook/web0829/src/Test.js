import React from 'react'

function Test(props) {
  console.log('test更新了')
  return <div>Test,{props.count}</div>
}

export default React.memo(Test)
