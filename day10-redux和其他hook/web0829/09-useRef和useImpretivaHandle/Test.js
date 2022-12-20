import React, { useRef, useImperativeHandle } from 'react'
function Test(props, appRef) {
  const testRef = useRef()
  // useImperativeHandle可以自定义ref对象current属性值
  useImperativeHandle(appRef, () => {
    // 这个回调中返回值是什么,则appRef.current的值就是什么
    return {
      xxx() {
        //让input获取焦点
        testRef.current.focus()
      },
    }
  })
  return (
    <>
      <input type="text" ref={testRef} />
    </>
  )
}
export default React.forwardRef(Test)
