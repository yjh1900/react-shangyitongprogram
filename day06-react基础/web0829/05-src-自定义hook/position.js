import { useState, useEffect } from 'react'
export default function usePosition() {
  let [x, setX] = useState(0)
  let [y, setY] = useState(0)

  function handleMove(e) {
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMove)
    return () => {
      window.removeEventListener('mousemove', this.handleMove)
    }
  }, [])

  return { x, y }
}
