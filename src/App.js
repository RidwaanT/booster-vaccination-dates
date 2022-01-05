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
    console.log("Selecting Clinic: " +clinic)
  }

  const selectType = (selType) => {
    setType(selType.value)
    setIsTypeSelected(true)
    console.log(selType)
  }

  const selectDate = (selStartDate) => {
    setStartDate(selStartDate)
    setIsDateSelected(true)
    console.log(startDate)
  }

  return (
    <div>
      <h1>
        Vaccination App
      </h1>
      <div className="Dropdowns">
      <label htmlFor="date">Select Date</label><br></br>
      <ReactDatePicker id='date' selected={startDate} onChange={(date) => selectDate(date)}></ReactDatePicker>
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
