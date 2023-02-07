import { fetchAPI } from "./Fetch"

async function getData(location) {
  let data = await fetchAPI(location);
  console.log(data);
  if(data.cod != "400") {
    let newData = {
      weather: data.weather,
    }
    return newData
  } else {
    console.log("Error");
  }
}

export {getData}
