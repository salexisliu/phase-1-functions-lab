
function distanceFromHqInBlocks(pickupLocation){
let startLocation = 42;
let blocks = Math.abs(pickupLocation - startLocation);
return blocks;
}

function distanceFromHqInFeet(value) {
  return distanceFromHqInBlocks(value) * 264
}

function distanceTravelledInFeet(start, end){
  return Math.abs(end - start ) * 264
}

function calculatesFarePrice(start, end) {
  let feet = (distanceTravelledInFeet(start, end)) 
  if (feet > 2500) {
    return 'cannot travel that far'
   } else if (feet > 400 && feet < 2000) {
    return ((feet - 400) * .02)
   } else if (feet > 2000) {
    return 25
   } else {
    return 0
   }
  }
  