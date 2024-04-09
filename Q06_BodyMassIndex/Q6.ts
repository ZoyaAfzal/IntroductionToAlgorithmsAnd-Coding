//Write a program that calculates the Body Mass Index(BMI) and categorizes it.

import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.redBright(" \t Welcome to BMI CALCULATOR  \t "));
async function calculator(){
    let{weightInKg,heightInMeter} = await inquirer.prompt([
        {
            type: "input",
            name: "weightInKg",
            message: chalk.magentaBright.bold("Enter your weight in kgs: \n")
        },
        {
            type: "input",
            name: "heightInMeter",
            message: chalk.magentaBright.bold("Enter your height in meters: \n")
        }
    ])
    const bodyMassIndex = weightInKg / (heightInMeter * heightInMeter);
    console.log(chalk.yellow(bodyMassIndex));

if(bodyMassIndex <= 18.5){
    console.log(chalk.blueBright(`Your BMI is ${bodyMassIndex}. Congrats! you are Underweight... `));
} 
else if(bodyMassIndex <= 25){ 
    console.log(chalk.greenBright(`Your BMI is ${bodyMassIndex}. You are Normal... `));
}
else if(bodyMassIndex <= 30){
    console.log(chalk.yellowBright(`Your BMI is ${bodyMassIndex}. Sorry! you are Overweight... `));
}
else{
    console.log(chalk.redBright("Don't mind but you are Hugely Obese... "));
}
    
}

calculator();

