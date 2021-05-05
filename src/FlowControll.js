// Expressions to control the flow of our algorithm

/*
 if / else => if(something == true) {
                code...
              }else if(secondSomething == true) {
                code if second something == true...
              } else {
                code if something == false...
              }
*/

const temperature = 36.5;

/*
  if(temperature > 37) {
    console.log(`fever`);
  }else {
    console.log(`ok`);
  }
*/

const isWithFever = temperature > 37
isWithFever ? console.log('fever') : console.log('ok');

/*
  switch statement => A decision statement that allows our algorithm to change
  its flow for innumerous paths.

  switch(variable) {
    case (value_of_the_variable):
      (code...)
      break;
    case (other_value_of_the_variable):
      (code...)
      break;(optative)
    default:
      (code that will run when the variable doesn't assume any of the values)
  }

  In JS, we can use the switch statement with any single variable, which is a 
  great advance looking back for C, which is a programming language that allow
  us to use switch statement only with literals variables(characters and integers)

*/

const myName = "William";

switch(myName) {
  case "Maria":
    console.log("hello Maria");
    break;
  case "William":
    console.log("hello William");
    break;
  default:
    console.log("hello Alien");
}

const calculator = (num1, operator, num2) => {
  switch(operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2
    default:
      return "Não implementado";
  }
}

console.log(calculator(3, '5', 4));


/*
  throw => Throw an error on our application => Must be caught and treated

  try...catch => Try to execute this code and catch the error
*/

function sayMyName(name) {
  if(name == '') {
    throw 'Name is not defined';
  } else {
    console.log(`Hello ${name}`);
  }
}

try {
  sayMyName('');
}catch(error) {
  console.log(error);
}

// Uncaught errors that had been thrown breaks the flow of our application