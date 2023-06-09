/*const superImportantArray = [9, 2, 4, 5, 7, 0, 8, 6, 1];

function getMissingElement(superImportantArray) {
  for (let i = 0; i < 10; i++) {
    if (!superImportantArray.includes(i)) {
      return i;
    }
  }
}

console.log(getMissingElement(superImportantArray));
*/

walk = ["n", "s", "w", "e", "n", "s", "w", "e", "n", "s"];

console.log(walk);

function isValidWalk(walk) {
  for (i = 0; i < walk.length; i++) {
    if ((i = 9)) {
      return true;
    }
    return false;
  }
  return false;
}

console.log(isValidWalk(walk));
