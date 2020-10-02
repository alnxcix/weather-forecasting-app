import React from "react";
import ListItem from "./ListItem";
let List = ({ listItems }) => (
  <ul className="list-group list-group-flush">
    {listItems.map((entry, idx) => (
      <ListItem key={idx} {...entry} />
    ))}
  </ul>
);

export default List;
