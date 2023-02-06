import { fetchAPI } from "./Fetch"

async function getData(city) {
  let data = await fetchAPI(city)
  let newData = {
    weather: await data.weather,
  }
  return newData
}
export {getData}
