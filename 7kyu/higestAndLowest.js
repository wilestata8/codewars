//Directions

/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.*/

//Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

//Answer
function highAndLow(numbers){
  const arr = numbers.split(" ")
     let maxNum = arr[0]
     let minNum = arr[0]
 
     for(let num of arr) {
         if(Number(num) > maxNum) {
             maxNum = num
         }
 
         if(Number(num) < minNum) {
             minNum = num
         }
     }
 
     return maxNum + " " + minNum
 }