const APIKey = '4bdda9b7b6a4d3a1dd20a4a879e28e91';

async function fetchAPI(location) {
  try {
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKey}&units=metric`);
    const data = await result.json();
    return data;
  } catch (err) {
    console.log(err);
  }
  return false;
}
export default fetchAPI;
