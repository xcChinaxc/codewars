/* Drink about */

/* Make a function that receive age, and return what they drink. */

function peopleWithAgeDrink(old) {
  return old < 14 ? `drink toddy` : (old < 18 ? `drink coke` : (old < 21 ? `drink beer` : `drink whisky`))
};