import React from 'react'
import { rdColor } from 'diana'
import './index.less'

export default class Follow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      col: '#666'
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.getRandomColor, 500)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  getRandomColor = () => {
    this.setState({
      col: rdColor()
    })
  }

  render() {
    const { col } = this.state
    return (
      <div className="animated flip ani-box">
        <div>
          <a
            href="https://github.com/MuYunyun/react-antd-demo"
            className="welcome animated flip text"
            style={{ color: col }}
          >
            项目地址
          </a>
        </div>
        <img src={require('../../images/face.png')} width="100" alt="logo" className="lastPic" />
        <div className="animated swing discribe">本项目主要应用于</div>
        <div className="animated swing discribe">
          离散数学计数原理可视化，辅助学生编程实践
          <a href="https://github.com/MuYunyun/reactSPA">Star</a>
        </div>
      </div>
    )
  }
}
