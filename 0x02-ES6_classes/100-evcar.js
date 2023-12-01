import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  // Override cloneCar method to return an instance of Car
  cloneCar() {
    const Species = this.constructor[Symbol.Species];
    return new Species();
  }
}
