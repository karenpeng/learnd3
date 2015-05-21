var width = 460,
  height = 500;
var y = d3.scale.linear()
  .range([0, height]);

var chart = d3.select('.chart')
  .attr('width', width)
  .attr('height', height);

d3.csv('test2.csv', type, function (err, data) {
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
    .enter()
    .append('g')
    .attr('transform', function (d, i) {
      return 'translate(' + i * barWidth + ', 0)'
    });

  bar.append('rect')
    .attr("height", function (d) {
      return y(d.value);
    })
    .attr("y", function (d) {
      return height - y(d.value);
    })
    .attr("width", barWidth - 1);

  bar.append('text')
    .attr('x', barWidth - 10)
    .attr('y', function (d) {
      return height - y(d.value);
    })
    .attr('dy', '.75em')
    .text(function (d) {
      return d.value
    })

})

function type(d) {
  d.value = +d.value; // coerce to number
  return d;
}