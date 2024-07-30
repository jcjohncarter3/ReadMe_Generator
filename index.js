// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { right } = require("inquirer/lib/utils/readline");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is ydour GitHub user name?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "project_title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Description",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    const template = generateMarkdown (data);
    console.log (template);

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions).then (answers => {
        console.log (answers.github, answers.email, answers.project_title),
        writeToFile ("ReadMe.md", answers)

    })
 }

// Function call to initialize app
init();
