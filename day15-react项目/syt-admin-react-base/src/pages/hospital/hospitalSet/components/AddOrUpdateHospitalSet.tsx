import React from 'react'
import { Button, Form, Input, Card, Space } from 'antd'
export default function AddOrUpdateHospitalSet() {
  const onFinish = (values: any) => {
    console.log('Success:', values)
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
            <Button>返回</Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  )
}
