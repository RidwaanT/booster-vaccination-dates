/**
 * This is a simplified API fetch that will take the URL and return the JSON, this catches the invalid token error with an unverified fix.
 * @param {*} url The url of tha query used for the API call.
 * @returns JSON object
 */
export async function apiFetch(url){
    let response = await fetch(url); // Adding cors for testing base.
    if (!response.ok){ // If we get a non ok response we return the error
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    try{
      var data = await response.json(); //this will start the json response
      console.log("APIFetch() URL: "+url);
      //console.log('response data?', data)
    } catch(error) {
      console.log('High Traffic')
      console.log(url);
    } 
    return await data;
  }