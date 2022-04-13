'use strict';
let thermostat;

document.addEventListener('DOMContentLoaded', function (event) {

  thermostat = new Thermostat();
  document.getElementById("current-temp").innerText = `${thermostat.getCurrentTemperature()} °C`;
  document.getElementById("current-temp").className = thermostat.energyUsage();
  
});

const _updateTemp = () => {
  document.getElementById("current-temp").innerText = `${thermostat.getCurrentTemperature()} °C`;
  document.getElementById("current-temp").className = thermostat.energyUsage();
}

const increaseTemp = () => {
  thermostat.up();
  _updateTemp();
};

const decreaseTemp = () => {
  thermostat.down();
  _updateTemp();
};

const resetTemp = () => {
  thermostat.resetTemp();
  _updateTemp();
};

const turnPSMOn = () => {
  thermostat.switchPowerSavingModeOn();
  document.getElementById("power-saving-status").innerText = "ON";
};

const turnPSMOff = () => {
  thermostat.switchPowerSavingModeOff();
  document.getElementById("power-saving-status").innerText = "OFF";
};