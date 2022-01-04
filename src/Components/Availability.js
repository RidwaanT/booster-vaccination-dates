import React, { useEffect, useState } from 'react'
import { getDaysofWeek } from '../Services/getDaysOfWeek';
import {getSlotCountForWeek} from '../Services/getSlotCountforWeek'
import { getSlotCountForWeekByLocationandType } from '../Services/getSlotCountForWeekByLocationandType';
import { getSlotCount } from '../Services/getSlotCount';
import { getTotalCountByType } from '../Services/getTotalCountByType';

export default function Availability(props) {
    var date = props.date.toDateString()
    const [slotsInformation, setSlotsInformation] = useState("loading...");
    //const [isLoading, setIsLoading] =useState(true);
    useEffect(()=>{
        console.log("the props date is: " +props.date)
        // getSlotCount('07', '01', '2022', "SJHH-West 5th", "12 y/o plus").then(
        // data => setSlotsInformation(data));
        getSlotCountForWeekByLocationandType(getDaysofWeek(props.date), "Mobile Clinic-Bennetto Recreation Centre", "Healthcare Workers"  ).then(data => {setSlotsInformation(data)})
        // getTotalCount('07', '01', '2022', "Healthcare Workers").then(
        //     data => {setSlotsInformation(data);}
        // )
    }, [])
    
    return (
        <div>
            <h2> Slots Information: </h2>
            <table className="tg">
                <thead>
                    <tr>
                        <th className="tg-0lax"></th>
                        <th className="tg-0lax">{prettyPrintDate(date)}</th>
                        <th className="tg-0lax">{prettyPrintDate(date, 1)}</th>
                        <th className="tg-0lax">{prettyPrintDate(date, 2)}</th>
                        <th className="tg-0lax">{prettyPrintDate(date, 3)}</th>
                        <th className="tg-0lax">{prettyPrintDate(date, 4)}</th>
                        <th className="tg-0lax">{prettyPrintDate(date, 5)}</th>
                        <th className="tg-0lax">{prettyPrintDate(date, 6)}</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="tg-0lax">Appointments Available</td>
                        <td className="tg-0lax">{slotsInformation[0]}</td>
                        <td className="tg-0lax">{slotsInformation[1]}</td>
                        <td className="tg-0lax">{slotsInformation[2]}</td>
                        <td className="tg-0lax">{slotsInformation[3]}</td>
                        <td className="tg-0lax">{slotsInformation[4]}</td>
                        <td className="tg-0lax">{slotsInformation[5]}</td>
                        <td className="tg-0lax">{slotsInformation[6]}</td>
                        
                    </tr>
                </tbody>
            </table>
            {/* <ul>
                <li>Count for Day 1 is: </li>
                <li>Count for Day 2 is: </li>
                <li>Count for day 3 is: </li>
                <li>Count for Day 4 is: </li>
                <li>Count for Day 5 is: </li>
                <li>Count for day 6 is: </li>
                <li>Count for day 7 is: </li>
            </ul> */}
        </div>
    )
}

function prettyPrintDate(newDate, daysAdded=0){
    var addedDate = new Date(newDate)
    addedDate.setDate(addedDate.getDate()+daysAdded);
    addedDate = addedDate.toDateString();
    let printedDay = addedDate.substring(0,addedDate.length-5)
    return printedDay;
}
