//Directions
/*Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.    */


//examples
[
  "  *  ",
  " *** ", 
  "*****"
]


//Answer
var tower = [];
for (var i = 0; i < nFloors; i++) {
tower.push(" ".repeat(nFloors - i - 1)
+ "*".repeat((i * 2)+ 1)
+ " ".repeat(nFloors - i - 1))
}
return tower;