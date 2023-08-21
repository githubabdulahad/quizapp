#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
let sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });
};
async function welcome() {
    let animation = chalkAnimation.rainbow("Let's start the quiz ");
    await sleep();
    animation.stop();
}
await welcome();
async function quizzz() {
    var counter = 0;
    var questions = await inquirer.prompt([
        {
            name: "Q1",
            type: "list",
            message: "What is the molecular formula of water?",
            choices: ["CO2", "H2O", "C6H6"]
        },
        {
            name: "Q2",
            type: "list",
            message: "Which one is the capital of Pakistan?",
            choices: ["Islamabad", "Karachi", "Lahore"],
        },
        {
            name: "Q3",
            type: "list",
            message: "Which country is the largest producer of platinum?",
            choices: ["America", "Canada", "Italy"],
        },
        {
            name: "Q4",
            type: "list",
            message: "MS-Word is an example of...",
            choices: ["An operating system", "A processing device", "Application software"],
        },
        {
            name: "Q5",
            type: "list",
            message: "The metal whose salts are sensitive to light is??",
            choices: ["Zinc", "Copper", "Silver"],
        },
    ]);
    if (questions.Q1 == "H2O") {
        console.log(chalk.greenBright(`Your answer ${questions.Q1} is correct!\n`));
        counter++;
    }
    else {
        console.log(chalk.redBright(`Your answer ${questions.Q1} is incorrect!\n`));
    }
    if (questions.Q2 == "Islamabad") {
        console.log(chalk.greenBright(`Your answer ${questions.Q2} is correct!\n`));
        counter++;
    }
    else {
        console.log(chalk.redBright(`Your answer ${questions.Q2} is incorrect!\n`));
    }
    if (questions.Q3 == "Canada") {
        console.log(chalk.greenBright(`Your answer ${questions.Q3} is correct!\n`));
        counter++;
    }
    else {
        console.log(chalk.redBright(`Your answer ${questions.Q3} is incorrect!\n`));
    }
    if (questions.Q4 == "Application software") {
        console.log(chalk.greenBright(`Your answer ${questions.Q4} is correct!\n`));
        counter++;
    }
    else {
        console.log(chalk.redBright(`Your answer ${questions.Q4} is incorrect!\n`));
    }
    if (questions.Q5 == "Silver") {
        console.log(chalk.greenBright(`Your answer ${questions.Q5} is correct!\n`));
        counter++;
    }
    else {
        console.log(chalk.redBright(`Your answer ${questions.Q5} is incorrect!\n`));
    }
    if (counter >= 3) {
        console.log(chalk.bold(`CONGRATULATIONS!`) + chalk.bgBlue(`Your score is ${counter} and you have successfully passed the quiz.\n`));
    }
    else {
        console.log(chalk.gray(`Your score is ${counter} and you have failed the quiz.\n`));
    }
}
quizzz();
