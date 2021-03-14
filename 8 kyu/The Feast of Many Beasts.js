/* The Feast of Many Beasts  */

function feast(beast, dish) {
    return beast.startsWith(dish.charAt(0)) && beast.endsWith(dish.charAt(dish.length - 1)) ? true : false; 
  }