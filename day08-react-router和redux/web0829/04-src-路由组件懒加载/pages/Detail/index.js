import React, { Component } from 'react'
import { useParams, useLocation } from 'react-router-dom'
console.log('detail组件加载了')
export default function Detail() {
  const { id } = useParams()
  // const {
  //   state: { name, info },
  // } = useLocation()
  const location = useLocation()
  console.log(location)
  return (
    <h5>
      detail的内容~~~{id}
      {/* 可选链 */}
      {location.state?.name},{location.state?.info}
    </h5>
  )
}
