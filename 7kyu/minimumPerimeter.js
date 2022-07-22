//Directions
/* A rectangle is can be defined by two factors: height and width.

Its area is defined as the multiplication of the two: height * width.

Its perimeter is the sum of its four edges: height + height + width + width.

It is possible to create rectangles of the same area but different perimeters. For example, given an area of 45, the possible heights, widths and resultant perimeters would be:

(1, 45) = 92

(9, 5) = 28

(15, 3) = 36

The task is to write a function that, given an area as a positive integer, returns the smallest perimeter possible that is also an integer.
*/
//Notes
area = len x witdth
Perm = h + h+ w+ w
//Example
Input range:
1 <= area <= 5 x 10 ^ 10


// answer
function minimumPerimeter(num) {
  let min = 0;

  for (let i = 0; i * i <= num; i++) {
    if (num % i === 0) {
      min = 2 * (i + (num / i));

      if (!(i === num / i)) {
        if (min > 2 * (i + (num / i))) {
          min = 2 * (i + (num / i));
        }
      }
    }
  }

  return min;
}