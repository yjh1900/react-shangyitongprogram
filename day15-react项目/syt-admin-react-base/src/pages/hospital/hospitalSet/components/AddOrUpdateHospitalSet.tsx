import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Input, Card, Space, message } from 'antd'
import { reqAddHospitalSet } from '@api/hospital/hospitalSet'
export default function AddOrUpdateHospitalSet() {
  const navigate = useNavigate()
  // 保存按钮的事件处理函数
  // 触发事件:点击之后,表单校验通过则执行
  const onFinish = async (values: any) => {
    await reqAddHospitalSet(values)
    // 如果添加成功,下面的代码就会执行

    // 回到医院设置页面
    navigate(-1)
    // 提示用户,添加成功
    message.success('医院设置添加成功')
    // 医院设置界面的表格数据需要重新获取
    // 什么都不用干,因为切换到添加的时候,医院设置就被卸载了.又返回到医院设置,医院设置会从新挂载. 挂载里面已经写过获取表格数据的代码了
  }
  return (
    <Card>
      <Form
        name="basic"
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 22 }}
        onFinish={onFinish}
      >
        <Form.Item
          label="医院名称"
          name="hosname"
          rules={[{ required: true, message: '请填写医院名称' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="医院编码"
          name="hoscode"
          rules={[{ required: true, message: '请填写医院编码' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="api基础路径"
          name="apiUrl"
          rules={[{ required: true, message: '请填写api基础路径' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="联系人名称"
          name="contactsName"
          rules={[{ required: true, message: '请填写联系人名称' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="联系人手机"
          name="contactsPhone"
          rules={[
            {
              required: true,
              message: '请填写手机号',
              pattern: /^1[3-9]\d{9}$/,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 2, span: 16 }}>
          <Space>
            <Button type="primary" htmlType="submit">
              保存
            </Button>
            <Button
              onClick={() => {
                navigate(-1)
              }}
            >
              返回
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  )
}
