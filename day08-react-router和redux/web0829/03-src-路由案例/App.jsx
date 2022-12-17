import React, { Component } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import routes from './routes'
export default function App() {
  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            <Link className="list-group-item" to="/about">
              About
            </Link>
            <Link className="list-group-item" to="/home">
              Home
            </Link>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">{useRoutes(routes)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
