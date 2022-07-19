//Directions
/*Four men, a, b, c and d are standing in a line, one behind another.

There's a wall between the first three people (a, b and c) and the last one (d).

The men a, b and c are lined up in order of height, so that:

person a can see the backs of b and c
person b can see the back of c
person c can see just the wall
There are 4 hats, 2 black and 2 white. Each person is given a hat. None of them can see their own hat, but person a can see the hats of b and c, while person b can see the hat of person c. Neither c nor d can see any hats.

Once a person figures out the color of their hat, they shout it.*/



//Answers
function guessHatColor(a,b,c,d) {
  return b === c ? 1 : 2;  
}