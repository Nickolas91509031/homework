alert("Hello");

function isRound(num) {
  return num % 10 === 0;
}

function getModulo(a, b) {
  return a % b;
}

console.log(getModulo(10, 3));

function getNumber() {
  let firstNum = prompt("Enter first number", "");

  if (firstNum === null) {
    alert("You didn't enter the number");
  } else {
    firstNum = parseInt(firstNum, 10);

    if (isNaN(firstNum)) {
      alert("Wrong number");
    }

    return firstNum;
  }

  return null;
}

let firstNum = getNumber();
let secondNum = getNumber();

if (firstNum !== null && secondNum !== null) {
  console.log(`Остаток от деления ${firstNum} на ${secondNum}: `, getModulo(firstNum, secondNum));
}
