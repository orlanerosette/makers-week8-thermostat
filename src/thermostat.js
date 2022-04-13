'use strict';

class Thermostat {
  constructor() {
    this.DEFAULT_TEMP = 20;
    this.temperature = this.DEFAULT_TEMP;
    this.MED_ENERGY_USAGE_LIMIT = 18;
    this.HIGH_ENERGY_USAGE_LIMIT = 25;
    this.powerSavingMode = true;
    this.MIN_TEMP = 10;
    this.MAX_TEMP_PSM_ON = 25;
    this.MAX_TEMP_PSM_OFF = 32;
    this.DEFAULT_TEMP = 20;
  };

  getCurrentTemperature() {
    return this.temperature;
  };

  isMinTemp() {
    return this.temperature === this.MIN_TEMP;
  };

  isMaxTemp() {
    if (this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAX_TEMP_PSM_OFF;
    }
    return this.temperature === this.MAX_TEMP_PSM_ON;
  };

  up() {
    if (this.isMaxTemp()) {
      return;
    }
    this.temperature += 1;
  };

  down() {
    if(this.isMinTemp()) {
      return;
    } 
    this.temperature -= 1;
  };

  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  };

  switchPowerSavingModeOff() {
    this.powerSavingMode = false;
  };

  switchPowerSavingModeOn() {
    this.powerSavingMode = true;
  };

  resetTemp() {
    this.temperature = this.DEFAULT_TEMP;
  };

  energyUsage() {
    return this.temperature < this.MED_ENERGY_USAGE_LIMIT ? "low-usage" : this.temperature <= this.HIGH_ENERGY_USAGE_LIMIT ? "medium-usage" : "high-usage";
  };

};

