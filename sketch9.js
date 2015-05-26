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
  ],
  [
    {
      key: 'george',
      value: 10
    },
    {
      key: 'ikea',
      value: 1
    },
    {
      key: 'mike',
      value: 5
    },
    {
      key: 'jane',
      value: 6
    }
  ],
  [
    {
      key: 'john',
      value: 5
    },
    {
      key: 'kelly',
      value : 2
    },
    {
      key: 'karen',
      value: 6
    },
    {
      key: 'ben',
      value: 7
    },
    {
      key: 'mike',
      value: 7
    }
  ],
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

  bar
  .exit()
  .remove()

  bar
  .transition()
  .delay(100)
  .attr('transform', function(d, i){
    console.log(i)
    return 'translate(' + i * barWidth + ', 0)' 
  })

  // bar
  // .attr('transform', function(d, i){
  //   return 'translate(' + i * barWidth + ', 0)' 
  // })

  //update
  bar.selectAll('rect')
  .style('fill', 'black')

  //enter
  var barEnter = bar
  .enter()
  .append('g')
  .attr('transform', function(d, i){
    return 'translate(' + i * barWidth + ', 0)' 
  })

  barEnter
  .append('rect')
  .style('fill', 'blue')

  barEnter
  .append('text')
  .attr('class', 'name')

  barEnter
  .append('text')
  .attr('class', 'value')

  //update and enter
  // bar  
  // //.transition()
  // .attr('transform', function(d, i){
  //   return 'translate(' + i * barWidth + ', 0)' 
  // })

  var rects = d3.selectAll('rect')
    .attr('height', function(d){
      return barHeightScala(d.value)
    })
    .attr('width', barWidth - 1)
    .attr('y', function(d){
      return barHeightScala(barHeight - d.value)
    })

  var texts = d3.selectAll('g').select('text')
    .style('fill', 'white')
    .style('font-size', '10px')
    .attr('y', barHeightScala(barHeight))
    .attr('dx', '0.4em')
    .attr('dy', '-2em')
    .text(function(d){
      return d.key
    })

  var text2 = d3.selectAll('.value')
    .style('fill', 'white')
    .style('font-size', '10px')
    .attr('y', function(d){
      return barHeightScala(barHeight - d.value)
    })
    .attr('dx', '1.4em')
    .attr('dy', '2em')
    .text(function(d){
      return d.value
    })

}

var index = 0
d3.select('svg').on('click', function(){
  console.log('---------------')
  update(datas[index])
  index++
  if(index > datas.length-1) index = 0
})

