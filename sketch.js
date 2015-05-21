// d3.csv('a.csv')
//   .row(function (d) {
//     // return {
//     //   key: d.policyID,
//     //   value: d.construction
//     // }
//     console.log(d)
//   })
//   .get(function (err, rows) {
//     //console.log(rows)
//   })
var width = 200,
  barHeight = 20;

var chart = d3.select('.chart')
  .attr('width', width);

var i = 0;
var data = [];

// d3.csv('a.csv', function(err, d){
//   // var dd = Array.prototype.slice.call(d,0);
//   // // d.forEach(function(dd){
//   // //   console.log(dd)  
//   // // })
//   // console.log(dd)
//   //   console.log(typeof dd === 'array')
//   d.forEach(function(d){

//   })
// })

var map = d3.scale.linear()
  .range([0, width]);

d3.csv('test2.csv', type, function (err, data) {
    if (err) {
      console.error(err);
      return;
    }

    console.log(data)

    map.domain([0, d3.max(data, function (d) {
      return d.value
    })])

    chart.attr('height', barHeight * data.length);
    var bar = chart.selectAll('g')
      .data(data)
      .enter()
      .append('g')
      .attr('transform', function (d, i) {
        return 'translate(0, ' + i * barHeight + ')'
      })

    bar.append('rect')
      .attr('width', function (d) {
        return map(d.value)
      })
      .attr('height', barHeight - 1)
      .style('fill', 'red')

    bar.append('text')
      .attr('width', function (d) {
        return map(d.value) - 3
      })
      .attr('x', function (d) {
        return map(d.value) - 4
      })
      .attr('y', barHeight - 10)
      .attr("dy", ".35em")
      .text(function (d) {
        return d.value
      })

  })
  // d3.json('test.json', function(d){
  //   console.log(d.data.items)
  // })

function type(d) {
  d.value = +d.value; // coerce to number
  return d;
}