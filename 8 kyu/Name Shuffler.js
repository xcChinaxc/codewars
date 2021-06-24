/* Name Shuffler

Write a function that returns a string in which firstname is swapped with last name.   
*/

function nameShuffler(str){
  let x = str.split(' ')
  return `${x[1]} ${x[0]}`
}