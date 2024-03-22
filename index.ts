#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstNumber" },
  { message: "Enter Second Number", type: "number", name: "SecondNumber" },
  {
    message: "Select One Operator/Function from the List Given : ",
    type: "list",
    name: "Operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
if (answer.Operator == "Addition") {
  console.log("Your Value is :" + (answer.firstNumber + answer.SecondNumber));
} else if (answer.Operator == "Subtraction") {
  console.log("Your Value is :" + (answer.firstNumber - answer.SecondNumber));
} else if (answer.Operator == "Multiplication") {
  console.log("Your Value is :" + answer.firstNumber * answer.SecondNumber);
} else if (answer.Operator == "Division") {
  console.log("Your Value is :" + answer.firstNumber / answer.SecondNumber);
} else {
  console.log("Select Valid Operator");
}
