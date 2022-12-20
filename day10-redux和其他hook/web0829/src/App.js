import React, { useState, useTransition, useDeferredValue } from 'react'
import Card from './Card'
import Progress from './Progress'
export default function App() {
  const [keyWord, setKeyWord] = useState('')
  // 作用:根据一个已有的状态值,生成一个延迟的状态值
  const deferKeyWord = useDeferredValue(keyWord)

  return (
    <div>
      请输入关键字:
      <input
        type="text"
        value={keyWord}
        onChange={(e) => {
          // react18 以前，所有的更新都是紧急的. 更新用户输入过程中，事件的触发频率非常高，会导致大量重新渲染，页面可能会出现卡顿
          setKeyWord(e.target.value.trim())
        }}
      />
      <hr />
      <Card searchQuery={deferKeyWord}></Card>
    </div>
  )
}
