const current = new Date();
let left = 0;
let text = "";

const dateInput = prompt("Please enter the date (YYYY-MM-DD)");

const inputDate = new Date(dateInput);
const timeDiff = inputDate.getTime() - current.getTime();

if (timeDiff < 0) {
    left = Math.ceil((timeDiff - 1000*60*60*24*30) / (1000 * 60 * 60 * 24 * 30 * 12));

    text = "That's was " + (-left) + " years old";
}

else {
    left = Math.ceil((timeDiff - 1000*60*60*24*30) / (1000 * 60 * 60 * 24 * 30));

    text = "For your date left " + left + " monthes";
}

document.getElementById("date").innerHTML = text;
