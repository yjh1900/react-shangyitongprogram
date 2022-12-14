import React, { useState, useEffect } from 'react'
import CatUrl from '../assets/cat.gif'
import usePosition from '../position'
export default function Cat() {
  // let [x, setX] = useState(0)
  // let [y, setY] = useState(0)

  // function handleMove(e) {
  //   setX(e.clientX)
  //   setY(e.clientY)
  // }

  // useEffect(() => {
  //   window.addEventListener('mousemove', handleMove)
  //   return () => {
  //     window.removeEventListener('mousemove', this.handleMove)
  //   }
  // }, [])
  let { x, y } = usePosition()

  x += 200
  y += 50

  return (
    <div>
      <img
        src={CatUrl}
        alt=""
        style={{ position: 'absolute', left: x, top: y }}
      />
    </div>
  )
}
