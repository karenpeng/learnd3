var data = [
  {
    key: 'karen',
    value : 2
  },
  {
    key: 'john',
    value: 8
  },
  {
    key: 'ben',
    value: 4
  }
]

var datas = [
  [
    {
      key: 'karen',
      value : 2
    },
    {
      key: 'john',
      value: 8
    },
    {
      key: 'ben',
      value: 4
    }
  ],
  [
    {
      key: 'mike',
      value: 5
    },
    {
      key: 'karen',
      value : 2
    },
    {
      key: 'kelly',
      value: 6
    },
    {
      key: 'ben',
      value: 7
    }
  ],
  [
    {
      key: 'mike',
      value: 5
    },
    {
      key: 'jane',
      value: 6
    }
  ]
]

var width = 10000
var height = 300
var svg = d3.select('body').append('svg')
.attr('width', 10000)
.attr('height', height)

var barWidth = 40

var barHeightScala = d3.scale.linear()
.range([0, height])

function update(data){

  barHeightScala.domain([0, d3.max(data, function(d){
    return d.value
  })])

  var barHeight = d3.max(data, function(d){
    return d.value
  })

  var bar = svg.selectAll('g')
    .data(data, function(d){
      console.log(d)
      return d.key
    })

  // bar
  // .attr('transform', function(d, i){
  //   return 'translate(' + i * barWidth + ', 0)' 
  // })

  bar.selectAll('rect')
  .style('fill', 'black')

  var barEnter = bar
  .enter()
  .append('g')

  barEnter
  .append('rect')
  .style('fill', 'blue')

  barEnter
  .append('text') 

  bar
  .attr('transform', function(d, i){
    return 'translate(' + i * barWidth + ', 0)' 
  })

  var rects = d3.selectAll('rect')
    .attr('height', function(d){
      return barHeightScala(d.value)
    })
    .attr('width', barWidth - 1)
    .attr('y', function(d){
      return barHeightScala(barHeight - d.value)
    })

  var texts = d3.selectAll('text')
    .style('fill', 'white')
    .style('font-size', '10px')
    .attr('y', barHeightScala(barHeight))
    .attr('dx', '0.4em')
    .attr('dy', '-2em')
    .text(function(d){
      return d.key
    })

  bar
  .exit()
  .remove()
}

var index = 0
d3.select('svg').on('click', function(){
  console.log('---------------')
  update(datas[index])
  index++
  if(index > 3) index = 0
})

