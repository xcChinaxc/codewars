/* Abbreviate a Two Word Name */

/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. The output should be two capital letters with a dot separating them. It should look like this: Sam Harris => S.H */

function abbrevName(name){
  let x = [];
  name.toLocaleUpperCase('en-US').split(" ").forEach(element => {
    x.push( element[0] )
  });
  return `${x[0]}.${x[1]}`
}