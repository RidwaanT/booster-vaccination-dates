import { getSlotCount } from "./getSlotCount";
import {RateLimit} from "async-sema";

const limit = RateLimit(4)

export async function getSlotCountForWeekByLocationandType(days, location, slotType){
    let counts = [];
    for(let i=0; i<7; i++){
        await limit
        var count = await getSlotCount(days[i][2],days[i][1],days[i][0], location,"Healthcare Workers")
        counts.push(count) 
    }
    
    console.log("These are the counts for the week: " +counts);
    return counts;
}


