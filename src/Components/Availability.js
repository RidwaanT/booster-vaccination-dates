import React, { Component } from 'react'


async function apiFetch(url){
    let response = await fetch(url);
    if (!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    return "JSON.stringify(data);"
  }
  let slots =null;
export default class Availability extends Component {

    componentDidMount(){
        slots = apiFetch("https://hamilton.vertoengage.com/engage/api/api/cac-open-clinic/v1/slots/availability?day=2021-12-27T00:00:00.000-05:00&location_id=SH&slot_type=AGE12YEARSPLUS1ST2NDANDELIGIBLE3RDDOSEPOPULATIONSCOVID19VACCINE&key=hamilton-booking")
       }  

    render() {
        return (
            <div>
                {slots}
            </div>
        )
    }
}
