/* Are You Playing Banjo? */

/* Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:
name + " plays banjo" 
name + " does not play banjo"

Names given are always valid strings. */

// P - string
// R - input and string
// E - areYouPlayingBanjo("Ringo"), "Ringo plays banjo"
// P - conditional statement

function areYouPlayingBanjo(name) {
    return name.charAt(0).toLowerCase().includes('r') ? `${name} plays banjo` : `${name} does not play banjo`
  }