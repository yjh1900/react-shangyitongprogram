import React, { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    console.log('home挂载了')
    return () => {
      console.log('home卸载')
    }
  }, [])
  return <div>首页</div>
}
