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
  [ 0,  1,  2,  3]
]


];

function addKey(ar){
  var newArr = []
  var i = 0
  ar.forEach(function(el){
      newArr.push( {
        key : i,
        data: el
      }
    )
    i++
  })
  //console.log(ar)
  return newArr
}

matrix = addKey(matrix)
//console.log(matrix)


var chart = d3.select('tbody').selectAll('tr')
.data(matrix, function(d){
  //console.log(d)
  return d.key
})
.selectAll('td')
.data(function(d){
  return d.data
})
.text(function(d){
  return d.data
})

var chart = d3.select('tbody').selectAll('tr')
.data(matrix, function(d){
  console.log(d)
  return d.key
})
.enter()
.append('tr')
.selectAll('td')
.data(function(d){
  console.log(d)
  return d.data
})
.enter()
.append('td')
.text(function(d){
  return d.data
})




//d3.select('tbody').selectAll('tr')
