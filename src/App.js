import './App.css';
import React, { useEffect, useState } from 'react'
import * as Constants from './constants/index'
import Availability from './Components/Availability';
import ReactDatePicker from 'react-datepicker';
import Select from 'react-select'
import Autosuggest from 'react-autosuggest';
import 'react-datepicker/dist/react-datepicker.css';



function App() {
  const[isSelected, setIsSelected] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [clinic, setClinic] = useState("select location");

  const selectClinic = (selClinic) => {
    setClinic(selClinic.value)
    setIsSelected(true)
  }
  console.log("start date is: " +startDate)
  return (
    <div className="App">
      <p>
        Vaccination App
      </p>
      <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)}></ReactDatePicker>
      <Select options={Constants.dropdownClinics} onChange={(clinic) => selectClinic(clinic)}/>
      {isSelected?
        <Availability date={startDate} location={clinic}></Availability>:
        <p>Select a location</p>
      }
    </div>
     
  );
}

export default App;
