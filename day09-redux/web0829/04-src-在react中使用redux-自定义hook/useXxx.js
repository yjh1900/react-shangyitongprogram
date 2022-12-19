import { useState, useEffect } from 'react'
import store from './redux/store'
export default function useXxx() {
  const [a, setA] = useState(0)

  useEffect(() => {
    store.subscribe(() => {
      setA((a) => {
        return a + 1
      })
    })
  }, [])
}
