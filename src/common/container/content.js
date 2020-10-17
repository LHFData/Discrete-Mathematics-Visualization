import React from 'react'
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import Loadable from 'react-loadable'
import './content.less'

const { Content } = Layout

const Loading = () => <div>Loading...</div>

const Home = Loadable({
  loader: () => import('../pages/home'),
  loading: Loading
})

const Follow = Loadable({
  loader: () => import('../pages/follow'),
  loading: Loading
})

const Tools = Loadable({
  loader: () => import('../pages/tools/smallTools'),
  loading: Loading
})

const Music = Loadable({
  loader: () => import('../pages/music'),
  loading: Loading
})

const Todo = Loadable({
  loader: () => import('../pages/mock/todo'),
  loading: Loading
})

const Album = Loadable({
  loader: () => import('../pages/gallary/album'),
  loading: Loading
})

const Editor = Loadable({
  loader: () => import('../pages/tools/editor'),
  loading: Loading
})

const TodoList = Loadable({
  loader: () => import('../pages/tools/todoList'),
  loading: Loading
})
const Helix=Loadable({
  loader:()=>import('../pages/gallary/d3'),
  loading: Loading
})
const Force=Loadable({
  loader:()=>import('../pages/gallary/cpac/force'),
  loading: Loading
})

const Fibonacci=Loadable({
  loader:()=>import('../pages/gallary/cpac/Fibonacci'),
  loading: Loading
})

const Voronoi=Loadable({
  loader:()=>import('../pages/gallary/cpac/Voronoi'),
  loading: Loading
})
const Pascal=Loadable({
  loader:()=>import('../pages/gallary/cpac/pascal'),
  loading:Loading
})
const Search = Loadable({
  loader: () => import('../pages/search'),
  loading: Loading
})

const Waterfall = Loadable({
  loader: () => import('../pages/gallary/waterfall'),
  loading: Loading
})

const Mock = Loadable({
  loader: () => import('../pages/mock/useMock'),
  loading: Loading
})

const Reform = Loadable({
  loader: () => import('../pages/mock/reform'),
  loading: Loading
})
const LogarithmicSpiralLine=Loadable({
  loader:()=>import('../pages/function/logarithm/spiralLine'),
  loading:Loading
})

const SimpleMathChart=Loadable({
  loader:()=>import('../pages/function/simpleChart'),
  loading:Loading
})
const EquiangularSpiralLine=Loadable({
  loader:()=>import('../pages/function/equiangular'),
  loading:Loading
})
const ArchimedeanSpiralLine=Loadable({
  loader:()=>import('../pages/function/archimedean'),
  loading:Loading
})
//修改完content.js之后还需要在utils/menu.js里修改目录
const Contents = () => (
  <Content className="content" id="content">
    <Route path="/home" component={Home} />
    <Route path="/follow" component={Follow} />
    <Route path="/tools" component={Tools} />
    <Route path="/music" component={Music} />
    <Route path="/todo" component={Todo} />
    <Route path="/d3" component={Helix} />
    <Route path="/force" component={Force} />
    <Route path="/Fibonacci" component={Fibonacci} />
    <Route path="/Pascal" component={Pascal} />
    <Route path="/Voronoi" component={Voronoi} />
    <Route path="/LogarithmicSpiralLine" component={LogarithmicSpiralLine} />
    <Route path="/SimpleMathChart" component={SimpleMathChart} />
    <Route path="/EquiangularSpiralLine" component={EquiangularSpiralLine} />
    <Route path="/ArchimedeanSpiralLine" component={ArchimedeanSpiralLine} />
    <Route path="/album" component={Album} />
    <Route path="/editor" component={Editor} />
    <Route path="/todoList" component={TodoList} />
    <Route path="/searchEngine" component={Search} />
    <Route path="/waterfall" component={Waterfall} />
    <Route path="/mock" component={Mock} />
    <Route path="/reform" component={Reform} />
  </Content>
)
//这里需要输出的是Contents而不可能是Content
export default Contents