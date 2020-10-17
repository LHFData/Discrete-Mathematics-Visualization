import React,{Component} from 'react'
import * as d3 from "d3"
// 组件首字母应当大写才可以访问里面的方法，不然走不进去componentDidMount
class FibonacciLine extends Component{
  componentDidMount() {
    // eslint-disable-next-line camelcase
    var fib_val = [0, 1]
    const width=1280
    const height=860
    const svg = d3.select('.fibonacci').append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('x', 0)
      .attr('y', 0)
    var color=["#2ecc71","#16a085","#2ecc71","#27ae60","#f1c40f","#f39c12","#e67e22","#e74c3c","#c0392b","#d35400","#3498db","#2980b9","#9b59b6","#8e44ad"]
    const n=10
    function fib(n) {
      const len = fib_val.length
      for (let i = len; i <= n; i++) {
        fib_val.push(fib_val[i - 1] + fib_val[i - 2])
      }
      return fib_val
    }
    var angs=[]
    var data=fib(10)
    function centerLocate(i){
      // eslint-disable-next-line no-array-constructor
        var cen=new Array()
        if(i===0||i===1||i===2){
          cen[0]=0
          cen[1]=0
          return cen
        }
        if(i%4===1){
          cen[0]=(data[i-1]-data[i])*10
          cen[1]=0
        }
        else if(i%4===2){
          cen[0]=0
          cen[1]=(data[i-1]-data[i])*10
        }
        else if(i%4===3){
          cen[0]=(data[i]-data[i-1])*10
          cen[1]=0
        }
        else if (i%4===0){
          cen[0]=0
          cen[1]=(data[i]-data[i-1])*10
        }
        return cen

    }
    // eslint-disable-next-line camelcase

    // 经常loading不出来可以考虑在IDE重Run

    /*svg.append("g").attr("stroke","#fff").attr("stroke-width",1.5)
      .selectAll("circle")
      //.attr("class", "cir")
      .data(function() {
      fib(10)
        return fib_val
      })
      .join("circle")
      .attr("r", 6)
      .attr("fill",10)
      .attr("cx",function(d,i) {
            return i*50+25
      })
      .attr("cy",function(d,i){
        return i*25+10
      })*/
    function center(x,y){
      this.x=x
      this.y=y
    }
    var centerxy=new Array()
    //角度设置
       let arc=d3.arc().innerRadius(0).outerRadius((d,i)=>{return data[i]*10})
        .startAngle((d,i)=>{return (i%4)*Math.PI/2}).endAngle((d,i)=>{return (i%4+1)*Math.PI/2})
    //绘制扇形区
      svg.append("g").attr("stroke","#ccc").attr("x",width/2).attr("y",height/2).selectAll("path").data(data)
        .join("path").attr("d",arc).attr("fill",function(d,i) {
          return color[i]
      }).attr("transform",function(d,i) {
        let cen=centerLocate(i)
          if(i===0){
            centerxy.push([width/2,height/2])
          }
          else{
            centerxy.push([centerxy[i-1][0]+cen[0],centerxy[i-1][1]+cen[1]])
          }

          return `translate(${centerxy[i][0]},${centerxy[i][1]})`
        //transfrom 属性用于调整坐标
      })//"translate(320,320)")
        .append("title").text((d)=>{return d}).attr("font-size",5)

  }



  render() {
    return (
      <div className="fibonacci" />
    )
  }
}
export default FibonacciLine

