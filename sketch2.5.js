ok = 0;
var notOk;

console.log(ok);
console.log(notOk);

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

    if (err) {
      console.error(err);
      return;
    }

    y.domain([0, d3.max(data, function (d) {
      return d.value
    })])

    var barWidth = width / data.length

    var bar = chart.selectAll('g')
    .data(data, function(d){
      //这样写d.value是唯一的 因为作为key与元素对应
      //如果有重复的d.value从第二个开始就没掉了
      return d.value
    })

    console.log(data.length)

    bar
    .attr('transform', function(d, i){
      console.log('update')
      console.log(d.value, i)
      return 'translate(' + i * barWidth + ',0)'
    })
    .style('fill', 'black')

    var barEnter = bar
    .enter()
    .append('g')
    .attr('transform', function (d, i) {
      console.log('enter')
      console.log(d.value, i)
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


    //bar now represens both update and enter g
    var rect = bar.selectAll('rect')
    .attr("height", function (d) {
      return y(d.value);
    })
    .attr("width", barWidth - 10)
    .attr("y", function (d) {
      return height - y(d.value);
    })

    var texts = bar.selectAll('text')
    .attr('x', (barWidth - 10) / 2 )
    .attr('y', function (d, i) {
      console.log('wat')
      console.log(i)
      return height - y(d.value);
    })
    .attr('dy', '1.5em')
    .attr('dx', '1.2em')
    .text(function (d) {
      return d.value
    })

    bar
    .exit()
    .style('fill', 'red')
    .style('opacity', function(d, i){
      console.log('exit')
      console.log(d.value, i)      
    })
    .transition()
    .style('opacity', 0)
    .remove()


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

d3.select('#slider').on('change', function(){
  renew(files[this.value])
})

var test = d3.selectAll('div').select('h2')
console.log(test)