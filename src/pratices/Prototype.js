/*
  In JS, we have something called prototype chain, which is a large chain of
  attributes and methods that various js objects inherits from some 'father'
  object, like Strings, arrays etc. We can create our own objects with a 
  constructor!
*/

function createCar(color, numberOfDoors) {
  this.color = color;
  this.doors = numberOfDoors;
  this.isOn = true;

  if(color == undefined || numberOfDoors == undefined) {
    throw new Error("ERROR: Object arguments are not defined");
  }
}

/*
  We added the toggleOnOff function to the prototype chain of the object created.
  Why? Every time we create an object using factory method, we will construct
  all the functions each time, this is not good for the application. So, we
  can add these functions at the prototype of the object and use it
  whenever we want without worries about creating all of them each time! :)
*/
createCar.prototype.toggleOnOff = function() {
  if(this.isOn) console.log("Shutting off...");
  else console.log("Shutting on...");
  this.isOn = !this.isOn;
};

try {
  car = new createCar(6, "Black");
}catch(e) {
  console.log(e);
}

if(car != undefined) {
  car.toggleOnOff();
  car.toggleOnOff();
}
