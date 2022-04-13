'use strict';

describe('Thermostat', () => {
  let thermostat;
  beforeEach(() => {
    thermostat = new Thermostat();
  });

  describe('Default mode', () => {
    
    it('Thermostat starts at 20 degrees', () => {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it('Thermostat has a minimum of 10 degrees', () => {
      for (let i = 0; i < 11; i++) {
        thermostat.down();
      };
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });
  
    it('Power saving mode is on', () => {
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('Enery Usage is set to "medium-usage"', () => {
      expect(thermostat.energyUsage()).toEqual("medium-usage");
    });

  });
  

  describe('You can increase the temperature with an up function', () => {

    it('Thermostat can increase by 1 degree', () => {
      thermostat.up()
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });

    it('Thermostat can increase by 5 degrees', () => {
      for (let i = 0; i < 5; i++) {
        thermostat.up();
      };
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

    it('Thermostat can increase by 10 degrees', () => {
      thermostat.switchPowerSavingModeOff();
      for (let i = 0; i < 10; i++) {
        thermostat.up();
      };
      expect(thermostat.getCurrentTemperature()).toEqual(30);
    });

  });

  describe('You can decrease the temperature with a down function', () => {

    it('Thermostat can decrease by 1 degree', () => {
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });

    it('Thermostat can decrease by 5 degrees', () => {
      for (let i = 0; i < 5; i++) {
        thermostat.down();
      };
      expect(thermostat.getCurrentTemperature()).toEqual(15);
    });

    it('Thermostat can decrease by 10 degrees', () => {
      for (let i = 0; i < 10; i++) {
        thermostat.down();
      };
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });

  });

  describe('Power saving mode is on', () => {

    it('Maximum temperature is 25 degrees', () => {
      for (let i = 0; i < 6; i++) {
        thermostat.up();
      };
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

    it('can turn Power saving mode back on', () => {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

  });

  describe('Power saving mode is off', () => {

    it('Maximum temperature is 32 degrees', () => {
      thermostat.switchPowerSavingModeOff();
      for (let i = 0; i < 13; i++) {
        thermostat.up();
      };
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });

  });

  describe('Reset function:', () => {

    it('Can reset the temperature to 20 degrees, the default temperature', () => {
      for (let i = 0; i < 6; i++) {
        thermostat.up();
      };
      thermostat.resetTemp();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

  });

  describe('Energy usage levels:', () => {

    it('when the thermostat is 10 degrees, "low-usage"', () => {
      for (let i = 0; i < 11; i++) {
        thermostat.down();
      };
      expect(thermostat.energyUsage()).toEqual("low-usage");
    });

    it('when the thermostat is 15 degrees, "low-usage"', () => {
      for (let i = 0; i < 5; i++) {
        thermostat.down();
      };
      expect(thermostat.energyUsage()).toEqual("low-usage");
    });

    it('when the thermostat is 17 degrees, "low-usage"', () => {
      for (let i = 0; i < 3; i++) {
        thermostat.down();
      };
      expect(thermostat.energyUsage()).toEqual("low-usage");
    });

    it('when the thermostat is 18 degrees, "medium-usage"', () => {
      for (let i = 0; i < 2; i++) {
        thermostat.down();
      };
      expect(thermostat.energyUsage()).toEqual("medium-usage");
    });

    it('when the thermostat is 25 degrees, "medium-usage"', () => {
      for (let i = 0; i < 5; i++) {
        thermostat.up();
      };
      expect(thermostat.energyUsage()).toEqual("medium-usage");
    });

    it('when the thermostat is 26 degrees, "high-usage"', () => {
      thermostat.switchPowerSavingModeOff();
      for (let i = 0; i < 6; i++) {
        thermostat.up();
      };
      expect(thermostat.energyUsage()).toEqual("high-usage");
    });

    it('when the thermostat is 30 degrees, "high-usage"', () => {
      thermostat.switchPowerSavingModeOff();
      for (let i = 0; i < 10; i++) {
        thermostat.up();
      };
      expect(thermostat.energyUsage()).toEqual("high-usage");
    });

    it('when the thermostat is 32 degrees, "high-usage"', () => {
      thermostat.switchPowerSavingModeOff();
      for (let i = 0; i < 12; i++) {
        thermostat.up();
      };
      expect(thermostat.energyUsage()).toEqual("high-usage");
    });

  });

});
