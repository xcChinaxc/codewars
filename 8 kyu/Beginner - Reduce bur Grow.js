/* Beginner - Reduce but Grow */

function grow(x){
  reducer = (accumlator, currentValue) => accumlator * currentValue;
  return x.reduce(reducer);
}