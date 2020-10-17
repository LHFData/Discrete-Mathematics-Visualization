import React,{Component} from 'react'
import * as d3 from "d3"

const fiData=[]
const minRadius=0.00000000001
let baseRadius=minRadius
const speed=Math.sqrt(10)
const qcrate=0.38
let mult = true
const ishalt = false
let svg=null

class FiboLine extends Component{
  // 加载组件时先执行render,再执行DidMount
  componentDidMount() {
    
    this.dataCreate(50)
    this.paint()
    /* setInterval(function () {
      if (ishalt)
        return
      if (baseRadius > this.propos.width / 2)
        mult = false
      else if (baseRadius < minRadius)
        mult = true
      if (mult)
        baseRadius *= speed
      else
        baseRadius /= speed
      this.paint()
    }, 5000)*/
  }

  
// fibonacci data create
  dataCreate(max){
    fiData[0]={
      // eslint-disable-next-line react/destructuring-assignment
      x:Math.round(this.props.width/2),
      // eslint-disable-next-line react/destructuring-assignment
      y:Math.round(Math.round((this.props.height*0.75)/2)),
      data:1
    }
    fiData[1]={
      x:fiData[0].x+baseRadius,
      y:fiData[0].y+baseRadius,
      data:1
    }
    for(let i=2;i<max;i++){
      fiData[i]={
        x:0,
        y:0,
        rx:0,
        ry:0,
        data:fiData[i-1].data+fiData[i-2].data
      }
      // eslint-disable-next-line default-case
      switch (i%4) {
        case 0:
          fiData[i].x=fiData[i-1].x-fiData[i].data*baseRadius
          fiData[i].y=fiData[i-1].y+fiData[i].data*baseRadius
          break
        case 1:
          fiData[i].x = fiData[i - 1].x + fiData[i].data * baseRadius
          fiData[i].y = fiData[i - 1].y + fiData[i].data * baseRadius
          break
        case 2:
          fiData[i].x = fiData[i - 1].x + fiData[i].data * baseRadius
          fiData[i].y = fiData[i - 1].y - fiData[i].data * baseRadius
          break
        case 3:
          fiData[i].x = fiData[i - 1].x - fiData[i].data * baseRadius
          fiData[i].y = fiData[i - 1].y - fiData[i].data * baseRadius
          break
      }
    }
    
  }

  // eslint-disable-next-line class-methods-use-this
  distance(a, b) {
    return Math.round(Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y)))
  }

  quadraticCurvePoint(i1, i2, r) {
    const x1 = i1.x
    const y1 = i1.y
    const x2 = i2.x
    const y2 = i2.y
    const k = (x2 - x1) / (y1 - y2)
    const x = (x1 + x2) / 2
    const y = (y1 + y2) / 2
    const cos = Math.sqrt(1 / (1 + k * k))
    const sin = cos * k
    const d = this.distance({
      x: x1,
      y: y1
    }, {
      x: x2,
      y: y2
    })
    const result = {
      x: x + d * r * cos,
      y: y + d * r * sin,
      i1,
      i2,
      d
    }
    return result
  }

  repaint(){
    this.dataCreate(70)
    svg.selectAll("circle").data(fiData).transition().duration(5000)
      .attr("cx", function (d, i) {
        return d.x
      })
      .attr("cy", function (d, i) {
        return d.y
      })
      .attr("r", "3px")
      .style("stroke", "steelblue")
      .style("fill", "steelblue")
    svg.selectAll("path").data(fiData).transition().duration(5000)
      .attr("d", function (d, i) {
        const path = d3.path()
        path.moveTo(d.x, d.y)
        if (i > 0) {
          const qp = this.quadraticCurvePoint(fiData[i - 1], fiData[i], i % 4 < 2? -qcrate : qcrate)
          path.quadraticCurveTo(qp.x, qp.y, fiData[i - 1].x, fiData[i - 1].y)
        }
        path.closePath()
        return path.toString()
      })
      .style("stroke", "steelblue")
      .style("fill", "none")
    svg.selectAll("text").data(fiData).transition().duration(5000)
      .text(function (d, i) {
        return d.data
      })
      .attr("x", function (d, i) {
        return d.x
      })
      .attr("y", function (d, i) {
        return d.y
      })
      // eslint-disable-next-line react/destructuring-assignment
      .style("font-size", Math.round(this.props.height * 0.025) )
      .style("fill", function (d, i) {
        if (this.distance(d, fiData[0]) < 20 && i !== 0)
          return "transparent"


        // eslint-disable-next-line react/destructuring-assignment
        const color = Math.round(((this.props.height / 2000) * 0xff) % 0xff)
        const str = color.toString(16) + color.toString(16) + color.toString(16)
        return str
      })
  }
  



  paint(){
    svg=d3.select(".d3Chart")
      .append("svg")
      .style("width","100%")
      // eslint-disable-next-line react/destructuring-assignment
      .style("height",Math.round(this.props.height*0.75))
    this.dataCreate(50)
    svg.selectAll("circle").data(fiData).enter()
      .append("circle")
      .attr("cx", function (d, i) {
        return d.x
      })
      .attr("cy", function (d, i) {
        return d.y
      })
      .attr("r", "3px")
      .style("stroke", "steelblue")
      .style("fill", "steelblue")
    svg.selectAll("path").data(fiData).enter()
      .append("path")
      .attr("d", function (d, i) {
        const path = d3.path()
        path.moveTo(d.x, d.y)
        // if (i > 0) {
        //   const qp = this.quadraticCurvePoint(fiData[i - 1], fiData[i], i % 4 < 2? -qcrate : qcrate)
        //   path.quadraticCurveTo(qp.x, qp.y, fiData[i - 1].x, fiData[i - 1].y)
        // }
        path.closePath()
        return path.toString()
      })
      .style("stroke", "steelblue")
      .style("fill", "none")
    svg.selectAll("text").data(fiData).enter().append("text")
      .text(function (d, i) {
        return d.data
      })
      .attr("x", function (d, i) {
        return d.x
      })
      .attr("y", function (d, i) {
        return d.y
      })
      // eslint-disable-next-line react/destructuring-assignment
      .style("font-size", Math.round(this.props.height * 0.025) )
      .style("fill", function (d, i) {
        if (this.distance(d, fiData[0]) < 20 && i !== 0)
          return "transparent"
        // eslint-disable-next-line react/destructuring-assignment
        const color = Math.round(((this.props.height / 2000) * 0xff) % 0xff)
        const str = color.toString(16) + color.toString(16) + color.toString(16)
        return str
      })


  }

  render() {
    return null
  }

}

export default FiboLine