const APIKey = '4bdda9b7b6a4d3a1dd20a4a879e28e91';

export async function fetchGeoApi(location) {
  try {
    const result = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${APIKey}`);
    const data = await result.json();
    return data;
  } catch (err) {
    console.log(err);
  }
  return false;
}

export async function fetchAPI(location) {
  const geoData = await fetchGeoApi(location);
  if (geoData.length > 0 && geoData.cod !== '400') {
    const [{ lat, lon }] = geoData;
    try {
      const result = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,weathercode,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`);
      const data = await result.json();
      return { data, geoData };
    } catch (err) {
      return err;
    }
  }
  return false;
}
