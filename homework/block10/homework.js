const superImportantArray = [0, 5, 1, 3, 2, 9, 7, 6, 4];

function includes(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

function getMissingElement(superImportantArray) {
  for (let i = 0; i < 10; i++) {
    if (includes(superImportantArray, i) === false) {
      return i;
    }
  }
}

console.log(superImportantArray);
console.log(i);
