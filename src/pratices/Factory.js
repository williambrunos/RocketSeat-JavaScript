/*
  Factory functions are used to construct objects with different properties.
*/

function createCar(numberOfDoors, color) {
  return {
    doors: numberOfDoors,
    color: color,
    isOn: true,
    toggleOnOff: function() {
      if(car.isOn) {
        console.log("Shutting off...");
      }else {
        console.log("Shutting on...");
      }
      car.isOn = !car.isOn;
    }
  }
}

const car = createCar(4, "Black");
car.toggleOnOff();
console.log(car.doors);
console.log(car.color);