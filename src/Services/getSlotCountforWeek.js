
import { getTotalCountByType } from "./getTotalCountByType";
import {RateLimit} from "async-sema";



export async function getSlotCountForWeek(days, slotType){
    let counts = [];
    for(let i=0; i<3; i++){
        var count = await getTotalCountByType(days[i][2],days[i][1],days[i][0], "12 y/o plus")
        counts.push(count) 
    }
    console.log("These are the counts for the week: " +counts);
    return counts;
}