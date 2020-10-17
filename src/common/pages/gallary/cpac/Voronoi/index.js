import React,{Component} from 'react'
import D3SimpleVoronoiChart from './Voronoi'

// eslint-disable-next-line react/prefer-stateless-function
class Voronoi extends Component{
  render() {
    return (<div className="Voronoi"><D3SimpleVoronoiChart /></div>)
  }
}
export default Voronoi
