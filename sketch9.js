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
  
]

var svg = d3.select('body').append('svg')
var barWidth = 40;
var barHeightScala = 20;

var bar = svg.selectAll('g')
.data(data)
.enter()
.append('g')
.attr('transform', function(d, i){
  return 'translate(' + i * barWidth + ', 0)';})

var barHeight = d3.max(data, function(d){
  return d.value
})

bar
.append('rect')
.attr('height', function(d){
  return d.value * barHeightScala
})
.attr('width', barWidth - 1)
.attr('y', function(d){
  return (barHeight - d.value) * barHeightScala;
})
.style('fill', 'green')

bar
.append('text')
.style('fill', 'white')
.style('font-size', '10px')
.attr('y', barHeight * barHeightScala)
.attr('dx', '0.4em')
.attr('dy', '-2em')
.text(function(d){
  return d.key
})