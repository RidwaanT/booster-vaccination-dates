import React, { useEffect, useState } from 'react'
import { getSlotCount } from '../Services/getSlotCount';
import { getTotalCount } from '../Services/getTotalCount';

export default function Availability() {
    const [slotsInformation, setSlotsInformation] = useState({});
    useEffect(()=>{
        // getSlotCount('07', '01', '2022', "SJHH-West 5th", "12 y/o plus").then(
        // data => setSlotsInformation(data));
        getTotalCount('05', '01', '2022', "Healthcare Workers").then(
            data => {setSlotsInformation(data); console.log(data)}
        )
    }, [])
    
    return (
            <div>
                <h2> Slots Information: </h2>
                <ul>
                    <li>work</li>
                </ul>
            </div>
        )
    }

