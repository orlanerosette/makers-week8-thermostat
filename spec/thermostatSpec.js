describe('Thermostat', function() {
  let thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('Thermostat starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  describe('You can increase the temperature with an up function', function() {

    it('Thermostat can increase by 1 degree', function() {
      thermostat.up(1)
      expect(thermostat.temperature).toEqual(21);
    });

    it('Thermostat can increase by 5 degrees', function() {
      thermostat.up(5)
      expect(thermostat.temperature).toEqual(25);
    });

    it('Thermostat can increase by 10 degrees', function() {
      thermostat.up(10)
      expect(thermostat.temperature).toEqual(30);
    });

  });

  describe('You can decrease the temperature with a down function', function() {

    it('Thermostat can decrease by 1 degree', function() {
      thermostat.down(1)
      expect(thermostat.temperature).toEqual(19);
    });

    it('Thermostat can decrease by 5 degrees', function() {
      thermostat.down(5)
      expect(thermostat.temperature).toEqual(15);
    });

    it('Thermostat can decrease by 10 degrees', function() {
      thermostat.down(10)
      expect(thermostat.temperature).toEqual(10);
    });

  });

});
