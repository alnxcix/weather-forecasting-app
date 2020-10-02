import React from "react";
import moment from "moment";
import iconURL from "../utils/iconURL";
import DetailedForecast from "./DetailedForecast";
import ModalButton from "./ModalButton";
import Modal from "./Modal";
let SecondaryCard = (props) => {
  let { dt, modalID, weather } = props;
  return (
    <div className="bg-dark card">
      <div className="card-body">
        <div className="text-light">
          <h5 className="card-title text-center">
            {moment.unix(dt).format("MMM DD")}{" "}
            <small>{moment.unix(dt).format("ddd")}</small>
          </h5>
          <img
            className="bg-info d-block mx-auto rounded-circle"
            src={iconURL(weather[0].icon)}
          />
          <h5 className="mt-3 text-capitalize">
            {weather[0].main}
            <br />
            <small>{weather[0].description}</small>
          </h5>
        </div>
        <ModalButton
          block
          color="warning"
          id={modalID}
          text="Detailed Forecast"
        />
      </div>
      <Modal
        content={<DetailedForecast {...props} />}
        id={modalID}
        title={`${moment.unix(dt).format("MMMM DD")} Detailed Forecast`}
      />
    </div>
  );
};
export default SecondaryCard;
