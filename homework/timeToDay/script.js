const current = new Date();
let monthes = 0;
let years = 0;
let text = "";

const dateInput = prompt("Please enter the date (YYYY-MM-DD)");

const inputDate = new Date(dateInput);
const timeDiff = inputDate.getTime() - current.getTime();

if (isNaN(inputDate)) {
    text = "Something's wrong";
}

else if (timeDiff < 0) {
    years = Math.ceil((timeDiff - 1000*60*60*24*30) / (1000 * 60 * 60 * 24 * 30 * 12));
    monthes = Math.ceil((timeDiff - 1000*60*60*24*30) % (1000 * 60 * 60 * 24 * 30 * 12) / (1000 * 60 * 60 * 24 * 30));

    text = "That's was " + (-years) + " years and " + (-monthes) + " monthes old";
}

else {
    years = Math.ceil((timeDiff - 1000*60*60*24*30) / (1000 * 60 * 60 * 24 * 30 * 12));
    monthes = Math.ceil((timeDiff - 1000*60*60*24*30) % (1000 * 60 * 60 * 24 * 30 * 12) / (1000 * 60 * 60 * 24 * 30));

    text = "For your date left " + (years) + " years and " + (monthes) + " monthes";
}

document.getElementById("date").innerHTML = text;
