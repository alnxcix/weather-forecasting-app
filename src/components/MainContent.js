import React from "react";
import PrimaryCard from "./PrimaryCard";
import SecondaryCard from "./SecondaryCard";
import TempGraph from "./TempGraph";
let MainContent = (props) => (
  <div className="container-fluid p-2">
    <div className="no-gutters row">
      <div className="col-md m-2">
        <PrimaryCard {...props} />
      </div>
      <div className="col-md m-2">
        <TempGraph {...props} />
      </div>
    </div>
    <div className="no-gutters row row-cols-2">
      {props.daily.slice(1, 7).map((entry, idx) => (
        <div className="col-md p-2" key={idx}>
          <SecondaryCard modalID={`id${idx}`} {...entry} />
        </div>
      ))}
    </div>
  </div>
);
export default MainContent;
