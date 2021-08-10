/* Special Number (Special Numbers Series #5)

A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

Given a number determine if it special number or not . 
*/

function specialNumber(n){
  let nums = n.toString().split(''), 
      result = []
  nums.forEach(num => result.push('012345'.indexOf(num) == -1))
  return result.includes(true) ? 'NOT!!' : 'Special!!'
}