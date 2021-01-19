import React, { useEffect, useState } from "react";
import Option from "../Option";
import ShowSelected from "../ShowSelected";
import "./style.css";
import axios from "axios";

function OptionList() {
  let [planetList, setPlanetList] = useState([]);
  let [vehicleList, setVehicleList] = useState([]);
  let selected = { planet_names: [], vehicle_names: [] };

  useEffect(
    () =>
      axios
        .get("https://findfalcone.herokuapp.com/planets")
        .then((res) => {
          setPlanetList(res.data);
        })
        .catch((err) => {
          console.log(err);
        }),
    []
  );

  useEffect(
    () =>
      axios
        .get("https://findfalcone.herokuapp.com/vehicles")
        .then((res) => {
          setVehicleList(res.data);
        })
        .catch((err) => {
          console.log(err);
        }),
    []
  );

  function handleChange(planet, vehicle) {
    console.log("called handleChhage");
    selected.planet_names.push(planetList[planet].name);
    selected.vehicle_names.push(vehicleList[vehicle].name);
  }
  return (
    <>
      <div className="displayContainer">
        <Option
          planet={planetList}
          vehicle={vehicleList}
          handleChange={handleChange}
        />
      </div>
    </>
  );
}
export default OptionList;
