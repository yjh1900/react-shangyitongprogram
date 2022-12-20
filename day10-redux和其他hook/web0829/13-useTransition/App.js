import React, { useState, useTransition } from 'react'
import Card from './Card'
import Progress from './Progress'
export default function App() {
  const [keyWord, setKeyWord] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  // 调用 useTransition, 可以得到一个isPending和startTransition
  // isPending表示 非紧急渲染是否在等待中 是boolean值
  // startTransition中定义state update(更新状态)的代码
  const [isPending, startTransition] = useTransition()
  return (
    <div>
      请输入关键字:
      <input
        type="text"
        value={keyWord}
        onChange={(e) => {
          // react18 以前，所有的更新都是紧急的. 更新用户输入过程中，事件的触发频率非常高，会导致大量重新渲染，页面可能会出现卡顿
          setKeyWord(e.target.value.trim())

          //startTransition中定义state update代码
          startTransition(() => {
            setSearchQuery(e.target.value.trim())
          })
        }}
      />
      <hr />
      {isPending && <Progress />}
      <Card searchQuery={searchQuery}></Card>
    </div>
  )
}
