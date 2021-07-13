/* Middle Me

Write a function that will take a key of X and place it in the middle of Y repeated N times.
*/

function middleMe(N, X, Y){
  return N%2 ? X : `${Y.repeat(N/2)}${X}${Y.repeat(N/2)}`
}