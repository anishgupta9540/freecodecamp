https://www.freecodecamp.org/learn/daily-coding-challenge/10-21
Thermostat Adjuster 2

function adjustThermostat(currentTemp, targetTempCelsius) {
  const targetTempFahrenheit = (targetTempCelsius * 1.8) + 32;
  const difference = Math.abs(targetTempFahrenheit - currentTemp);

  if (currentTemp === targetTempFahrenheit) {
    return "Hold";
  } else if (currentTemp < targetTempFahrenheit) {
    return `Heat: ${difference.toFixed(1)} degrees Fahrenheit`;
  } else {
    return `Cool: ${difference.toFixed(1)} degrees Fahrenheit`;
  }
}


adjustThermostat(32, 0);    // "Hold"
adjustThermostat(70, 25);   // "Heat: 7.0 degrees Fahrenheit"
adjustThermostat(72, 18);   // "Cool: 7.6 degrees Fahrenheit"
adjustThermostat(212, 100); // "Hold"
adjustThermostat(59, 22);   // "Heat: 12.6 degrees Fahrenheit"