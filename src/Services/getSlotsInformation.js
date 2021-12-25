export async function apiFetch(url){
    let response = await fetch(url);
    if (!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    return data;
  }