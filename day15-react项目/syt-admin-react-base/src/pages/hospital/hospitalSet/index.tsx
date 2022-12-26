import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Space, Card, Table, Tooltip } from 'antd'
import { SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
// 这是ts中内置的和表格相关的一个ts类型
import type { ColumnsType } from 'antd/es/table'

import { reqGetHospitalSets } from '@api/hospital/hospitalSet'
import {
  IhospitalSets,
  IhospitalSet,
} from '@api/hospital/hospitalSet/model/hospitalSetTypes'

// const columns: ColumnsType<DataType> = [
//   {
//     title: 'Name', // 决定了表头要展示的信息
//     // 如果我们既写了dataIndex,又写了render.则dataIndex的值决定了render函数第一次参数接收到什么数据.比如此时写了name,则render函数中第一个参数就是每一个data数组中对象的name属性的值
//     // 如果我们不写dataIndex,则render函数中第一个参数,就是data中的每一个数据对象
//     dataIndex: 'address',
//     key: 'name',
//     // 1. 如果写了render属性,则这一列到底要展示什么数据,有render函数的返回值决定
//     // 2. 如果不写render,只写了dataIndex,则这一列到底展示什么数据,有dataIndex的值决定.dataIndex的值应该是data数据中每一个对象的属性
//     // render: (text, record, index) => {
//     //   // text 收到了dataIndex的影响
//     //   // record一定是data数组中的每一个数据对象
//     //   // index 一定是data数组中的每一个数据对象的下标
//     //   console.log(text, record, index)
//     //   return 1
//     // },
//   },

// ]

// 注意:  ColumnsType<泛型> 这个泛型是要展示的数据数组中的对象的ts类型
const columns: ColumnsType<IhospitalSet> = [
  {
    title: '序号',
    render(a, b, index) {
      return index + 1
    },
    width: 80,
    align: 'center', //让这一列的内容水平居中
  },
  {
    title: '医院名称',
    dataIndex: 'hosname',
  },
  {
    title: '医院编码',
    dataIndex: 'hoscode',
  },
  {
    title: 'api基础路径',
    dataIndex: 'apiUrl',
  },
  {
    title: '签名',
    dataIndex: 'signKey',
  },
  {
    title: '联系人名称',
    dataIndex: 'contactsName',
  },
  {
    title: '联系人手机号',
    dataIndex: 'contactsPhone',
  },
  {
    title: '操作',
    render() {
      return (
        <Space>
          <Tooltip title="修改医院">
            <Button icon={<EditOutlined />} type="primary"></Button>
          </Tooltip>
          <Tooltip title="删除医院">
            <Button icon={<DeleteOutlined />} type="primary" danger></Button>
          </Tooltip>
        </Space>
      )
    },
    // 这一列在右侧固定不动(不要胡写.到底在left和right.还是要看你的这一列本身在左还是右)
    fixed: 'right',

    width: 100, //控制这一列的宽度
  },
]

export default function HospitalSet() {
  // 注意: 定义状态的时候,如果初始值是空数组,则存储状态的变量的类型会自动推论为never[]
  // 解决办法: 调用useState<泛型>()传入什么类型,则状态的数据类型就被定义为什么
  const [hospitalSets, setHospitalSets] = useState<IhospitalSets>([])
  // 存储表格数据总数的状态
  const [total, setTotal] = useState(0)
  // 存储一页多少条的状态
  const [pageSize, setPageSize] = useState(5)

  // 控制表格是否展示加载效果的状态
  const [loading, setLoading] = useState(false)
  // useEffect的回调,是不能够被定义为异步函数的.解决办法.给异步函数外面再套一个函数
  useEffect(() => {
    // 页面一打开就要获取一次数据
    getHospitalSets(1, 5)
  }, [])

  async function getHospitalSets(page: number, pageSize: number) {
    // 这个函数一进来,表示要发送请求,展示loading效果
    setLoading(true)
    // await promise对象, 则返回值就是promise成功之后的value值
    const result = await reqGetHospitalSets(page, pageSize)
    // console.log(result)
    // 将表格数据存储起来
    setHospitalSets(result.records)
    // 将表格数据总数存储起来
    setTotal(result.total)
    // 请求成功之后,把loading隐藏掉
    setLoading(false)
  }
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  return (
    <Card>
      <Form
        layout="inline" // 表示当前表单中的每一个表单元素要在一行中显示
        name="basic" // form组件的名称
        // antd中内置了栅格系统,一行分成了24份
        // labelCol 控制表单描述文本 span: 8 在一行中占了8份
        // labelCol={{ span: 16 }}
        // wrapperCol 控制表单项 span: 16 在一行中占了16份
        // wrapperCol={{ span: 8 }}
        // 控制表单中每一个表单项的初始值
        // remember表示的是表单元素的name属性的值
        // initialValues={{ remember: false }}
        // 当我们点击提交按钮之后,表单校验通过触发onFinish
        // 如果没有表单校验,则只要点击了提交按钮,就会触发onFinish
        onFinish={onFinish}
        // 点击提交按钮之后,表单校验不通过,则触发onFinishFailed
        // onFinishFailed={onFinishFailed}
        // autoComplete="off"
      >
        <Form.Item
          //  label的值就是当前表单元素的描述文本
          // label="Username"
          name="hosname"
          // 当前表单的校验规则
          // required: true表示当前表单必填, message就是没有填内容时的错误提示
          // rules={[{ required: true, message: 'Please input your username!' }]}
        >
          {/* 代表文本框 */}
          <Input placeholder="医院名称" />
        </Form.Item>

        <Form.Item
          // label="Password"
          name="hoscode"
          // rules={[{ required: true, message: 'Please input your password!' }]}
        >
          {/* 代表密码框 */}
          {/* <Input.Password /> */}
          <Input placeholder="医院编号" />
        </Form.Item>

        {/* <Form.Item
          name="remember"
          // 这个表单元素,控制他的值的属性是checked
          valuePropName="checked"
          // offset: 8 指当前表单元素,距离左侧的偏移量
          // wrapperCol={{ offset: 0, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

        <Form.Item>
          <Space>
            {/* type="primary" 按钮是主题颜色按钮 
          htmlType="submit" 表示这个按钮是当前表单的提交按钮 */}
            <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
              查询
            </Button>
            <Button>清空</Button>
          </Space>
        </Form.Item>
      </Form>

      <Space style={{ marginTop: 20, marginBottom: 20 }}>
        <Button type="primary">添加</Button>
        <Button type="primary" danger disabled>
          批量删除
        </Button>
      </Space>
      {/* columns: 决定了表格中有多少列,以及每一列的表头是啥
      dataSource:决定表格中要展示的数据 
      bordered 给表格添加边框 
      scroll 让表格可以滚动*/}
      <Table
        columns={columns}
        dataSource={hospitalSets}
        bordered
        scroll={{
          // x 表示表格在水平方向滚动
          // 1500代表可以滚动的距离
          x: 1500,
        }}
        // 给表格数据的每一行加key
        // 值写一个字符串的id,则表示每一行的key就是 这条数据的id
        // 值写一个字符串的hoscode,则表示每一行的key就是 这条数据的hoscode
        rowKey="id"
        pagination={{
          total, // 这个total就是告诉分页器我们总共有多少数据
          pageSize, //告诉分页器,我们一页是5条数据
          // 这个函数中返回值是什么,则分页器前面就展示什么
          showTotal(total) {
            return `总共${total}条`
          },
          // 显示一个下拉框,控制一页要显示多少条.其实就是修改pageSize
          showSizeChanger: true,
          // 自定义选择一页多少条数据的下拉框选项
          pageSizeOptions: [2, 5, 10],
          //展示一个快速跳转到某一页的控件
          showQuickJumper: true,

          // 监听用户操作分页器
          // 注意: 只要操作了分页器,这个事件就会触发
          onChange(page, pageSize) {
            // console.log('触发了', page, pageSize)
            setPageSize(pageSize)

            // 给服务器发送请求
            getHospitalSets(page, pageSize)
          },
        }}
        // 控制表格是否展示正在加载
        loading={loading}
      />
    </Card>
  )
}
