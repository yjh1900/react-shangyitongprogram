import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Card, Select, Space, Table } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import type { ColumnsType } from 'antd/es/table'

import {
  reqGetHospitalList,
  reqGetProvince,
  reqGetCoDoT,
} from '@api/hospital/hospitalList'
import {
  IhospitalList,
  IhospitalListItem,
  IdictList,
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

let flag = false //为true,则添加筛选条件,为false则添加筛选条件

export default function HospitalList() {
  const [form] = Form.useForm()
  // 存储表格数据的状态
  const [hospitalList, setHospitalList] = useState<IhospitalList>([])

  //  分页相关的状态
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)
  const [total, setTotal] = useState(0)

  // 加载效果的状态
  const [loading, setLoading] = useState(false)

  // 省,市,区三级数据状态
  const [province, setProvince] = useState<IdictList>([])
  const [city, setCity] = useState<IdictList>([])
  const [district, setDistrict] = useState<IdictList>([])
  // 医院类型的数据状态
  const [hostype, setHostype] = useState<IdictList>([])

  // 组件挂载,则获取表格数据
  useEffect(() => {
    // 获取表格数据
    getHospitalList(page, pageSize)
    //获取省数据
    getProvince()

    // 获取医院类型的数据
    getHostype()
  }, [])

  // 表单中提交按钮的事件处理函数
  const onFinish = (values: any) => {
    // console.log('Success:', values)
    flag = true
    getHospitalList(1, pageSize)
    setPage(1)
  }

  // 获取医院列表表格数据
  async function getHospitalList(page: number, pageSize: number) {
    setLoading(true)
    let result
    if (flag) {
      // 带筛选条件
      // data就是筛选表单中所有表单项的数据
      const data = form.getFieldsValue()
      // 注意: data中的数据属性刚好要和上传的数据属性一致.所以直接展示传入即可
      result = await reqGetHospitalList({ page, limit: pageSize, ...data })
    } else {
      // 不带筛选条件
      result = await reqGetHospitalList({ page, limit: pageSize })
    }

    // console.log(result)
    setHospitalList(result.content)
    setTotal(result.totalElements)
    setLoading(false)
  }

  // 获取省数据
  async function getProvince() {
    const result = await reqGetProvince()
    // console.log(result)
    setProvince(result)
  }
  async function getCity(provinceCode: string) {
    const result = await reqGetCoDoT(provinceCode)
    // console.log(result)
    setCity(result)
  }
  async function getDistrict(cityCode: string) {
    const result = await reqGetCoDoT(cityCode)
    // console.log(result)
    setDistrict(result)
  }
  async function getHostype() {
    const result = await reqGetCoDoT('10000')
    // console.log(result)
    setHostype(result)
  }
  return (
    <Card>
      <Form
        name="basic"
        onFinish={onFinish}
        layout="inline"
        form={form}
        // 文本框时触发
        // onChange={() => {
        //   console.log('触发了')
        // }}
        // 点击下拉框触发
        // onSelect={() => {
        //   console.log('重新选择了')
        // }}
        // 只要表单的值变化则触发
        onValuesChange={() => {
          flag = false
        }}
      >
        <Form.Item name="provinceCode" style={{ width: 200, marginBottom: 20 }}>
          <Select
            placeholder="请选择省"
            onSelect={(provinceCode: string) => {
              // console.log(value)
              // 获取市的数据
              getCity(provinceCode)
              //清空市和区
              form.setFieldsValue({
                cityCode: undefined,
                districtCode: undefined,
              })
            }}
          >
            {province.map((item) => {
              return (
                <Option key={item.id} value={item.value}>
                  {item.name}
                </Option>
              )
            })}
          </Select>
        </Form.Item>
        <Form.Item name="cityCode" style={{ width: 200, marginBottom: 20 }}>
          <Select
            placeholder="请选择市"
            onSelect={(cityCode: string) => {
              getDistrict(cityCode)
              //清空区
              form.setFieldsValue({
                districtCode: undefined,
              })
            }}
          >
            {city.map((item) => {
              return (
                <Option key={item.id} value={item.value}>
                  {item.name}
                </Option>
              )
            })}
          </Select>
        </Form.Item>
        <Form.Item name="districtCode" style={{ width: 200, marginBottom: 20 }}>
          <Select placeholder="请选择区">
            {district.map((item) => {
              return (
                <Option key={item.id} value={item.value}>
                  {item.name}
                </Option>
              )
            })}
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
            {hostype.map((item) => {
              return (
                <Option key={item.id} value={item.value}>
                  {item.name}
                </Option>
              )
            })}
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
            <Button
              onClick={() => {
                // 清空表单
                // form.setFieldsValue({属性:值})
                form.resetFields() //重置表单
                flag = false
                getHospitalList(1, pageSize)
                setPage(1)
              }}
            >
              清空
            </Button>
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
