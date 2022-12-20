import React from 'react'
import data from './data.json' // data.json中存储了很多github用户信息
export default function Card({ searchQuery }) {
  const filterData = data.filter((item) => {
    return item.login.includes(searchQuery)
  })
  return (
    <div className="row">
      {filterData.map((item) => {
        return (
          <div className="card" key={item.id}>
            <a target="_blank">
              <img src={item.avatar_url} style={{ width: '100px' }} />
            </a>
            <p className="card-text">{item.login}</p>
          </div>
        )
      })}
    </div>
  )
}
