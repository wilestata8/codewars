//Directions
//*Write a function which calculates the average of the numbers in a given list.Note: Empty arrays should return 0.*/


//Answer
const find_average = (arr) => !arr || arr.length === 0 ? 0
:arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
