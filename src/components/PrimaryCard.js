import React from "react";
import moment from "moment";
import iconURL from "../utils/iconURL";
import DetailedForecast from "./DetailedForecast";
import List from "./List";
import ModalButton from "./ModalButton";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
let PrimaryCard = ({ current, hourly, daily }) => (
  <div className="bg-info card h-100 text-light w-100">
    <div className="card-body">
      <h5>
        <FontAwesomeIcon icon={faCalendarAlt} />{" "}
        {moment.unix(current.dt).format("MMMM DD")}{" "}
        <small>{moment.unix(current.dt).format("dddd")}</small>
      </h5>
      <h5>
        <FontAwesomeIcon icon={faMapMarkerAlt} /> Manila, PH
      </h5>
      <img
        className="bg-warning d-block mx-auto rounded-circle"
        src={iconURL(current.weather[0].icon)}
      />
      <h1 className="display-4 text-capitalize text-center">
        {current.weather[0].description}
      </h1>
      <h1 className="text-center">
        {current.temp}
        <i className="wi wi-celsius" />
      </h1>
      <div className="btn-block btn-group" role="group">
        <ModalButton color="dark" id="primary1" text="Hourly Forecast" />
        <ModalButton color="warning" id="primary2" text="Detailed Forecast" />
      </div>
    </div>
    <Modal
      id="primary1"
      title={`${moment.unix(current.dt).format("MMMM DD")} Hourly Forecast`}
      content={
        <List
          listItems={hourly.filter(({ dt }) =>
            moment.unix(dt).isSame(moment.unix(current.dt), "d")
          )}
        />
      }
    />
    <Modal
      id="primary2"
      title={`${moment.unix(current.dt).format("MMMM DD")} Detailed Forecast`}
      content={<DetailedForecast {...daily[0]} />}
    />
  </div>
);
export default PrimaryCard;
