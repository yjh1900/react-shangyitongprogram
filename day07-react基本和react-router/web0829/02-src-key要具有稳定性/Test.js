import React, { useState } from 'react'

export default function Test() {
  const [list, setList] = useState(['a', 'b', 'c'])
  return (
    <>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <input type="text" />
            </li>
          )
        })}
      </ul>
      <button
        onClick={() => {
          const newList = [...list]
          newList.push('d')
          setList(newList)
        }}
      >
        按钮
      </button>
    </>
  )
}
