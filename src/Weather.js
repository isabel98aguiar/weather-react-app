import React from "react";
export default function Weather(props) {
  let descriptions = [
    { Temperature: "Temperature: " + Math.round(props.temp) + "ºC" },
    { Description: "Description: " + props.description },
    { Humidity: "Humidity: " + props.humidity + "%" },
    { Wind: "Wind: " + props.wind + "km/h" },
  ];
  if (props.temp) {
    return (
      <ul>
        {descriptions.map(function (description, index) {
          return (
            <li key={index}>
              {description.Temperature}
              {description.Description}
              {description.Humidity} {description.Wind}
            </li>
          );
        })}
        <li>
          <img
            alt=""
            src={"https://openweathermap.org/img/wn/" + props.icon + "@2x.png"}
          />
        </li>
      </ul>
    );
  }
}
