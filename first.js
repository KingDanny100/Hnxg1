let date = new Date()
let dayOfWeek = date.getDay()
let newDay;
switch (dayOfWeek) {
    case 0:
        newDay = 'Sunday'
        break;
    case 1:
        newDay = 'Monday'
        break;
    case 2:
        newDay = 'Tuesday'
        break;
    case 3:
        newDay = 'Wednesday'
        break;
    case 4:
        newDay = 'Thursday'
        break;
    case 0:
        newDay = 'Friday'
        break;

    default:
        newDay = 'Saturday'
        break;
}
console.log(newDay);

let textDay = document.getElementById('day')
textDay.innerText = newDay

let utcTime = date.getUTCMonth()
console.log(utcTime);
 
let fullDate = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDay(), date.getUTCHours(), date.getUTCMinutes())


let utcDay = document.getElementById('utc')
textDay.innerText = fullDate


