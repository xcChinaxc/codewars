/* Difference of Volumes of Cuboids  */

function findDifference(a, b) {
  return Math.abs(a.reduce( (accumulator, currentValue) => accumulator * currentValue) - b.reduce( (accumulator, currentValue) => accumulator * currentValue))
}