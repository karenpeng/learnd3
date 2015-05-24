var width = 460,
  height = 500;
// var y = d3.scale.linear()
//   .range([0, height]);
var y = d3.scale.linear()
.range([0, height])

var chart = d3.select('.chart')
  .attr('width', width)
  .attr('height', height);

function renew(url){
  d3.csv(url, type, function (err, data) {

    console.log(data)
    if (err) {
      console.error(err);
      return;
    }

    y.domain([0, d3.max(data, function (d) {
      return d.value
    })])

    var barWidth = width / data.length;

    var bar = chart.selectAll('g')
    .data(data)

    bar
    .exit()
    .remove()

    bar
    .attr('transform', function(d, i){
      return 'translate(' + i * barWidth + ',0)'
    })
    .style('fill', 'black')

    var barEnter = bar
    .enter()
    .append('g')
    .attr('transform', function (d, i) {
      return 'translate(' + i * barWidth + ', 0)'
    })
    .style('fill', 'green')

    barEnter
    .append('rect')
    // .attr("height", function (d) {
    //   return y(d.value);
    // })
    // .attr("width", barWidth - 10)
    // .attr("y", function (d) {
    //   return height - y(d.value);
    // })
    barEnter
    .append('text')


    var rect = d3.selectAll('g').selectAll('rect')
    .attr("height", function (d) {
      return y(d.value);
    })
    .attr("width", barWidth - 10)
    .attr("y", function (d) {
      return height - y(d.value);
    })

    var texts = d3.selectAll('g').selectAll('text')
    .attr('x', (barWidth - 10) / 2 )
    .attr('y', function (d) {
      return height - y(d.value);
    })
    .attr('dy', '1.5em')
    .attr('dx', '1.2em')
    .text(function (d) {
      return d.value
    })


  })

  function type(d) {
    d.value = +d.value; // coerce to number
    return d;
  }

}

var index = 0
d3.select('svg').on('click', function(){
  console.log('---------------')
  renew(files[index])
  index++
  if(index > 3) index = 0
})

var files = [
  './e.csv',
  './b.csv',
  './c.csv',
  './d.csv',
]


d3.select('#slider').on('click', function(){
  renew(files(this.value))
})