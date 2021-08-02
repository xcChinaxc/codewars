/* Switcheroo

Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.
*/

function switcheroo(x){
  let word = x.split(''),
      swapped = []
  word.forEach((letter, index) => {
    if(letter == 'a'){swapped.push('b')}
    else if(letter == 'b'){swapped.push('a')}
    else {swapped.push('c')}
  })
  
  return swapped.join('')
}