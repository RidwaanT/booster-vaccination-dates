import './App.css';
import React, { useEffect, useState } from 'react'
import * as Constants from './constants/index'
import Availability from './Components/Availability';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [location, setLocation] = useState("select location");
  console.log("start date is: " +startDate)
  return (
    <div className="App">
      <p>
        Vaccination App
      </p>
      <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)}></ReactDatePicker>
      <Availability date={startDate}></Availability>
      
    </div>
     
  );
}

export default App;
