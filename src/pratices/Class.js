/*
  With the class, we can declare a constructor method to initialize all the 
  attributes with the keyword 'this' and all the other functions will be added
  to the prototype chain of the class. It's good to say that these kind of objects
  inherits all the methods and attributes of the chain prototype.
*/

class Car {
  constructor(numberOfDoors, color) {
    this.doors = numberOfDoors;
    this.color = color;
    this.isOn = true;
  }

  toggleOnOff() {
      if(this.isOn) console.log("Shutting off...");
      else console.log("Shutting on...");
      this.isOn = !this.isOn;
  }
}

const car = new Car(3, "red");
console.log(car);
car.toggleOnOff();
car.toggleOnOff();