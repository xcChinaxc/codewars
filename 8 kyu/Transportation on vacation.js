/* Transportation on vacation  */

function rentalCarCost(d) {
  let carRentalCosts = 40 * d;
  if(d >= 7){
    return carRentalCosts - 50;
  }
  if(d >= 3){
    return carRentalCosts - 20;
  }
  else {return carRentalCosts}
}