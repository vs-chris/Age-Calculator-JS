const birthDay = document.querySelector(".form-container input[type=date]");
const dateToday = new Date();
const button = document.querySelector(".form-container input[type=submit]");
const message = document.querySelector("#message");

button.addEventListener("click", solveBirthday);

birthDay.max = new Date().toISOString().split("T")[0];

function solveBirthday(e) {
    let x = 0;
    let y = 0;
    let z = 0;

    e.preventDefault();    
    const birthInfo = birthDay.value.split("-");
    let thisYear = dateToday.getFullYear();
    let thisMonth = dateToday.getMonth();
    let thisDay = dateToday.getDate();

    let myYear = Number(birthInfo[0]);
    let myMonth = Number(birthInfo[1]);
    let myDay = Number(birthInfo[2]);
    let daysofmonth = new Date(thisYear, thisMonth + 1, 0).getDate();

    let theYear, theMonth, theDay;

    theYear = thisYear - myYear;

    if (myMonth <= thisMonth) {
        theMonth = thisMonth - myMonth; 
    } else {
        theYear = thisYear - myYear - 1;
        theMonth = (11 - myMonth) + thisMonth; 
    }
    
    if ( myDay <= thisDay) {
        theDay = thisDay - myDay;
    } else {
        theDay = (daysofmonth - myDay) + thisDay;
    }

    message.innerText = `You are ${theYear} years, ${theMonth + 1} months old, and ${theDay} days old.`
}
    
    