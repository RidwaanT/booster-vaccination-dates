import * as Constants from '../constants/index' // We important the Constants from the index and use Constants. to access the constants.
import{apiFetch} from '../Services/getAPIData';

/**
 * This function uses the datainputs to create a URL to pass to the getAPI function. 
 * @param {*} dd Day of the month as 2 numeral string
 * @param {*} mm Month of the year as 2 numeral string
 * @param {*} yyyy Year 
 * @param {*} location The name of the clinic based off the directory
 * @param {*} slotType This will be the grouping used to look for appointments (5-11, 12+, Health care workers)
 * @returns The number of slots available.
 */
export async function getTotalCount(dd, mm, yyyy, slotType){
  let date = `${yyyy}-${mm}-${dd}T00:00:00.000-05:00`; // This date format is what is used in the API query
  let slot_type = Constants.slotTypes[slotType][0]; // This is the slot type
  var totalCount = 0;

  /**
   * This for loop gets the total count for all available slots
   */
  for(let index = 0; index<Constants.clinics.length; index++ ){
    //var clinicName =Constants.clinics[index]; // Gets the clinic name from the Constants file
    var locationID = await Constants.clinicCodes[Constants.clinics[index]]; // uses the clinic Name as key to get the location ID
    if(!Constants.slotTypes[slotType][1].includes(locationID)){
      console.log("skipped this locaiton ID: " +locationID)
      continue;
    }
    let query = `${Constants.URL}day=${date}&location_id=${locationID}&slot_type=${slot_type}&key=${Constants.KEY}`; // Creates query from our data.
    let data = await apiFetch(query); // returns JSON file from our query note: If server is busy we can get an error because of an HTML return.
    // console.log(data); debugging purposes
    
    console.log(data)// console.log("The amount of slots for " + Constants.clinics[index] +" is: " + data.slots_left); Debugging purposes
    totalCount = totalCount + parseInt(data.slots_left); // we parseInt to get integer not sure if necessary will test with out
  }

  console.log("The total count to return: " + totalCount)
  console.log(totalCount)
  return totalCount;
  }