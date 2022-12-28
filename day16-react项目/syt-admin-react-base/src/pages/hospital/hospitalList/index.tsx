import React from 'react'
import { Button, Form, Input, Card, Select, Space, Table } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import type { ColumnsType } from 'antd/es/table'
// Option组件是从Select组件上解构出来的
const { Option } = Select

interface DataType {
  key: string
  name: string
  age: number
  address: string
  tags: string[]
}

const columns: ColumnsType<DataType> = [
  {
    title: '序号',
    render: (a, b, index) => index + 1,
    align: 'center',
  },
  {
    title: '医院logo',
    render() {
      return <img src="" alt="" />
    },
  },
  {
    title: '医院名称',
  },
  {
    title: '等级',
  },
  {
    title: '详细地址',
  },
  {
    title: '状态',
  },
  {
    title: '创建时间',
  },
  {
    title: '操作',
    render: (_, record) => (
      <Space size="middle">
        <Button type="primary">查看</Button>
        <Button type="primary">排班</Button>
        <Button type="primary">上线</Button>
      </Space>
    ),
    width: 200,
  },
]

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
export default function HospitalList() {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }
  return (
    <Card>
      <Form name="basic" onFinish={onFinish} layout="inline">
        <Form.Item name="provinceCode" style={{ width: 200, marginBottom: 20 }}>
          <Select placeholder="请选择省">
            <Option value="gd">广东</Option>
          </Select>
        </Form.Item>
        <Form.Item name="cityCode" style={{ width: 200, marginBottom: 20 }}>
          <Select placeholder="请选择市">
            <Option value="sz">深圳</Option>
          </Select>
        </Form.Item>
        <Form.Item name="districtCode" style={{ width: 200, marginBottom: 20 }}>
          <Select placeholder="请选择区">
            <Option value="ba">宝安</Option>
          </Select>
        </Form.Item>

        <Form.Item name="hosname" style={{ marginBottom: 20 }}>
          <Input placeholder="医院名称" />
        </Form.Item>

        <Form.Item name="hoscode">
          <Input placeholder="医院编号" style={{ marginBottom: 20 }} />
        </Form.Item>
        <Form.Item name="hostype" style={{ width: 200, marginBottom: 20 }}>
          <Select placeholder="医院类型">
            <Option value="1">三级甲等</Option>
          </Select>
        </Form.Item>
        <Form.Item name="status" style={{ width: 200, marginBottom: 20 }}>
          <Select placeholder="医院状态">
            {/* 注意: value="1" 这样写1其实是字符串. 写成下面的形式才是数字 */}
            <Option value={0}>未上线</Option>
            <Option value={1}>已上线</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
              查询
            </Button>
            <Button>清空</Button>
          </Space>
        </Form.Item>
      </Form>
      <Table columns={columns} dataSource={data} bordered />
    </Card>
  )
}
