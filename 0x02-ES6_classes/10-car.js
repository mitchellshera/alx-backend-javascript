const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    // Define a unique Symbol for the clone method
    this[cloneSymbol] = () => new this.constructor(this._brand, this._motor, this._color);
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = value;
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    this._motor = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  // Method to clone the car
  cloneCar() {
    // Call the clone method using the Symbol
    return this[cloneSymbol]();
  }
}
