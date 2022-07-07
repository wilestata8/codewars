// Directions
Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

// Answer
// find the square of a number math.sq method
// round solution of square 
// use math.pow to return to exponitial 

function nearestSq(n){
  return Math.pow(Math.round(Math.sqrt(n)),2);
  }
