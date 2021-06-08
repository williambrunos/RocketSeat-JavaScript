/*
  Object Literals are simple to see and use;
  These objects are not reusable;

  * General: objects can hold properties and values(including functions);
*/

const car = {
  doors: 4,
  color: "Red",
  isOn: true,
  toggleOnOff: function() {
    if(car.isOn) {
      console.log("Shutting off...");
    }else {
      console.log("Shutting on...");
    }
    car.isOn = !car.isOn;
  }
};

console.log(car.color);
console.log(car.doors);
car.toggleOnOff();
car.toggleOnOff();