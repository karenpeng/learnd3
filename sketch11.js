var svg = d3.select('svg');
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
];
    
var width = 400;
var height = 400;
    
svg.attr('width',width).attr('height', height).style('background-color','yellow')

var x = d3.scale.ordinal()
    .rangeBands([0, width])

var y = d3.scale.linear()
    .range([0, height])

var c = d3.scale.linear()
    .range([0, 360])

//xAxis, yAxis
    
function update(_data){

var interval = width / _data.length

var maxHeight = d3.max(_data, function(d){
    return d.value2})

var maxValue = d3.max(_data, function(d){
    return d.value;})
var minValue = d3.min(_data, function(d){
    return d.value;})

x.domain(d3.map(function(d){return d.key;}))
y.domain([0, maxHeight])
c.domain([minValue, maxValue])

var chart = svg.selectAll('g')
.data(_data, function(d){
    return d.key
})

  chart
  .transition()
    .attr('transform', function(d, i){
       return 'translate('+ i * interval+',0)'
     })

   var chartExit =chart
    .exit()
    .remove()
    
   var chartEnter =chart
    .enter()
    .append('g')
   .attr('transform', function(d, i){
       return 'translate('+ i * interval+',0)'
     })
    
   chartEnter
    .append('rect')

  chartEnter
    .append('text')

  // chart
  //    .attr('transform', function(d, i){
  //      return 'translate('+ i * interval+',0)'
  //    })

   
   var rects = d3.selectAll('rect')
    .attr('width', interval - 1)
    .attr('height', function(d){
      return y(d.value2)
    })
    .style('fill', function(d){
       return 'rgb(' + c(d.value) +',0,0)'
     })
   .attr('y', function(d){
       return height - y(d.value2)
   })
 

}
var index = 0
d3.select('svg').on('click', function(){
    update(datas[index])
    index ++
    if(index > datas.length -1 ) index = 0
})
update(datas[0])