/*Question7: Q7: Write a simple number guessing game. Provide a selected number and a guess. Based on those numbers,
give players clues if their guess is higher, lower, or correct.*/
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright.bold("\t  Welcome to the Number Guessing Game! \t"));
async function startFunc() {
    const systemGeneratedNum = Math.floor(Math.random() * 50);
    const answers = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: chalk.cyanBright("Let's play a number guessing game! \n Write your guess number and your number must be selected b/w 1 - 50:")
        }
    ]);
    const { userGuess } = answers;
    console.log(chalk.blueBright("yourGuess =", userGuess, "\nsystem'sGuess =", systemGeneratedNum));
    if (userGuess > systemGeneratedNum) {
        console.log(chalk.green("Your guess is Higher, Better Luck Next Time!"));
    }
    else if (userGuess < systemGeneratedNum) {
        console.log(chalk.red("Your guess is Lower, Better Luck Next Time"));
    }
    else if (userGuess === systemGeneratedNum) {
        console.log(chalk.blue("Yippie! Your answer is Correct \n You Won!"));
    }
    else {
        console.log(chalk.red("Oooooppsss! wrong guess!!! Better Luck Next time"));
    }
}
async function startAgain() {
    do {
        await startFunc();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: chalk.redBright("Do you want to Continue? Press Y or N")
        });
    } while (again.restart == "Y" || again.restart == "y" || again.restart == "YES" || again.restart == "yes");
}
startAgain();
