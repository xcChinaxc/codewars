/* Can we divide it? */

function isDivideBy(number, a, b) {
  return (Math.abs(number % a) || Math.abs(number % b)) === 0;
}