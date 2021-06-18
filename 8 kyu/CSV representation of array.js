/* CSV representation of array

Create a function that returns the CSV representation of a two-dimensional numeric array.
*/

// Attempt Two
function toCsvText(array) {
  return array.join('\n')
}

// Attempt One
function toCsvText(array) {
  let newArr = []
  
  array.forEach( el => {
    newArr.push(el.toString() + '\n' )
  })
  
  let csv = newArr.join('')
  return csv.slice(0, csv.length - 1)
}