import React, { useState } from "react";
import Weather from "./Weather";
import axios from "axios";
export default function Form() {
  let [city, setCity] = useState(null);
  let [temp, setTemp] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    function showWeather(response) {
      setTemp(response.data.main.temp);
      setDescription(response.data.weather[0].description);
      setHumidity(response.data.main.humidity);
      setWind(response.data.wind.speed);
      setIcon(response.data.weather[0].icon);
    }
    let url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=3bc520cc14bbdedfd7e45158f2ef0439&units=metric";
    axios.get(url).then(showWeather);
  }
  function searchCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={searchCity} />
        <input type="submit" value="Search" />
      </form>
      <Weather
        city={city}
        temp={temp}
        description={description}
        humidity={humidity}
        wind={wind}
        icon={icon}
      />
    </div>
  );
}
