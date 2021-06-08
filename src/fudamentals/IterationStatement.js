/*
  These statements will repeat some code until a certain condition becomes true

  for(let iterator = initial_value; condition; increment/decrement) {
    code... 
  }

  break => Breaks the statement
  continue => Continue to the next iteration
*/

for(let i = 0; i < 10; i++) {
    if(i % 2 == 0) {
      continue;
    }else if(i % 3 == 0) {
      console.log(`Hello, Sir.${i}`);
    } else if(i == 7) {
      break;
    } else {
      console.log(`Hello ${i}`);
    }
}

/* 
  while the condition is true, the code will be executed

  while(condition) {
    code...
  }
*/

let i = 3;
while(i > 2) {
  break;
}

/*
  for ... of

  Statement for iterations among an array and a variable which will return to
  this variable every element of the array
*/

let name = "William";
let names = [name, "Danilo", "Mayk"];

for(let char of name) {
  console.log(char);
}

for(let singleNames of names) {
  console.log(singleNames);
}

/*
  for ... in

  Statement that will iterate over an object and will return to some variable every
  single property of the object
*/

const person = {
  name: "William",
  age: 18,
  weight: 55
};

for(let property in person) {
  console.log(property);
  console.log(person[property]);
}