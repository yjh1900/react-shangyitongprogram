import React, { useEffect } from 'react'
import ReactDOM from 'react-dom' //注意: Portal不需要再引入包的时候写/client
// export default function Test() {
//   //   return <div>Test</div>
//   return ReactDOM.createPortal(
//     <div>Test</div>,
//     document.getElementById('container')
//   )
// }
const container = document.createElement('div')
export default function Test() {
  useEffect(() => {
    document.getElementById('container').appendChild(container)
    return () => {
      document.getElementById('container').removeChild(container)
    }
  }, [])
  //   return <div>Test</div>
  return ReactDOM.createPortal(<div>Test</div>, container)
}
