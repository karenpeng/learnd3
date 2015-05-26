var data = [
  {
    key: 'karen',
    value : 2,
    value2: 4
  },
  {
    key: 'john',
    value: 8,
    value2: 5
  },
  {
    key: 'ben',
    value: 4,
    value2: 3
  }
]

var datas = [
  [
    {
      key: 'karen',
      value : 2,
      value2: 5
    },
    {
      key: 'john',
      value: 8,
      value2: 8
    },
    {
      key: 'ben',
      value: 4,
      value2: 2
    }
  ],
  [
    {
      key: 'mike',
      value: 5,
      value2: 4
    },
    {
      key: 'karen',
      value : 2,
      value2: 7
    },
    {
      key: 'kelly',
      value: 6,
      value2: 2
    },
    {
      key: 'ben',
      value: 7,
      value2: 5
    }
  ],
  [
    {
      key: 'mike',
      value: 5,
      value2: 5
    },
    {
      key: 'jane',
      value: 6,
      value2: 1
    }
  ],
  [
    {
      key: 'george',
      value: 10,
      value2: 3
    },
    {
      key: 'ikea',
      value: 1,
      value2: 6
    },
    {
      key: 'mike',
      value: 5,
      value2: 7
    },
    {
      key: 'jane',
      value: 6,
      value2: 8
    }
  ],
  [
    {
      key: 'john',
      value: 5,
      value2: 2
    },
    {
      key: 'kelly',
      value : 2,
      value2: 1
    },
    {
      key: 'karen',
      value: 6,
      value2: 3
    },
    {
      key: 'ben',
      value: 7,
      value2: 4
    },
    {
      key: 'mike',
      value: 7,
      value2: 2
    }
  ],
]

/*
define the svg
*/
var svg = d3.select('body').append('svg')

var margin = {
  top: 20,
  right: 30,
  bottom: 30,
  left: 40
}

var width = 960 - margin.left - margin.right
var height = 500 - margin.top - margin.bottom

svg
.attr('width', 960)
.attr('height', 600)
.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

/*
set up x and y bound and axis from destinational graph size
 */
var x = d3.scale.ordinal()
.rangeRoundBands([0, width])

var y = d3.scale.linear()
.range([height, 0])

var xAxis =  d3.svg.axis()
.scale(x)
.orient('bottom')

var yAxis = d3.svg.axis()
.scale(y)
.orient('left')
.ticks(3)

svg.append('g')
.attr('transform',  'translate(' + margin.left + ', ' + height + ')')
.attr('id', 'xAxis')
.attr('class', 'axis')
.append('text')
.attr('transform', 'translate(' + width +',0)')
.text('name')


svg.append('g')
.attr('transform',  'translate(' + margin.left + ', ' + margin.top +')')
.attr('id', 'yAxis')
.attr('class', 'axis')
.append('text')
.attr('transform', 'rotate(-90)')
.attr('transform', 'translate(0, 10)')
.text('value2')


function update(data){
  /*
  now the data comes, you could set x and y bound from data and also axis
   */
  var interval = width / data.length
  
  var maxHeight = d3.max(data, function(d){
    return d.value2
  })

  var maxR = d3.max(data, function(d){
    return d.value
  })

  x
  .domain(data.map(function(d){
    return d.key;
  }))

  y
  .domain([-maxR, maxHeight + maxR])
  .range([height, 0])

  var r = d3.scale.linear()
  .domain([0, maxR])
  .range([0, interval / 2])


  d3.select('#xAxis').call(xAxis)

  d3.select('#yAxis').call(yAxis)


  /*
  add content in it
   */
  var bubbles = svg.selectAll('.bubble')
  .data(data, function(d){
    return d.key
  })

  //exit
  var bubbleExit = bubbles
  .exit()
  .remove()

  var circles = bubbles.selectAll('circle')
  .style('fill', 'black')

  bubbles
  .transition()
  .attr('transform', function(d, i){
    return 'translate(' + interval * i + ', 0)'
  })

  //enter
  var bubbleEnter = bubbles
  .enter()
  .append('g')
  .attr('class', 'bubble')
    .attr('transform', function(d, i){
    return 'translate(' + interval * i + ', 0)'
  })

  bubbleEnter
  .append('circle')
  .style('fill', 'blue')

  bubbleEnter
  .append('text')

  //update and enter
  // bubbles
  // .attr('transform', function(d, i){
  //   return 'translate(' + interval * i + ', 0)'
  // })

  circles = bubbles.selectAll('circle')
  .attr('r', function(d){
    console.log(this)
    return r(d.value) / 2
  })
  .attr('cy', function(d){
    return y(d.value2)
  })
  .attr('cx', function(d){
    return interval / 2
  })

  var texts = bubbles.selectAll('text')
  .attr('y', function(d){
    return y(d.value2)
  })
  .attr('x', function(d){
    return interval / 2
  })
  .style('fill', 'red')
  // .text(function(d){
  //   return d.value2
  // })

}

update(datas[0])

d3.select('#slider').on('click', function(){
  update(datas[this.value])
})

