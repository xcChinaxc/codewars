/* Squash the bugs  */

function warnTheSheep(queue) {
    let wolfLocation = queue.length - queue.findIndex(wolf => wolf === "wolf");
    if( wolfLocation === 1 ) { return "Pls go away and stop eating my sheep"}
    else {return `Oi! Sheep number ${wolfLocation-1}! You are about to be eaten by a wolf!`}
  }