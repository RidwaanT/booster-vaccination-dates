import './App.css';
import Availability from './Components/Availability';

async function apiFetch(url){
  let response = await fetch(url);
  if (!response.ok){
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  let data = await response.json();
  return JSON.stringify(data);
}

let slots = apiFetch("https://hamilton.vertoengage.com/engage/api/api/cac-open-clinic/v1/slots/availability?day=2021-12-27T00:00:00.000-05:00&location_id=SH&slot_type=AGE12YEARSPLUS1ST2NDANDELIGIBLE3RDDOSEPOPULATIONSCOVID19VACCINE&key=hamilton-booking")


function App() {
  return (
    <div className="App">
        <p>
          Vaccination App
          {slots}
        </p>
     </div>
  );
}



export default App;
