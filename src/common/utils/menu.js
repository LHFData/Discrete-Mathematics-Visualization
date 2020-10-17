const allMenu = [
  {
    name: '首页',
    url: 'home',
    icon: 'home'
  },
  {
    name: 'gallery',
    url: 'pic',
    icon: 'edit',
    children: [{name:'Fibonacci',url:'Fibonacci'},{name:'Voronoi',url:'Voronoi'},{ name: 'ForceGraph', url: 'force' }, { name: 'Canvas', url: 'waterfall' },{name: 'PascalTriangle',url: 'Pascal'}]
  },
  {
    name: 'List',
    url: 'music',
    icon: 'bars',
    children: [{ name: 'ListDemo', url: 'music' }]
  },
  {
    name: 'Tools',
    url: 'tool',
    icon: 'tool',
    children: [
      { name: 'LogarithmicSpiralLine', url: 'LogarithmicSpiralLine' },
      { name: 'SimpleMathChart', url: 'SimpleMathChart' },
      { name: 'EquiangularSpiralLine', url: 'EquiangularSpiralLine' },
      { name: 'ArchimedeanSpiralLine', url: 'ArchimedeanSpiralLine' }
    ]
  },
  {
    name: 'search',
    url: 'search',
    icon: 'search',
    children: [{ name: 'search engine', url: 'searchEngine' }]
  },
  /* {
    name: 'mock',
    url: 'dev',
    icon: 'apple-o',
    children: [
      { name: 'mock', url: 'mock' },
      { name: '双向绑定', url: 'reform' },
      { name: 'more', url: 'todo' }
    ]
  },
 {
    name: '项目地址',
    url: 'follow',
    icon: 'heart-o'
  } */
]

export default allMenu
