import React,{Component} from 'react'
import * as d3 from "d3"
import FibonacciLine from "./Fibonacci"
// 引用路径应为文件名，此处输出的组件对应/common/container/content
class FibonacciNew extends Component{
  state={
    height:640,
    width:640
  }

  render() {
    return(
      <div className="fibonacciNew">

        <FibonacciLine height={this.state.height} width={this.state.width} />
      </div>
    )
  }
}
export default FibonacciNew