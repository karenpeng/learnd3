var data =  [
  [1, 2, 4, 5, 6],
  [0, 1, 2, 3, 4, 5, 6, 7, 8],
  [0, 1, 4, 5, 6, 8],
  [2, 3, 5, 6, 9, 8, 9, 9, 9, 9],
  [8]
]
// var data3 = [
//   {key: xx, value: 13435}, 
//   {key: yy, value: 4646}, 
//   {key: zz, value: 2357}, 
// ]

/*
1. bubble chart
*/
var svg = d3.select('svg');
svg
.attr('width', 1000)
.attr('height', 1000)
.append('circle')


function render(_data){

var circle = svg.selectAll('circle')
.data(_data)
// circle
// .text(function(d) {return d;})
// .attr('x', function(d, i){return i * 100 + 50;})
// .attr('y', 60)
circle
.attr('cy', 60)
.attr('cx', function(d, i){return i * 100 + 50;})
.attr('r', 0)
.transition()
.attr('r', function(d){return d * 10;})

circle.exit()
.transition()
.attr('r', 0)
.remove()

circle.enter().append('circle')
.attr('cy', 60)
.attr('cx', function(d, i){
  return i * 100 + 50;
})
.attr('r', 0)
.transition()
.attr('r', function(d){return d * 10;})
.style('fill', 'red')


// circle.text(function(d){return d;})

// circle.enter().append('text')
// .text(function(d){return d;})
// .attr('y', 60)
// .attr('x', function(d, i){return i * 100 + 50;})

//console.log(circle)

}

i = 0
function go(){
  if(i >= data.length){ i = 0 }
  console.log(i)
  render(data[i])
  i++
}

d3.select('svg').on('click', go)



// circle
// .data(data)
// .exit().remove()

/*
2. bar chart
*/
// var map = d3.scale.linear
// .domain([0, d3.max(data)])
// .range()