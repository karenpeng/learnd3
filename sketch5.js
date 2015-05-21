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

  //exit
  text.exit().remove()

  //update
  text
  .attr('class', 'update')

  //enter
  text
  .enter().append('text')
  .attr('class', 'enter')
  .attr('x', function(d, i){return i *  30})
  .attr('dy', '.35em')


  //enter + update???
  text
  .text(function(d){return d;})

}

update(alphabet)

setInterval(function(){
  var ran = Math.round(Math.random()*26);
  var arr = alphabet.slice(Math.min(ran, 26 - ran), Math.max(ran, 26 - ran));
  console.log(ran, arr)
  update(arr)
}, 1000)


// Shuffles the input array.
function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m], array[m] = array[i], array[i] = t;
  }
  return array
}
