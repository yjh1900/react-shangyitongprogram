import React, { useState, useEffect } from 'react'
import MouseUrl from '../assets/mouse.gif'
import usePosition from '../position'
export default function Mouse() {
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
  const { x, y } = usePosition()
  return (
    <div>
      <img
        src={MouseUrl}
        alt=""
        style={{ position: 'absolute', left: x, top: y, width: 100 }}
      />
    </div>
  )
}
