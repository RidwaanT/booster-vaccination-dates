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
  let date = `${yyyy}-${mm}-${dd}T00:00:00.000-05:00`;
  
  let slot_type = Constants.slotTypes[slotType];
  var totalCount = 0;

  for(let index = 0; index<Constants.clinics.length; index++ ){
    var locationID = await Constants.clinicCodes[Constants.clinics[index]];
    let query = `${Constants.URL}day=${date}&location_id=${locationID}&slot_type=${slot_type}&key=${Constants.KEY}`;
    let data = await apiFetch(query);
    console.log(data);
    console.log("The amount of slots for " + Constants.clinics[index] +" is: " + data.slots_left);
    totalCount = totalCount + parseInt(data.slots_left);
  }

  // for (var clinic of Constants.clinics){
  //   let locationID = Constants.clinicCodes[clinic];
  //   let query = `${Constants.URL}day=${date}&location_id=${locationID}&slot_type=${slot_type}&key=${Constants.KEY}`;
  //   let data = await apiFetch(query);
  //   console.log("The amount of slots for " + Constants.clinics[clinic] +" is: " + data.slots_left);
  //   totalCount = totalCount + parseInt(data.slots_left);
  // }
  // Constants.clinics.forEach(element => {
  //   let locationID = Constants.clinicCodes[element];
  //   let query = `${Constants.URL}day=${date}&location_id=${locationID}&slot_type=${slot_type}&key=${Constants.KEY}`
  //   apiFetch(query).then(data => totalCount = totalCount + parseInt(data.slots_left))
  // });
  console.log("Test print")
  console.log("The total count to return:" + totalCount)
  return totalCount;
  }