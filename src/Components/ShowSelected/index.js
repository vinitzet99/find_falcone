import React from "react";
import "./style.css";

function ShowSelected(props) {
  return (
    <>
      {props.list.planet_names.map((data, index) => (
        <section>data {props.list.vehicle_names[index]}</section>
      ))}
    </>
  );
}

export default ShowSelected;
