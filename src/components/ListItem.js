import React from "react";
import moment from "moment";
import iconURL from "../utils/iconURL";
let ListItem = ({ dt, temp, feels_like, weather }) => (
  <li className="list-group-item text-capitalize">
    <img
      className="bg-info d-inline-block mr-2 rounded-circle"
      src={iconURL(weather[0].icon)}
      style={{ width: "60px" }}
    />{" "}
    <div className="align-middle d-inline-block">
      <span className="font-weight-bold">{moment.unix(dt).format("hh A")}</span>{" "}
      {weather[0].description}
      <br />
      <small className="text-muted">
        <span className="font-weight-bold">Temperature</span> {temp}
        <i className="wi wi-celsius" /> |{" "}
        <span className="font-weight-bold">Feels Like</span> {feels_like}
        <i className="wi wi-celsius" />
      </small>
    </div>
  </li>
);
export default ListItem;
