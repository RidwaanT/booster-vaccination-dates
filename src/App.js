import './App.css';
import React, { useEffect, useState } from 'react'
import * as Constants from './constants/index'
import Availability from './Components/Availability';
import ReactDatePicker from 'react-datepicker';
import Select from 'react-select'
import Autosuggest from 'react-autosuggest';
import 'react-datepicker/dist/react-datepicker.css';


 
function App() {
  const[isLocationSelected, setIsLocationSelected] = useState(false);
  const[isTypeSelected, setIsTypeSelected] = useState(false);
  const[isDateSelected, setIsDateSelected] = useState(false);
  const [startDate, setStartDate] = useState();
  const [clinic, setClinic] = useState("select location");
  const [type, setType] = useState("Select Type")

  const selectClinic = (selClinic) => {
    setClinic(selClinic.value)
    setIsLocationSelected(true)
    console.log(clinic)
  }

  const selectType = (selType) => {
    var newType = selType.value
    setType(newType)
    setIsTypeSelected(true)
    console.log(newType)
  }

  const selectDate = (selStartDate) => {
    setStartDate(selStartDate)
    setIsDateSelected(true)
    console.log(startDate)
  }

  function addDays(date, days){
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
  return (
    <div>
      <h1>
        Unofficial Vaccination App
      </h1>
      <p>Available appointments are only available for 2 weeks, This application shows 7 days of appointments from date. </p>
      <div className="Dropdowns">
        <label htmlFor="date">Select Date</label><br></br>
        <ReactDatePicker id='date' selected={startDate} onChange={(date) => selectDate(date)}  includeDateIntervals={[
        { start: addDays(new Date(), 0), end: addDays(new Date(), 7) },
      ]}></ReactDatePicker>
        
        <label htmlFor='location'>Location</label><br></br>
        <Select id='location' options={Constants.dropdownClinics} onChange={(clinic) => selectClinic(clinic)}/>
        
        <label htmlFor='type'>Type</label><br></br>
        <Select id='type' options={Constants.dropdownSlotTypes} onChange={(type) => selectType(type)}/>
      </div>

      {isLocationSelected & isTypeSelected & isDateSelected?
        <Availability date={startDate} location={clinic} type={type}></Availability>:
        <p>Select a location, Type and Date.</p>
      }
    </div>
  );
}

export default App;
