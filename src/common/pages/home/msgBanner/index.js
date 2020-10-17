import React from 'react'
import { Col, Card, Icon } from 'antd'
import b1 from 'images/minren.jpg'
import b2 from 'images/zuozu.jpg'
import b3 from 'images/xiaoying.jpg'
import b4 from 'images/chutian.jpg'

const MsgBanner = () => (
  <Col span={8}>
    <div className="cloud-box">
      <Card>
        <div className="pb-m">
          <h3>消息栏</h3>
        </div>
        <span className="card-tool">
          <Icon type="sync" />
        </span>
        <ul className="list-group no-border">
          <li className="list-group-item">
            <a className="pull-left w-40 mr-m">
              <img src={b1} className="img-responsive img-circle" alt="test" />
            </a>
            <div className="clear">
              <a className="block">学生甲</a>
              <span className="text-muted">Javascript怎么写</span>
            </div>
          </li>
          <li className="list-group-item">
            <a className="pull-left w-40 mr-m">
              <img src={b2} className="img-responsive img-circle" alt="test" />
            </a>
            <div className="clear">
              <a className="block">学生乙</a>
              <span className="text-muted">计数原理有哪些</span>
            </div>
          </li>
          <li className="list-group-item">
            <a className="pull-left w-40 mr-m">
              <img src={b3} className="img-responsive img-circle" alt="test" />
            </a>
            <div className="clear">
              <a className="block">学生丙</a>
              <span className="text-muted">可视化库是？</span>
            </div>
          </li>
          <li className="list-group-item">
            <a className="pull-left w-40 mr-m">
              <img src={b4} className="img-responsive img-circle" alt="test" />
            </a>
            <div className="clear">
              <a className="block">学生丁</a>
              <span className="text-muted">怎么打包项目啊？</span>
            </div>
          </li>
        </ul>
      </Card>
    </div>
  </Col>
)

export default MsgBanner
