class Thermostat {
  constructor() {
    this.temperature = 20;
  };

  up(degree) {
    this.temperature += degree;
  };

  down(degree) {
    this.temperature -= degree;
  };

};

