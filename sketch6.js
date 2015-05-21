var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

var width = 960,
    height = 500;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(32," + (height / 2) + ")");

function update(_data){
  var text = svg.selectAll('text')
  .data(_data, function(d, i){
    // console.log('update')
    // console.log(d, i)
    // 绑定d和元素
    return d
  })
  //.data(_data)
  
  //重排i
  //{ 
  //  i : index,
  //  d : data
  //}
  //i gets recompute here
  //what's left is to assign to element


  //update
  //显示？已有元素的d
  text
  .attr('class', 'update')
  .text(function(d, i){
    console.log('update')
    console.log(d, i)
    return d
  })
  .transition()
  .attr('x', function(d, i){
    return i * 32
  })
 

  //enter
  //把没有绑定的d绑定到新的元素上
  text
  .enter().append('text')
  .attr('class', 'enter')
  .attr('dy', '.35em')
  .attr('y', -60)
  .style('opacity', 0)
  .transition()
  .attr('y', 0)
  .attr('x', function(d, i){
    console.log('enter')
    console.log(d , i)
    return i *  32
  })
  .style('opacity', 1)
  .text(function(d){
    return d
  })

  //exit
  //去除多余元素
  text.exit()
  .transition()
  .attr('y', 60)
  .style('fill', function(d, i){
    console.log('exit')
    console.log(d, i)  
    return 'red'
  })
  .style('fill-opacity', 0)
  .remove()

/*
  //enter + update???
  text
  .text(function(d){return d;})
*/
  //enter + update
  // text
  // .attr('x', function(d, i){
  //   // console.log('recompute')
  //   // console.log(d, i)
  //   return i * 30;
  // })

}

update(alphabet)

// setInterval(function(){
//   var ran = Math.round(Math.random()*26);
//   var arr = alphabet.slice(Math.min(ran, 26 - ran), Math.max(ran, 26 - ran));
//   //console.log(ran, arr)
//   update(arr)
// }, 1000)
var data = [
  ['b', 'd', 'e'],
  ['a', 'b', 'f', 'g']
]
i = 0
function renew(){
  console.log('------------------------')
  // var ran = Math.round(Math.random()*26);
  // var arr = alphabet.slice(Math.min(ran, 26 - ran), Math.max(ran, 26 - ran));
  // //console.log(ran, arr)
  // update(arr)
  var arr = shuffle(alphabet).slice(0, Math.floor(Math.random()*26)).sort()
  //update(data[i++])
  update(arr)
}

d3.select('svg').on('click', renew)


// Shuffles the input array.
function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m], array[m] = array[i], array[i] = t;
  }
  return array
}
