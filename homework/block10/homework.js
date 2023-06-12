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

//#3

var birthday = [January, February, March, April, May, June, July, August, September, October, November, December, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(birthday);

function getVillainName(birthday) {
  firstNames = [
    "The Evil",
    "The Vile",
    "The Cruel",
    "The Trashy",
    "The Despicable",
    "The Embarrassing",
    "The Disreputable",
    "The Atrocious",
    "The Twirling",
    "The Orange",
    "The Terrifying",
    "The Awkward",
  ];
  lastNames = ["Mustache", "Pickle", "Hood Ornament", "Raisin", "Recycling Bin", "Potato", "Tomato", "House Cat", "Teaspoon", "Laundry Basket"];
  return firstNames[birthday.getMonth()] + " " + lastNames[birthday.getDate() % 10];
}

console.log(getVillainName(birthday));

//#4

walk = ["n", "s", "w", "e", "n", "s", "w", "e", "n", "s"];

console.log(walk);

function isValidWalk(walk) {
  if (walk.lenth = 9) {
    if (walk.find('n') = walk.find('s') || walk.find(w) = walk.find('e')) {
      return true;
    }
  }

console.log(isValidWalk(walk));
