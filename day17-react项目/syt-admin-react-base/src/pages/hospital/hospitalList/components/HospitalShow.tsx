import React, { useEffect, useState } from 'react'
import { Badge, Descriptions, Card, Button } from 'antd'
import { useParams } from 'react-router-dom'
import { reqGetHospitalDetail } from '@api/hospital/hospitalList'
import { IhospitalDetail } from '@api/hospital/hospitalList/model/hospitalListTypes'
export default function HospitalShow() {
  const [hospitalDetail, setHospitalDetail] = useState<IhospitalDetail>({})
  // 路由参数: 医院的id
  const { id } = useParams()

  useEffect(() => {
    // 组件挂载,获取医院详情数据
    async function fetch() {
      const result = await reqGetHospitalDetail(id as string)
      setHospitalDetail(result)
    }
    fetch()
  }, [])

  return (
    <Card>
      {/* column控制描述列表中一行有几列, 默认值是3 */}
      <Descriptions title="基本信息" bordered column={2}>
        <Descriptions.Item label="医院名称">
          {hospitalDetail.hospital?.hosname}
        </Descriptions.Item>
        <Descriptions.Item label="医院logo">
          <img
            src={'data:image/png;base64,' + hospitalDetail.hospital?.logoData}
            alt=""
            width="100"
          />
        </Descriptions.Item>
        <Descriptions.Item label="医院编码">
          {hospitalDetail.hospital?.hoscode}
        </Descriptions.Item>
        <Descriptions.Item label="医院地址">
          {hospitalDetail.hospital?.param.fullAddress}
        </Descriptions.Item>
        {/* span=2 表示这一列占2列的位置 */}
        <Descriptions.Item label="坐车路线" span={2}>
          {hospitalDetail.hospital?.route}
        </Descriptions.Item>
        <Descriptions.Item label="医院简介" span={2}>
          {hospitalDetail.hospital?.intro}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions
        title="预约规则信息"
        bordered
        column={2}
        style={{ marginTop: 20, marginBottom: 20 }}
      >
        <Descriptions.Item label="预约周期">
          {hospitalDetail.bookingRule?.cycle} 天
        </Descriptions.Item>
        <Descriptions.Item label="放号时间">
          {hospitalDetail.bookingRule?.releaseTime}
        </Descriptions.Item>
        <Descriptions.Item label="停挂时间">
          {hospitalDetail.bookingRule?.stopTime}
        </Descriptions.Item>
        <Descriptions.Item label="退号时间">
          {hospitalDetail.bookingRule?.quitTime}
        </Descriptions.Item>
        {/* span=2 表示这一列占2列的位置 */}
        <Descriptions.Item label="预约规则" span={2}>
          {hospitalDetail.bookingRule?.rule.map((item, index) => {
            return (
              <div key={index}>
                {index + 1},{item}
              </div>
            )
          })}
        </Descriptions.Item>
      </Descriptions>
      <Button>返回</Button>
    </Card>
  )
}
