import React from "react";
import iconURL from "../utils/iconURL";
let Header = () => (
  <div className="bg-dark navbar navbar-dark">
    <span className="font-weight-bold navbar-brand">
      <img
        className="bg-info rounded-circle"
        height={40}
        src={iconURL("10d")}
        width={40}
      />{" "}
      Weather Forecast
    </span>
  </div>
);
export default Header;
