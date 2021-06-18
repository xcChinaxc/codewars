/* Invert values

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
*/

// Attempt Two
function invert(array) {
    return array.map(el => -el)
}

// Attempt One
function invert(array) {
  let newArr = []
  
  array.forEach(el => {
    if(Math.sign(el) == -1){
      newArr.push(Math.abs(el))
    } else {
      newArr.push(el * -1)
    }
  })
  
  return newArr;
}