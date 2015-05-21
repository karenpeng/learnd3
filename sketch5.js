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
  .data(_data)

  //重排d和i
  //{
  //  i : index,
  //  d : data
  //}

  //exit
  //去除多余元素
  text.exit().remove()

  //update
  //按照i把d与元素绑定
  text
  .attr('class', 'update')
   .text(function(d, i){
    console.log('update')
    console.log(d, i)
    return d;
  })

  //enter
  //剩下的i把d与元素绑定
  text
  .enter().append('text')
  .attr('class', 'enter')
  .attr('x', function(d, i){return i *  30})
  .attr('dy', '.35em')
   .text(function(d, i){
    console.log('enter')
    console.log(d, i)
    return d;
  })


  //enter + update???
  // text
  // .text(function(d){return d;})

}

update(alphabet)

function renew(){
  var ran = Math.round(Math.random()*26);
  var arr = alphabet.slice(Math.min(ran, 26 - ran), Math.max(ran, 26 - ran));
  //console.log(ran, arr)
  console.log('---------------------')
  update(arr)
}

d3.select('svg')
.on('click', renew)


// Shuffles the input array.
function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m], array[m] = array[i], array[i] = t;
  }
  return array
}
