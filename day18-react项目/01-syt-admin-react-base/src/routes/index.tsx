// src/routes/index.tsx
import React, { lazy, Suspense, FC } from 'react'
import { useRoutes } from 'react-router-dom'
import { HomeOutlined, ShopOutlined } from '@ant-design/icons'
import type { XRoutes } from './types'

import {
  Layout,
  EmptyLayout,
  // CompLayout
} from '../layouts'
import Loading from '@comps/Loading'
import Redirect from '@comps/Redirect'

const Login = lazy(() => import('@pages/login'))
const Dashboard = lazy(() => import('@pages/dashboard'))
const NotFound = lazy(() => import('@pages/404'))
const hospitalSet = lazy(() => import('@pages/hospital/hospitalSet'))
const AddOrUpdateHospitalSet = lazy(
  () => import('@pages/hospital/hospitalSet/components/AddOrUpdateHospitalSet')
)
const hospitalList = lazy(() => import('@pages/hospital/hospitalList'))
const HospitalShow = lazy(
  () => import('@pages/hospital/hospitalList/components/HospitalShow')
)
const HospitalSchedule = lazy(
  () => import('@pages/hospital/hospitalList/components/HospitalSchedule')
)

const load = (Comp: FC) => {
  return (
    // 因为路由懒加载，组件需要一段网络请求时间才能加载并渲染
    // 在组件还未渲染时，fallback就生效，来渲染一个加载进度条效果
    // 当组件渲染完成时，fallback就失效了
    <Suspense fallback={<Loading />}>
      {/* 所有lazy的组件必须包裹Suspense组件，才能实现功能 */}
      <Comp />
    </Suspense>
  )
}

// 路由表
// 注意: 当前路由表有两个作用:
// 1. 路由表本身的作用就是和useRoutes配合使用,然后动态的生成路由规则.从而让路径变化的时候,展示对应的路由组件
// 2. 我们项目之前的作者,自己又用这个路由表,去动态的创建左侧导航的按钮./syt下面有几个子级路由,则左侧导航有几个导航按钮
const routes: XRoutes = [
  {
    path: '/',
    element: <EmptyLayout />,
    children: [
      {
        path: 'login',
        element: load(Login),
      },
    ],
  },
  {
    path: '/syt',
    element: <Layout />,
    children: [
      {
        path: '/syt/dashboard',
        // meta是作者自定义一个配置项,主要和左侧导航配合使用.定义了左侧导航按钮的图标和文本
        meta: { icon: <HomeOutlined />, title: '首页' },
        // load函数给当前组件包裹一个Suspense
        element: load(Dashboard),
      },
      {
        path: '/syt/hospital',
        // meta是作者自定义一个配置项,主要和左侧导航配合使用.定义了左侧导航按钮的图标和文本
        meta: { icon: <ShopOutlined />, title: '医院管理' },
        // // load函数给当前组件包裹一个Suspense
        // element: load(Dashboard),
        children: [
          {
            path: '/syt/hospital/hospitalSet',
            meta: { title: '医院设置' },
            element: load(hospitalSet),
          },
          {
            path: '/syt/hospital/hospitalSet/add',
            meta: { title: '添加医院' },
            element: load(AddOrUpdateHospitalSet),
            hidden: true, // 表示这个路由不再左侧导航中生成按钮
          },
          {
            path: '/syt/hospital/hospitalSet/edit',
            meta: { title: '修改医院' },
            element: load(AddOrUpdateHospitalSet),
            hidden: true, // 表示这个路由不再左侧导航中生成按钮
          },
          {
            path: '/syt/hospital/hospitalList',
            meta: { title: '医院列表' },
            element: load(hospitalList),
          },
          {
            path: '/syt/hospital/hospitalList/show/:id',
            meta: { title: '医院详情' },
            element: load(HospitalShow),
            hidden: true, // 表示这个路由不再左侧导航中生成按钮
          },
          {
            path: '/syt/hospital/hospitalList/schedule/:hoscode',
            meta: { title: '医院排班' },
            element: load(HospitalSchedule),
            hidden: true, // 表示这个路由不再左侧导航中生成按钮
          },
        ],
      },
    ],
  },

  {
    path: '/404',
    element: load(NotFound),
  },
  {
    path: '*',
    element: <Redirect to="/404" />,
  },
]

// 渲染路由
// 注意：首字母必须大写
export const RenderRoutes = () => {
  // react-router-dom的新增语法。不用自己遍历了，它帮我们遍历生成
  return useRoutes(routes)
}

// 找到要渲染成左侧菜单的路由
export const findSideBarRoutes = () => {
  const currentIndex = routes.findIndex((route) => route.path === '/syt')
  return routes[currentIndex].children as XRoutes
}

export default routes
