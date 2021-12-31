export function getDaysofWeek(currDate = new Date()){

    let days = [];
    for(let daysAfter=0; daysAfter<7; daysAfter++){
        let isoDate;
        if(daysAfter===0){
            isoDate = getDateinISOFormat(currDate)
            days.push(isoDate.split('-'));
            continue;
        }
        let newDate = addDays(currDate, daysAfter);
        isoDate = getDateinISOFormat(newDate);
        days.push(isoDate.split('-'));
    }
    return days;
}

function getDateinISOFormat(currDate){
    const offset = currDate.getTimezoneOffset();
    currDate = new Date(currDate.getTime() - (offset*60*1000));
    return currDate.toISOString().split('T')[0];
}

function addDays(date, days){
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}