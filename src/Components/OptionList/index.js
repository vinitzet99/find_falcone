import React, { useEffect, useState } from "react";
import Option from "../Option";
import ShowSelected from "../ShowSelected";
import "./style.css";
import axios from "axios";

function OptionList() {
  let [planetList, setPlanetList] = useState([]);
  let [vehicleList, setVehicleList] = useState([]);
  let [show, updateShow] = useState(0);
  let selected = { planet_names: [], vehicle_names: [] };
  const x = [0, 1, 2, 3];
  let value = 0;
  let prevvalue = 0;

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

  useEffect(()=>{console.log(show)},[value]);
  function handleChange(planet, vehicle) {
    console.log("called handleChhage");
    selected.planet_names.push(planetList[planet].name);
    selected.vehicle_names.push(vehicleList[vehicle].name);
    console.log(value);
  }
  return (
    <>
      {show > 0 && <ShowSelected list={selected} />}
      <div className="displayContainer">
        {(value += 1)}
        {show == 0 && (
          <>
            <Option
              planet={planetList}
              vehicle={vehicleList}
              handleChange={handleChange}
            />
            {console.log("show" + show)}
          </>
        )}
        {show == 1 && (
          <Option
            planet={planetList}
            vehicle={vehicleList}
            handleChange={handleChange}
          />
        )}
        {show == 2 && (
          <Option
            planet={planetList}
            vehicle={vehicleList}
            handleChange={handleChange}
          />
        )}
        {show == 3 && (
          <Option
            planet={planetList}
            vehicle={vehicleList}
            handleChange={handleChange}
          />
        )}
      </div>
    </>
  );
}
export default OptionList;
