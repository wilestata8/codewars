//Directions
/* Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so: */

// Examples
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 


//Answers
    //Notes
      //function that takes in array (list of multiple elements)
      // sort through array and find "needle"
      //return string "found the needle @ position '  ' "
      // Parmenters :array
      // returns : string w/ template of index
      // psuedo : 1. fliter through array looking for needle index
                // 2. return string w/ position

function findNeedle(haystack) {
    return 'found the needle at position ' + haystack.indexOf('needle');
   }
