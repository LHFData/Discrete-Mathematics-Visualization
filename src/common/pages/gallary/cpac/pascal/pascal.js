import React,{Component} from 'react'
import * as d3 from "d3"
import { array } from 'prop-types'

class PascalTriangle extends Component{

  componentDidMount() {
    const width=1280
    const height=860
    const rows=15 //行数
    const svg=d3.select('.pascalTriangle').append('svg')
      .attr('width',width)
      .attr('height',height)
      .attr('x',0)
      .attr('y',0)
    /*function locatedata(val,row,index){
      this.val=val
      this.row=row
      this.index=index
    }*/


    let arr=new Array()
    let locate=new Array()
    for(let i=0;i<rows;i++){
      arr[i]=new Array()
      for(let j=0;j<i;j++){
        if(j-1<0){
          arr[i][j]=1
          const locatedata={val:1,row:i,index:j}
          locate.push(locatedata)
        }
        else if(j+1===i){
          arr[i][j]=1
          const locatedata={val:1,row:i,index:j}
          locate.push(locatedata)
        }
        else{
          arr[i][j]=arr[i-1][j-1]+arr[i-1][j]
          const temp=arr[i][j]
          const locatedata={val:temp,row:i,index:j}
          locate.push(locatedata)
        }
      }
    }
    const color=["#00CCFF","#004DFF","#3300FF","#B300FF","#FF00CC","#FF004D","#FF3300","#FFB300","#CCFF00","#4DFF00","#00FF33","#3DFFC5","#7AFFD7","#FF3D77","#FF7AA2"]
        const g=svg.append("g").attr("stroke", "#fff").attr("stroke-width", 2)
          g.selectAll("circle").data(locate).join("circle").attr("class", "circles").attr("r", 20).attr("fill", function(d,i) {
            return color[(i%color.length)]
          })
          .attr("cx", function(d,i) {
            return locate[i].index*80+width/2-locate[i].row*40
          })
          .attr("cy", function(d,i) {
            return locate[i].row*40 + height /12
          })
          g.selectAll("text").data(locate).join("text").text(function(d,i) {
            return locate[i].val
          }).attr("x",function(d,i) {
            return locate[i].index*80+width/2-locate[i].row*40-5
          }).attr("y", function(d,i) {
            return locate[i].row*40 + height/12+6
          }).attr("font-size",20)


  }

  render(){
    return (<div className="pascalTriangle" />)
  }
}
export default PascalTriangle