/* Name Shuffler

Write a function that returns a string in which firstname is swapped with last name.   
*/

// Attempt Two
function nameShuffler(str){
    return str.split(" ").reverse().join(" ")
}

// Attempt One
function nameShuffler(str){
  let x = str.split(' ')
  return `${x[1]} ${x[0]}`
}