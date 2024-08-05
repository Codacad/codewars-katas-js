import { arrayDiff } from "./katas/array_diff.js";
import {openOrSenior} from "./katas/open_senior.js"
import {disemvowel} from "./katas/remove_vowels.js"

// console.log(arrayDiff([1, 2], [1]));
// console.log(arrayDiff([1, 2, 2], [1]));
// console.log(arrayDiff([1, 2, 2], [2]));
// console.log(arrayDiff([1, 2, 2], []));
// console.log(arrayDiff([], [1, 2]));
// console.log(arrayDiff([1, 2, 3], [1, 2]));

console.log(
    openOrSenior([
      [18, 20],
      [45, 2],
      [61, 12],
      [37, 6],
      [21, 21],
      [78, 9],
    ])
  );
  

console.log(
    disemvowel(
      "Hello, Dear I am the boy to accept your proposal to work with you"
    )
  );