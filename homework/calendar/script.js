const currentDay = new Date();
const newYearDate = new Date(currentDay.getFullYear() + 1, 0 , 1, 0 , 0 , 0 , 0);
//const timeDiff = Math.floor((newYearDate.getTime() - currentDay.getTime()) / (1000)

firstDateOfMonth = new Date( currentDay );
firstDateOfMonth.setDate(3);
const lastDateOfMonth = new Date(firstDateOfMonth);
lastDateOfMonth.setMonth( lastDateOfMonth.getMonth + 1 );
lastDateOfMonth.setDate(0);

newYearDaty.append(...[firstDateOfMonth]);