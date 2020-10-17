import React,{Component} from 'react'
import * as d3 from "d3"
import PascalTriangle from './pascal'

class Pascal extends Component{
  state={
    height:640,
    width:640
  }

  render(){
    return(
      <div className="Pascal">
        <PascalTriangle height={this.state.height} width={this.state.width} />
      </div>
    )
  }
}
export default Pascal