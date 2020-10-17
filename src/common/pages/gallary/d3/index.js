import React,{Component} from 'react'
import * as d3 from "d3"
import BarChart from './helix'
/* class Helix extends Component{
  componentDidMount() {
    const svg = d3.select('.d3chart').append('svg').attr('width',width).attr('height',height).style('margin-left',100)
    // eslint-disable-next-line react/destructuring-assignment
    svg.selectAll('rect').data([12,5,6,6,9,10]).enter().append('rect').attr('x',(d,i)=>i*70).attr('y',(d,i)=>width-10*d).attr('width',65).attr('height',(d,i)=>d*10).attr('fill',"green")
  }

  render() {
    return(
      <div className={"Helix"}>

        <div className="d3chart" />
      </div>
    )
  }
} */

// eslint-disable-next-line no-unused-vars
class Helix extends Component
{
  state={
    data: [12,5,6,6,9,10],
    width: 700,
    height: 500,
    // eslint-disable-next-line react/no-unused-state,no-undef
    id: root
  }

  render(){
    return(
      <div className="d3chart">

        {/* eslint-disable-next-line react/jsx-no-undef,react/destructuring-assignment */}
        <BarChart data={this.state.data} width={this.state.width} height={this.state.height} />
      </div>
    )
  }
}
export default Helix

