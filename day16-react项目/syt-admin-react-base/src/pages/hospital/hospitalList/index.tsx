import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Card, Select, Space, Table } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import type { ColumnsType } from 'antd/es/table'

import { reqGetHospitalList } from '@api/hospital/hospitalList'
import {
  IhospitalList,
  IhospitalListItem,
} from '@api/hospital/hospitalList/model/hospitalListTypes'
// Option组件是从Select组件上解构出来的
const { Option } = Select

const columns: ColumnsType<IhospitalListItem> = [
  {
    title: '序号',
    render: (a, b, index) => index + 1,
    align: 'center',
  },
  {
    title: '医院logo',
    dataIndex: 'logoData',
    render(data) {
      return <img src={'data:image/png;base64,' + data} alt="" width="80" />
    },
  },
  {
    title: '医院名称',
    dataIndex: 'hosname',
  },
  {
    title: '等级',
    dataIndex: 'param',
    render(data) {
      return data.hostypeString
    },
  },
  {
    title: '详细地址',
    dataIndex: 'param',
    render(data) {
      return data.fullAddress
    },
  },
  {
    title: '状态',
    dataIndex: 'status',
    render(data) {
      return data ? '已上线' : '未上线'
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
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

export default function HospitalList() {
  // 存储表格数据的状态
  const [hospitalList, setHospitalList] = useState<IhospitalList>([])

  //  分页相关的状态
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)
  const [total, setTotal] = useState(0)

  // 加载效果的状态
  const [loading, setLoading] = useState(false)

  // 组件挂载,则获取表格数据
  useEffect(() => {
    getHospitalList(page, pageSize)
  }, [])
  // 表单中提交按钮的事件处理函数
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  // 获取医院列表表格数据
  async function getHospitalList(page: number, pageSize: number) {
    setLoading(true)
    const result = await reqGetHospitalList({ page, limit: pageSize })
    // console.log(result)
    setHospitalList(result.content)
    setTotal(result.totalElements)
    setLoading(false)
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
      <Table
        loading={loading}
        columns={columns}
        dataSource={hospitalList}
        bordered
        rowKey="id"
        pagination={{
          total,
          current: page,
          pageSize,
          showTotal(total) {
            return `总共${total}条`
          },
          showSizeChanger: true,
          showQuickJumper: true,
          pageSizeOptions: [2, 5, 10],
          onChange(page, pageSize) {
            setPage(page)
            setPageSize(pageSize)
            getHospitalList(page, pageSize)
          },
        }}
      />
    </Card>
  )
}
