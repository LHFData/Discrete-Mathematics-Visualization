import React,{Component} from 'react'
import * as d3 from "d3"

// eslint-disable-next-line no-unused-vars
class BarChart extends Component{
  componentDidMount() {
    this.drawChart()
  }

  // eslint-disable-next-line class-methods-use-this
  drawChart(){
    // eslint-disable-next-line react/destructuring-assignment
    const svg = d3.select('.d3chart').append('svg').attr('width',this.props.width).attr('height',this.props.height).attr('x',0).attr('y',0).style('margin-left',100)
    // eslint-disable-next-line react/destructuring-assignment
    svg.selectAll('rect').data(this.props.data).enter().append('rect').attr('x',(d,i)=>i*70).attr('y',(d,i)=>this.props.height-10*d).attr('width',65).attr('height',(d,i)=>d*10).attr('fill',"green")
    // 绘制每一个图形或区域都是从左上角开始绘制的，所以坐标计算要合适
    // eslint-disable-next-line react/destructuring-assignment
    svg.selectAll('text').data(this.props.data).enter().append('text').text((d)=>d).attr('x',(d,i)=>i*70+32).attr('y',(d,i)=>this.props.height-10*d-10)
  }

  render(){
    // eslint-disable-next-line react/destructuring-assignment
    // return <div className="d3Rectchart" />
    return null
  }
}
export default BarChart