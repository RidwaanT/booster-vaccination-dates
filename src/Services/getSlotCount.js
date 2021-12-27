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
export async function getSlotCount(dd, mm, yyyy, location, slotType){
  let date = `${yyyy}-${mm}-${dd}T00:00:00.000-05:00`;
  let locationID = Constants.clinicCodes[location];
  let slot_type = Constants.slotTypes[slotType];
  let query = `${Constants.URL}day=${date}&location_id=${locationID}&slot_type=${slot_type}&key=${Constants.KEY}`

  let slotCount = apiFetch(query);
  return slotCount;
  }