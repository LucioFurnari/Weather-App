# Weather-App

Technologies used:
-
- HTML
- CSS
- JS
- ESLint
- Webpack

API used: 
-
- openweathermap/geocoding-api
- open-meteo

Libraries:
-
- weather-icons ( erikflowers ) https://github.com/erikflowers/weather-icons


Features:
-
- Show weather conditions of 7 days from the day that the search is done.
- Visual svg graphic show temperatures of all the hours of the day.
- Select the day to show in the svg graphics.
- The background and icons change depending of the weather.
- Change the scale of temperature, celsius to fahrenheit and vice versa.
<!-- ❌ ✔️ ⭕ ❓ -->
TODO:
- When the page is loaded show the data of the current city. ✔️

- Change the color of the card depending of the weather. ❌

- Prevent to submit a wrong city name or empty input. ⭕

- Make the svg graphic responsive
  - Depending of the windows width, add a event that change the width and show only temperature 
    between 4 or 5 hours.
- Add a button to change celsius to Fahrenheit or Celsius. ✔️
  - Save the value of the temperature in a variable.
  - When the button is pushed convert the celsius temperature to Fahrenheit,
  and change the content of the ui.
  - If change to celsius call again the same variable and change the ui.

- Organize the data from the new api. ✔️
- Create weather card for each day get from the api. ✔️
  - Organize the data in the weather card for the actual time or (select time). ✔️
- Add a icon that show the current weather. ✔️

- Create a graphics that show the temperature of all the day. ✔️
  - Use svg path to add and connects lines. 
  - For each hour of the day ( x axis ) and temperature ( y axis ), 
  - Start in the 00 of the day and end in the 24 h.

- Create a input where the user can enter a city name. ✔️
  - When the user submit the name, fetch to the api with that name. ✔️

- Change the background according to the weather. ✔️


- Make responsive the page. ❌
<!-- ❌ ✔️ ⭕ ❓ -->

Images used:

 Image of <a href="https://unsplash.com/@chuttersnap?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">CHUTTERSNAP</a> en <a href="https://unsplash.com/es/fotos/TSgwbumanuE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  Image of  <a href="https://unsplash.com/@elcarito?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">elCarito</a> en <a href="https://unsplash.com/es/fotos/MHNjEBeLTgw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  Image of  <a href="https://unsplash.com/@harshitsharma?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Harshit Sharma</a> en <a href="https://unsplash.com/es/fotos/weRtrhhTz4s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  Image of  <a href="https://unsplash.com/es/@mantasos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tasos Mansour</a> en <a href="https://unsplash.com/es/fotos/_hGPdpyMV-8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  Image of  <a href="https://unsplash.com/pt-br/@chadmadden?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chad Madden</a> en <a href="https://unsplash.com/es/fotos/MujZ8l3GWC4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  Image of  <a href="https://unsplash.com/@sametomorrow?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Adam Chang</a> en <a href="https://unsplash.com/es/fotos/IWenq-4JHqo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  Image of  <a href="https://unsplash.com/@thommilkovic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Thom Milkovic</a> en <a href="https://unsplash.com/es/fotos/UsYOap7yIMg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>