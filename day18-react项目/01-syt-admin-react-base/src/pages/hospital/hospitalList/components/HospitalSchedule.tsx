import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Tree, Tag, Pagination, Table, Button, Row, Col } from 'antd'
import type { DataNode, TreeProps } from 'antd/es/tree'
import type { ColumnsType } from 'antd/es/table'
import {
  reqGetDepList,
  reqGetScheduleRules,
  reqGetScheduleDetail,
} from '@api/hospital/hospitalList'
import {
  IdepList,
  IscheduleRuleList,
  IscheduleDetail,
  IscheduleDetailList,
} from '@api/hospital/hospitalList/model/hospitalListTypes'
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
const columns: ColumnsType<IscheduleDetail> = [
  {
    title: '序号',
    render: (a, b, index) => index + 1,
    align: 'center',
  },
  {
    title: '职称',
    dataIndex: 'title',
  },
  {
    title: '号源时间',
    dataIndex: 'workDate',
  },
  {
    title: '可预约数',
    dataIndex: 'availableNumber',
  },
  {
    title: '剩余预约数',
    dataIndex: 'reservedNumber',
  },
  {
    title: '挂号费(元)',
    dataIndex: 'amount',
  },
  {
    title: '擅长技能',
    dataIndex: 'skill',
  },
]

let depcode = '' // 记录当前选中拿到科室的编码
export default function HospitalSchedule() {
  const { hoscode } = useParams()

  // 存储科室数据的状态
  const [depList, setDepList] = useState<IdepList>([])
  // 存储排班规则数据状态
  const [scheduleRule, setScheduleRule] = useState<IscheduleRuleList>([])
  // 存储排班详情数据
  const [scheduleDetail, setScheduleDetail] = useState<IscheduleDetailList>([])

  // 存储所有一级科室depcode的状态
  const [depCodes, setDepCodes] = useState<string[]>([])

  // 科室排班规则分页的状态
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)
  const [total, setTotal] = useState(0)

  // 面包屑的三个状态
  // 获取到排班规则的时候,可以拿到医院名称
  const [hosname, setHosname] = useState('')
  // 获取完所有的科室数据之后,就可以拿到默认的第一个一级科室的第一个二级科室的名称
  const [depname, setDepname] = useState('')
  // 获取完排班规则的默认的第一个
  const [workDate, setWorkDate] = useState('')

  useEffect(() => {
    async function fetch() {
      //组件挂载获取科室数据
      // getDepList是一个异步函数,异步函数的返回值是promise对象.所以前面可以加await
      // 当一个异步函数里面所有的代码执行完毕了.则这个异步函数返回的promise对象的状态就变成了成功
      const depcode = await getDepList()

      // 获取排班规则
      getScheduleRules(page, pageSize, depcode)
    }
    fetch()
  }, [])
  // 获取所有科室
  async function getDepList() {
    const result = await reqGetDepList(hoscode as string)
    // 将所有的一级科室的depcode存储到一个数组中
    const depcodes = result.map((item) => {
      // item就是一级科室数据对象
      return item.depcode
    })

    // 给所有的一级科室数据对象,添加disabled属性值为true.从而让一级科室禁用
    result.forEach((item) => {
      item.disabled = true
    })

    setDepCodes(depcodes) //存储一级科室编码

    setDepList(result) //存储所有科室数据

    setDepname(result[0].children[0].depname) //存储科室名称

    depcode = result[0].children[0].depcode //将depcode存储到全局

    // 一个异步函数,可以写返回值.这个返回值最终会添加给异步函数返回的promise对象,成功之后的value属性的值
    return result[0].children[0].depcode
  }

  // 获取指定科室的排班规则数据
  async function getScheduleRules(
    page: number,
    pageSize: number,
    depcode: string
  ) {
    const result = await reqGetScheduleRules(
      page,
      pageSize,
      hoscode as string,
      depcode
    )
    // console.log(result)
    setScheduleRule(result.bookingScheduleList)
    setHosname(result.baseMap.hosname)
    setWorkDate(result.bookingScheduleList[0].workDate)

    const workDate = result.bookingScheduleList[0].workDate
    // 获取排班详情
    getScheduleDetail(depcode, workDate)
  }

  // 获取排班详情
  async function getScheduleDetail(depcode: string, workDate: string) {
    const result = await reqGetScheduleDetail(
      hoscode as string,
      depcode,
      workDate
    )
    setScheduleDetail(result)
  }

  const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info)
  }

  //动态计算Tree组件盒子的高度
  // 当前页面可视区高度 - header组件的高度(64) - Tabs组件的高度(34) - Card组件的内边距(24) - 面包屑的高度(36)
  const height = document.documentElement.clientHeight - 64 - 34 - 24 - 36

  return (
    <Card>
      <p>
        选择：{hosname} / {depname} / {workDate}
      </p>
      {/* gutter 控制一行中每一列的间隔宽度. 值是px */}
      <Row gutter={20}>
        {/* 这一列占4份 */}
        <Col span={4}>
          <Tree
            style={{
              border: '1px solid #ccc',
              height,
              overflow: 'scroll',
            }}
            // checkable //是否展示复选框
            // // 默认展开的节点的键
            // 注意: 这个带default的配置属性有一个特点:只在第一次的时候有效
            // defaultExpandedKeys={depCodes}
            expandedKeys={depCodes} //作用: 传入要展开节点的key.然后展示节点.不只是第一次生效
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
          {scheduleRule.map((item) => {
            return (
              <Tag
                color={item.workDate === workDate ? 'green' : ''}
                key={item.workDate}
                onClick={() => {
                  setWorkDate(item.workDate)
                  getScheduleDetail(depcode, item.workDate)
                }}
              >
                <div>
                  {item.workDate} {item.dayOfWeek}
                </div>
                <div>
                  {item.availableNumber} / {item.reservedNumber}
                </div>
              </Tag>
            )
          })}

          {/* 之前在table中使用分页写的所有的属性,在这里都可以使用.只是原来是写在对象里面.现在这些属性,直接写在组件上即可 */}
          <Pagination
            showSizeChanger={true}
            style={{ marginTop: 10 }}
          ></Pagination>

          <Table
            columns={columns}
            dataSource={scheduleDetail}
            style={{ marginTop: 10, marginBottom: 10 }}
            rowKey="id"
            pagination={false} //不展示表格的分页
          />

          <Button>返回</Button>
        </Col>
      </Row>
    </Card>
  )
}
