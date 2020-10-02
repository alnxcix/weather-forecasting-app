import React from "react";
import { emojify } from "node-emoji";
let Footer = () => (
  <div className="bg-warning p-2">
    <p className="text-center font-weight-bold m-0">
      {emojify("Powered by OpenWeather :cloud:")}
    </p>
  </div>
);
export default Footer;
