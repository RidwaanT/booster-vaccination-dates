import React, { useEffect, useState } from 'react'
import { getSlotCount } from '../Services/getSlotCount';


// async function apiFetch(url){
//     let response = await fetch(url);
//     if (!response.ok){
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     let data = await response.json();
//     return "JSON.stringify(data);"
//   }
export default function Availability() {
    const [slotsInformation, setSlotsInformation] = useState({});
    
    useEffect(()=>{
        getSlotCount('07', '01', '2022', "SJHH-West 5th", "12 y/o plus").then(
        data => setSlotsInformation(data));
    }, [])
    
    
    return (
            <div>
                <h2> Slots Information: </h2>
                <ul>
                    <li>{slotsInformation.slots_left}</li>
                </ul>
            </div>
        )
    }

