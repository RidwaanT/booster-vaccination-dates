import React, { useEffect, useState } from 'react'
import { getDaysofWeek } from '../Services/getDaysOfWeek';
import { getSlotCount } from '../Services/getSlotCount';
import { getTotalCount } from '../Services/getTotalCount';

export default function Availability() {

    
    getDaysofWeek();
    const [slotsInformation, setSlotsInformation] = useState("loading...");
    //const [isLoading, setIsLoading] =useState(true);
    useEffect(()=>{
        // getSlotCount('07', '01', '2022', "SJHH-West 5th", "12 y/o plus").then(
        // data => setSlotsInformation(data));
        getTotalCount('07', '01', '2022', "Healthcare Workers").then(
            data => {setSlotsInformation(data);}
        )
        console.log("when this runs slotsInformation is: " +slotsInformation )
    }, [])
    
    return (
            <div>
                <h2> Slots Information: </h2>
                <ul>
                    <li>Error is:{console.log("slots info is:" +slotsInformation)} {slotsInformation}</li>
                </ul>
            </div>
        )
    }

