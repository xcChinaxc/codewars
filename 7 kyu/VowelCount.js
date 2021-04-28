/* Vowel Count */

/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

// P - string
// R - number
// E - getCount("abracadabra"), 5
// P - matchAll() using a regexp

function getCount(str) {
  const regexp = /[aeiou]/g;
  let vowelsCount = [...str.matchAll(regexp)].length;
  return vowelsCount;
}