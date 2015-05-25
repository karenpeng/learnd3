var matrix = [
[
  [ 8,  9, 10, 11],
  [12, 13, 14, 15],
  [ 0,  1,  2,  3],
  [ 4,  5,  6,  7],
  [12, 13, 14, 15],
  [ 0,  1,  2,  3]
],

[
  [ 4,  5,  6,  7],
  [ 8,  9, 10, 11],
  [12, 13, 14, 15],
  [ 0,  1,  2,  3],
  [12, 13, 14, 15],
  [ 0,  1,  2,  3]
],

[
  [12, 13, 14, 15],
  [ 8,  9, 10, 11],
  [12, 13, 14, 15],
  [ 0,  1,  2,  3],
  [ 4,  5,  6,  7],
  [ 0,  1,  2,  3]
]


];

// var td = d3.selectAll('tdbody tr').selectAll('td')

// td.style('color', function(d, i){
//   return i ? null : 'red'
// })

// var td = d3.selectAll('tbody tr')
// .data(matrix)
// .selectAll('td')
// .attr('html', function(d, i){
//   console.log(d)
//   return d;
// })

/*
var td = d3.selectAll("tbody tr")
    .data(matrix)
  .selectAll("td")
    .data(function(d, i) { return d; }); // d is matrix[i]
*/
function update(_data){

  var td = d3.select('tbody').selectAll("tr")
      .data(_data, function(d, i){
        console.log(d, i)
      })
    .selectAll("td")
      .data(function(d, i) { 
        console.log(d, i)
        return d; 
      })// d is matrix[i]


  d3.select('tbody').selectAll('tr')
  .data(_data)
.enter()
  .append('tr')

  //.apend('td')
  //
  var td = d3.select('tbody').selectAll("tr")
  .selectAll('td')
  .data(function(d, i){
    console.log(d)
    return d;
  })
  .text(function(d){
  return d;
})

   td = d3.select('tbody').selectAll("tr")
  .selectAll('td')
  .data(function(d, i){
    console.log(d)
    return d;
  })
  .text(function(d){
  return d;
})
.enter()
.append('td')
  .text(function(d){
  return d;
})

 //
  var td = d3.select('tbody').selectAll("tr")
  .selectAll('td')
  .data(function(d, i){
    console.log(d)
    return d;
  })
  .exit()
  .remove()

  
   td = d3.select('tbody').selectAll("tr")
  .selectAll('td')
  .data(function(d, i){
    console.log(d)
    return d;
  })
.exit()
.remove()

  //remember!!! enter and append
  //has to behind data
// var tdd = d3.select('tbody').selectAll('tr')
// .selectAll('td')
// .data(function(d){
//   return d;
// })
// .text(function(d){
//   return d;
// })

// tdd
// .data(function(d, i){
//   return d;
// })
// .enter()
// .append('td')
// .text(function(d){return d;})

// tdd
// .data(function(d, i){
//   return d;
// })
// .exit()
// .remove()
}

var i = 0
d3.select('table').on('click', function(){
  update(matrix[i])
  console.log('ouch')
  i++
  if(i > matrix.length -1 ) i = 0
})
/*    
var tr = d3.selectAll("tbody tr")
    .data(matrix, function(d, i){
      //console.log(this)
      console.log(d)
    })
.selectAll('td')
  .data(function(d, i) { 
    //console.log(this)
    console.log(d)
    return d; 
   }) // d is matrix[i]
*/
