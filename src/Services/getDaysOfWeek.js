
export function getDaysofWeek(){

    let days = [];
    let currDate = getDateinISOFormat(); // Returns as string
    let day = currDate.day
    console.log("days of week are: "+ currDate)
    return day;
}

function getDateinISOFormat(){
    let currDate = new Date();
    const offset = currDate.getTimezoneOffset();
    currDate = new Date(currDate.getTime() - (offset*60*1000));
    return currDate.toISOString().split('T')[0];
}