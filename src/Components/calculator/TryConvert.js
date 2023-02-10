function toCelcius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFaherenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

function TryConvert(temperature) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return;
  }

  const rounded=Math.round(input*1000)/1000;
  return rounded.toString();
}


export {toCelcius,toFaherenheit,TryConvert};