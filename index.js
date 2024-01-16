let apiKey = "0e08d24e31094c0ab2a104950232411";
let apiUrl = "https://api.weatherapi.com/v1/current.json?";

let searchbox = document.querySelector(".searchbox input");
let searchBtn = document.querySelector(".searchbox button");

let cityElement = document.querySelector(".city");
let temperatureElement = document.querySelector(".temprature");
let humidityElement = document.querySelector(".humidity");
let windElement = document.querySelector(".wind");
let weatherIcon = document.querySelector(".weather-icon");
let userSearch = "karachi";
let searchBtnValue;

searchBtn.addEventListener("click", () => {
  searchBtnValue = searchbox.value;
  userSearch = searchBtnValue;
  console.log(userSearch);
  checkWeather(userSearch);
  //    console.log(city);
});
searchbox.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    searchBtnValue = searchbox.value;
    userSearch = searchBtnValue;
    checkWeather(userSearch);
  }
});
async function checkWeather(city) {
  try {
    let response = await fetch(`${apiUrl}&key=${apiKey}&q=${city}`);
    let data = await response.json();
    console.log(data);
    temperatureElement.innerHTML = data.current.temp_c + "°";
    cityElement.innerHTML = data.location.name;
    humidityElement.innerHTML = data.current.humidity + "%";
    windElement.innerHTML = data.current.wind_kph + "kph";
    let conditionText = data.current.condition.text;

    if (conditionText == "clear") {
      weatherIcon.src = `cdn.weatherapi.com/weather/64x64/night/113.png`;
    } else if (conditionText == "Partly cloudy") {
      weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/116.png";
    } else if (conditionText == "Patchy rain possible") {
      weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/176.png";
    } else if (conditionText) {
      weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/113.png";
    } else {
      // default img
      weatherIcon.src = "sun.png";
    }
  } catch (error) {
    alert("No matching Found");
  }
}
checkWeather("mithi");
