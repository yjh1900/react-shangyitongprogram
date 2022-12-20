import React, { useContext } from 'react'
import testContext from './context'
export default function Test() {
  const result = useContext(testContext)
  console.log(result)
  return <div>Test</div>
}
