
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const FormData = {
    lat: lat,
    lon: lon
  }
  console.log(FormData)

  axios({
    method: "post", // 요청 방식
    url: "/weather", // 요청 주소
    data: FormData
  }).then((res) => {
    console.log("왔다");
    console.log(res);
  });
  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

  // fetch(url).then(response => response.json()).
  // then(data => {
  //   const city = document.querySelector("#weather span:first-child");
  //   const weather = document.querySelector("#weather span:last-child");
  //   city.innerText = '🧭'+data.name;
  //   weather.innerText = `🌡${data.main.temp} / 🌈${data.weather[0].main}`;

  // });

}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);