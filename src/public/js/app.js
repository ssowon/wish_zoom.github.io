
alert("hi");
require('dotenv').config();
const API_KEY = process.env.WEATHER_API_KEY;

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

  fetch(url).then(response => response.json()).
  then(data => {
    console.log(data);
  });

}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);