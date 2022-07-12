//Directions
/*Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number..*/

//Example
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

//Answer
/*P.R.E.P
Array of numbers passed throught the function
return aray of numbers from max to min
e.g 34567 output 76543
    470234 output 744320
// split the array into indiviual chracters
// filter through find max to min
// join indiviuals back to one singel array*/


function descendingOrder(n){
  return Number(n.toString().split('').sort((a,b)=> b-a).join(''));
  }