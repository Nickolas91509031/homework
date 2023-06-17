//#1
const superImportantArray = [9, 2, 4, 5, 7, 0, 8, 6, 1];

console.log(superImportantArray);

function getMissingElement(superImportantArray) {
  for (let i = 0; i < 10; i++) {
    if (!superImportantArray.includes(i)) {
      return i;
    }
  }
}

console.log(getMissingElement(superImportantArray));

//#2

var questions = [
  {
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
  },
  {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0,
  },
];

console.log(questions);

questions.forEach(function (i) {
  i.userAnswer = null;
});

console.log(questions);

//#4

const walk = ["n", "s", "w", "e", "n", "s", "w", "e", "n", "s"];

function isValidWalk(walk) {
  let north = 0;
  let south = 0;
  let west = 0;
  let east = 0;

  if (walk.length !== 10) {
    return false;
  }

  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === "n") {
      north = 1;
    } else if (walk[i] === "s") {
      south = 1;
    } else if (walk[i] === "w") {
      west = 1;
    } else if (walk[i] === "e") {
      east = 1;
    }
  }

  return north === south && west === east;
}

console.log(isValidWalk(walk));
