//Question8: Write a simple calculator program: Addition, Subtraction, Multiplication and Division.
import inquirer from "inquirer";
import chalk from "chalk";
async function askQuestion() {
    const answers = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: chalk.magentaBright("Enter the first number:"),
        },
        {
            type: "number",
            name: "num2",
            message: chalk.redBright("Enter the second number:"),
        },
        {
            type: "list",
            name: "operator",
            message: chalk.blue("Selector the Operation you would like to perform? \n"),
            choices: [(chalk.blue("Addition")), (chalk.green("Subtraction")), (chalk.red("Multiplication")), (chalk.yellow("Division"))]
        },
    ]);
    if (answers.operator == chalk.blue("Addition")) {
        console.log(chalk.blue(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if (answers.operator == chalk.green("Subtraction")) {
        console.log(chalk.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    }
    else if (answers.operator == chalk.red("Multiplication")) {
        console.log(chalk.red(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
    }
    else if (answers.operator == chalk.yellow("Division")) {
        console.log(chalk.yellow(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }
}
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: chalk.cyan("Do you want to Continue? Press y or n"),
        });
    } while (again.restart == "y" ||
        again.restart == "Y" ||
        again.restart == "yes" ||
        again.restart == "YES");
}
startAgain();
