import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import Loading from './components/loading'
ReactDOM.render(
  <BrowserRouter>
    {/* Suspense写在哪里,正在加载的效果就渲染在哪里 */}
    {/* <Suspense fallback={<Loading></Loading>}> */}
    <App />
    {/* </Suspense> */}
  </BrowserRouter>,
  document.getElementById('root')
)
