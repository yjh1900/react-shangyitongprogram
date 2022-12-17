import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Index() {
  const navigate = useNavigate()
  return (
    <>
      <h1>您要查看的页面不存在</h1>
      <button
        onClick={() => {
          navigate('/home')
        }}
      >
        回到首页
      </button>
    </>
  )
}
