import React from 'react'
import { useTranslation } from 'react-i18next'
import { Space, Table, Tag, ConfigProvider } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { useAppDispatch, useAppSelector } from './hooks'
import { setLang } from './store'
// antd内置的中文语言包.包含了antd中所有组件的内置文本的中文
import zhCN from 'antd/es/locale/zh_CN'
// antd内置的英文语言包
import en_US from 'antd/es/locale/en_US'
// 日语
import ja_JP from 'antd/es/locale/ja_JP'
interface DataType {
  key: string
  name: string
  age: number
  address: string
  tags: string[]
}

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]
export default function App() {
  // 写'app'是去语言包中找app这个对象下面的属性
  const { t, i18n } = useTranslation(['app'])

  const lang = useAppSelector((state) => {
    return state.zs.lang
  })

  const dispatch = useAppDispatch()

  const columns: ColumnsType<DataType> = [
    {
      title: t('index'),

      render: (a, b, i) => i + 1,
    },
    {
      title: t('name'),
      dataIndex: 'name',
    },
  ]
  return (
    // ConfigProvider 是antd中提供的处理组件内置文本国际化的组件
    <ConfigProvider locale={lang === 'en' ? en_US : zhCN}>
      App
      <hr />
      <button
        onClick={() => {
          // 切换语言
          i18n.changeLanguage('zh')
          dispatch(setLang('zh'))
        }}
      >
        中文
      </button>
      <button
        onClick={() => {
          i18n.changeLanguage('en')
          dispatch(setLang('en'))
        }}
      >
        english
      </button>
      <p>{t('helo')}</p>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          total: 100,
          showSizeChanger: true,
          showQuickJumper: true,
        }}
      />
    </ConfigProvider>
  )
}
