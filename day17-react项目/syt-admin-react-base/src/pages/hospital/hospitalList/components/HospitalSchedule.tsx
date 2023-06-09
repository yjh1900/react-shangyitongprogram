import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Tree, Tag, Pagination, Table, Button, Row, Col } from 'antd'
import type { DataNode, TreeProps } from 'antd/es/tree'
import type { ColumnsType } from 'antd/es/table'
import { reqGetDepList } from '@api/hospital/hospitalList'
import { IdepList } from '@api/hospital/hospitalList/model/hospitalListTypes'
const treeData: DataNode[] = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [
          {
            title: <span style={{ color: '#1890ff' }}>sss</span>,
            key: '0-0-1-0',
          },
        ],
      },
    ],
  },
]
//  这里写的{ name: string } 时暂时写一下,为了不看到红色波浪线,后面会删除
const columns: ColumnsType<{ name: string }> = [
  {
    title: '序号',
    render: (a, b, index) => index + 1,
    align: 'center',
  },
  {
    title: '职称',
  },
  {
    title: '号源时间',
  },
  {
    title: '可预约数',
  },
  {
    title: '剩余预约数',
  },
  {
    title: '挂号费(元)',
  },
  {
    title: '擅长技能',
  },
]
export default function HospitalSchedule() {
  const { hoscode } = useParams()

  // 存储科室数据的状态
  const [depList, setDepList] = useState<IdepList>([])

  useEffect(() => {
    //组件挂载获取科室数据
    getDepList()
  }, [])
  // 获取所有科室
  async function getDepList() {
    const result = await reqGetDepList(hoscode as string)
    setDepList(result)
  }

  const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info)
  }

  return (
    <Card>
      <p>选择：北京人民医院 / 多发性硬化专科门诊 / 2022-04-05</p>
      {/* gutter 控制一行中每一列的间隔宽度. 值是px */}
      <Row gutter={20}>
        {/* 这一列占4份 */}
        <Col span={4}>
          <Tree
            style={{
              border: '1px solid #ccc',
              height: 300,
              overflow: 'scroll',
            }}
            // checkable //是否展示复选框
            // // 默认展开的节点的键
            // defaultExpandedKeys={['0-0-0', '0-0-1']}
            // // 默认选中的节点的键
            // defaultSelectedKeys={['0-0-0', '0-0-1']}
            // // 默认复选框选中的节点的键
            // defaultCheckedKeys={['0-0-0', '0-0-1']}
            onSelect={onSelect} //选中节点的时候触发
            // onCheck={onCheck} // 点击复选框的时候触发的事件
            // 目前Tree组件的数据结构类型,默认要求是DataNode类型的,但是我们实际数据绝对不是,所以暂时只能将我们的数据断言为any类型
            treeData={depList as any} // 树结构要渲染的数据
            //注意: Tree组件默认使用数据对象中的title属性,作为节点的名称渲染.key属性作为节点的id.但是我们的数据没有title和key.所以可以利用下面的属性进行自定义
            fieldNames={{
              title: 'depname',
              key: 'depcode',
            }}
          />
        </Col>
        <Col span={20}>
          <Tag color="green">
            <div>2022-04-28 周四</div> <div> 22 / 33</div>
          </Tag>
          <Tag color="green">
            <div>2022-04-28 周四</div> <div> 22 / 33</div>
          </Tag>
          <Tag color="green">
            <div>2022-04-28 周四</div> <div> 22 / 33</div>
          </Tag>

          {/* 之前在table中使用分页写的所有的属性,在这里都可以使用.只是原来是写在对象里面.现在这些属性,直接写在组件上即可 */}
          <Pagination
            showSizeChanger={true}
            style={{ marginTop: 10 }}
          ></Pagination>

          <Table
            columns={columns}
            dataSource={[]}
            style={{ marginTop: 10, marginBottom: 10 }}
          />

          <Button>返回</Button>
        </Col>
      </Row>
    </Card>
  )
}
