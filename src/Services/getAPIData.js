export async function apiFetch(url){
    let response = await fetch(url, {mode: 'cors'});
    if (!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    try{
      var data = await response.json();
      console.log('response data?', data)
    } catch(error) {
      console.log('Error happened here!')
      console.log(url);
      console.error(error)
    }
    
    return data;
  }