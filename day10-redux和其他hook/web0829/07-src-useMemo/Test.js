import React, { useState, useMemo } from 'react'

export default function Test() {
  const [count, setCount] = useState(1)
  const [val, setValue] = useState('')

  // 这个expensive 是useMemo中传入函数的返回值(sum)
  const expensive = useMemo(
    function () {
      console.log('compute')
      let sum = 0
      for (let i = 0; i < count * 100; i++) {
        sum += i
      }
      return sum
    },
    [count]
  )

  return (
    <div>
      <h4>
        {count}-{val}-{expensive}
      </h4>
      <div>
        <button onClick={() => setCount(count + 1)}>+c1</button>
        <input value={val} onChange={(event) => setValue(event.target.value)} />
      </div>
    </div>
  )
}
