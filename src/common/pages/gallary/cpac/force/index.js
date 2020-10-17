import React,{Component} from 'react'
import * as d3 from "d3"
import ForceChart from "./Force"

class Force extends Component{
  state={
    data:[{
      id:"1",
      group:"bupt",
      radius:2,
      citing_patents_count:2
    }, {
      id:"2",
      group:"bupt",
      radius:1,
      citing_patents_count:2
    }, {
      id:"3",
      group:"bup",
      radius:1,
      citing_patents_count:2
    },{
      id:"4",
      group:"bup",
      radius:2,
      citing_patents_count:1
    },{
      id:"1",
      group:"bupt",
      radius:2,
      citing_patents_count:2
    }],
    width: 700,
    height: 500,
    // eslint-disable-next-line no-undef
    id: root
  }

  render(){
    return (
      <div className="forceChart">
        <ForceChart />
      </div>
    )
  }
}
export default Force