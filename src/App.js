import './App.css';
import Availability from './Components/Availability';
import React, {useEffect, useState} from 'react'


async function apiFetch(url){
  let response = await fetch(url);
  if (!response.ok){
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  let data = await response.json();
  return data;
}



function App() {
  return (
    <div className="App">
        <p>
          Vaccination App
          {/* {slots} */}
        </p>
        <Availability></Availability>
     </div>
  );
}



export default App;
