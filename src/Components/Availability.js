import React, { useEffect, useState } from 'react'
import { getDaysofWeek } from '../Services/getDaysOfWeek';
import {getSlotCountForWeek} from '../Services/getSlotCountforWeek'
import { getSlotCountForWeekByLocationandType } from '../Services/getSlotCountForWeekByLocationandType';
import { getSlotCount } from '../Services/getSlotCount';
import { getTotalCountByType } from '../Services/getTotalCountByType';

export default function Availability() {

    
    getDaysofWeek();
    const [slotsInformation, setSlotsInformation] = useState("loading...");
    //const [isLoading, setIsLoading] =useState(true);
    useEffect(()=>{
        // getSlotCount('07', '01', '2022', "SJHH-West 5th", "12 y/o plus").then(
        // data => setSlotsInformation(data));
        getSlotCountForWeekByLocationandType(getDaysofWeek(new Date(2022, 0, 4)), "Mobile Clinic-Bennetto Recreation Centre", "Healthcare Workers"  ).then(data => {setSlotsInformation(data)})
        // getTotalCount('07', '01', '2022', "Healthcare Workers").then(
        //     data => {setSlotsInformation(data);}
        // )
    }, [])
    
    return (
            <div>
                <h2> Slots Information: </h2>
                <ul>
                    <li>Count for Day 1 is: {slotsInformation[0]}</li>
                    <li>Count for Day 2 is: {slotsInformation[1]}</li>
                    <li>Count for day 3 is: {slotsInformation[2]}</li>
                    <li>Count for Day 4 is: {slotsInformation[3]}</li>
                    <li>Count for Day 5 is: {slotsInformation[4]}</li>
                    <li>Count for day 6 is: {slotsInformation[5]}</li>
                    <li>Count for day 7 is: {slotsInformation[6]}</li>
                </ul>
            </div>
        )
    }

