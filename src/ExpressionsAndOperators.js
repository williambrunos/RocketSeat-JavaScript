/*
  Expressions {
     Any line of code that solves something with js
     The ; is facultative
  }
  Operators {
    binary => With two elements => sum, difference, product etc.
    unary => Needs one element => ++ -- on the end or final.
    ternary => (boolean_expression) ? case_true : case_false;
  }
*/

// new => left-hand side expression => Create *new* objects

const testingNewString = new String("Hi, i'm creating a new object String!");
const testingNewNumber = new Number(25.67);

// unary => Needs only one element => most commons => 'typeof' and 'delete'
// typeof => Type of some variable
console.log(typeof testingNewString);
console.log(typeof testingNewNumber);
// delete => deletes some attribute of an object
const testingDelete = {
  name: "William",
  age: 18,
}
console.log(testingDelete);
delete testingDelete.age;
console.log(testingDelete);

// Increment / Decrement => Unary operators
let num = 0;
console.log(num++);
console.log(num);
console.log(++num);
console.log(num);

// Binary => equals and different => == or != => returns a boolean
console.log(1 % 2 == 0);
console.log(1 % 2 != 0);
console.log(1 == "1"); // '1' becomes 1 by type coercion 
// Strictly equals of and Strictly different of => Compares the content of the variable and the TYPE => === and !==
console.log(2 === 2);
console.log(2 === "2");
console.log(2 !== "2");
// Minor than < | Major than > | Minor or Equals than <= | Major or equals than >=
console.log(2 > 3);
console.log(3 < 2);
console.log(3 >= 2);
console.log(5 <= 6);
// Logical operators => AND && / OR || / NOT !

// Ternary operator => (Condition) ? Case_True : Case_False;
const isTrue = 3 > 2;
// instead of dong this way...
if(isTrue) {
  console.log("3 is major than 2!");
}else{
  console.log("2 is major than 3!");
}
//..do this way:
console.log( (3 > 2)? "3 is major than 2!" : "2 is major than 3!" );

/*
  * Falsy => Values considered false at some contexts(conditionals and loops)
    - false
    - 0
    - -0
    - ""
    - null
    - undefined
    - NaN

  * Truthy => Values considered true at some contexts
    - {}
    - []
    - any number different of 0
    - infinite
    - -infinite
    - "0"
    - "false"
*/