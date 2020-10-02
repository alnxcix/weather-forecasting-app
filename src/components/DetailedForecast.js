import React from "react";
import moment from "moment";
import iconURL from "../utils/iconURL";
let DetailedForecast = ({
  dew_point,
  feels_like,
  humidity,
  pressure,
  rain,
  sunrise,
  sunset,
  temp,
  uvi,
  weather,
  wind_deg,
  wind_speed,
}) => (
  <div>
    <img
      className="bg-info d-inline-block mr-3 rounded-circle"
      src={iconURL(weather[0].icon)}
    />
    <div className="align-middle d-inline-block">
      <h5>
        <span className="text-capitalize">{weather[0].description}</span>
        <br />
        <small className="text-muted">
          The high will be {temp.max}
          <i className="wi wi-celsius" />, the low will be {temp.min}
          <i className="wi wi-celsius" />.
        </small>
      </h5>
    </div>
    <hr />
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold">
            &nbsp;
            <br />
            Morning
            <br />
            Afternoon
            <br />
            Evening
            <br />
            Night
          </p>
        </div>
        <div className="col">
          <p>
            <i className="wi wi-thermometer" />{" "}
            <span className="font-weight-bold">Temperature</span>
            <br />
            {temp.morn}
            <i className="wi wi-celsius" />
            <br />
            {temp.day}
            <i className="wi wi-celsius" />
            <br />
            {temp.eve}
            <i className="wi wi-celsius" />
            <br />
            {temp.night}
            <i className="wi wi-celsius" />
          </p>
        </div>
        <div className="col">
          <p>
            <i className="wi wi-thermometer-exterior" />{" "}
            <span className="font-weight-bold">Feels Like</span>
            <br />
            {feels_like.morn}
            <i className="wi wi-celsius" />
            <br />
            {feels_like.day}
            <i className="wi wi-celsius" />
            <br />
            {feels_like.eve}
            <i className="wi wi-celsius" />
            <br />
            {feels_like.night}
            <i className="wi wi-celsius" />
          </p>
        </div>
      </div>
    </div>
    <hr />
    <p className="card-text">
      <i className="wi wi-umbrella" />{" "}
      <span className="font-weight-bold">Rain</span> {rain}
      mm/h&nbsp;&nbsp;&nbsp;
      <i className={`wi wi-wind from-${wind_deg}-deg`} />{" "}
      <span className="font-weight-bold">Wind</span> {wind_speed}
      m/s&nbsp;&nbsp;&nbsp;
      <i className="wi wi-barometer" />{" "}
      <span className="font-weight-bold">Pressure</span> {pressure}
      hPa&nbsp;&nbsp;&nbsp;
      <br />
      <i className="wi wi-humidity" />{" "}
      <span className="font-weight-bold">Humidity</span> {humidity}
      %&nbsp;&nbsp;&nbsp;
      <span className="font-weight-bold">UV</span> {uvi}
      &nbsp;&nbsp;&nbsp;<span className="font-weight-bold">Dew Point</span>{" "}
      {dew_point}
      <i className="wi wi-celsius" />
      <br />
      <i className="wi wi-sunrise" />{" "}
      <span className="font-weight-bold">Sunrise</span>{" "}
      {moment.unix(sunrise).format("LT")}&nbsp;&nbsp;&nbsp;
      <i className="wi wi-sunset" />{" "}
      <span className="font-weight-bold">Sunset</span>{" "}
      {moment.unix(sunset).format("LT")}
    </p>
  </div>
);
export default DetailedForecast;
