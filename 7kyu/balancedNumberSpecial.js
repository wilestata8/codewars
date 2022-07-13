//Directions
/*alanced number is the number that * The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal Given a number, Find if it is Balanced or not .*.

   */


// Examples
(balanced-num 7) ==> return "Balanced"

(balanced-num 295591) ==> return "Not Balanced"


//Answer
function balancedNum(number){
  let i, result = 0;
  number = number + "";
  for(i = 0; i < number.length / 2 - 1; i++){
      result += +number[i] - +number[number.length - 1 - i];
  }
  return result === 0 ? "Balanced" : "Not Balanced";
}