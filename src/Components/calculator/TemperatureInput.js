import React from "react";
import { TryConvert, toCelcius, toFaherenheit } from "./TryConvert";

const scaleNames = {
  c: "Celcius",
  f: "Fahrenheit",
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "", scale: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleCelciusConvert = this.handleCelciusConvert.bind(this);
    this.handleFahrenheitConvert = this.handleFahrenheitConvert.bind(this);
  }

  handleChange(e) {
    this.setState({
      temperature: e.target.value,
    });
  }

  handleCelciusConvert(e) {
    this.setState({
      temperature: toCelcius(this.state.temperature),
      scale: "c",
    });
  }
  handleFahrenheitConvert(e) {
    this.setState({
      temperature: toFaherenheit(this.state.temperature),
      scale: "f",
    });
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    const Fahrenheit = this.state.scale === "f" ? "Fahrenheit" : "Celcius";
    const Celcius = this.state.scale === "c" ? "Celcius" : "Fahrenheit";

    return (
      <div>
        <fieldset>
          <legend>
            This {temperature} is in {scaleNames[scale]}{" "}
          </legend>
          <input value={temperature} onChange={this.handleChange} />
          {Fahrenheit}
          <p>{this.state.temperature} </p> <br />
          {Celcius}
        </fieldset>
        <button onClick={this.handleCelciusConvert}>Convert To Celsius</button>
        <br />
        <button onClick={this.handleFahrenheitConvert}>
          Convert To Fahrenheit
        </button>
      </div>
    );
  }
}

export default TemperatureInput;
