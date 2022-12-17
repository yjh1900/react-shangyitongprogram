import React, { Component } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'

export default function Index() {
  const navigate = useNavigate()
  return (
    <div>
      <ul>
        <li>
          <Link to="/home/message/detail/1">message001</Link>
        </li>
        <li>
          <Link to="/home/message/detail">message002</Link>
        </li>
        <li>
          <Link to="/home/message/detail/3">message003</Link>
        </li>
      </ul>
      <button
        onClick={() => {
          navigate('/home/message/detail/4')
        }}
      >
        添加
      </button>
      <button
        onClick={() => {
          navigate('/home/message/detail/5', {
            replace: true,
            state: { name: '王阿姨', info: '烫卷发' },
          })
        }}
      >
        替换
      </button>
      <Outlet></Outlet>
    </div>
  )
}
