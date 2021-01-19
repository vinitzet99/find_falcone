import React, { Component } from "react";
export class Option extends Component {
  constructor() {
    super();
    this.state = {
      selectPlanet: 100,
      selectVehicle: 100,
      flag:0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({ selectVehicle: e.target.value,flag:1 });
  }

  handleChange(e) {
    this.setState({ selectPlanet: e.target.value });
    
  }
  handleprops(planet,vehicle){
    this.props.handleChange(planet,vehicle)
  }
  render() {
    return (
      <>
        <div className="optionFlow">
          <select
            onChange={this.handleChange}
            disabled={this.state.selectPlanet != 100 ? true : false}
          >
            {this.props.planet.map((data, index) => (
              <option key={data.name} value={index}>
                {data.name}
              </option>
            ))}
          </select>
          <br />
          {this.props.vehicle.map((data,index) => (
            <>
              <input
                onClick={this.handleClick}
                type="radio"
                name="gender"
                value={index}
                disabled={
                  this.state.selectPlanet == 100 ||
                  this.state.selectVehicle != 100 ||
                  this.props.planet[this.state.selectPlanet].distance >
                    data.max_distance
                    ? true
                    : false
                }
              />
              <label>{data.name}</label>
              <br />
            </>
          ))}
        </div>
        {this.state.flag==1&&this.handleprops(this.state.selectPlanet,this.state.selectVehicle)}
      </>
      
    );
  }
}

export default Option;
