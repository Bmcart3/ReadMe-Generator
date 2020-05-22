var inquirer = require("inquirer");
var fs = require("fs");


inquirer.prompt([
    {
    message: "What is your GitHub username?",
    name: "username"
    },
    {
    message: "What is your email?",
    name: "email"
    },
    {
    message: "What is the URL to your project?",
    name: "URL"
    },
    {
    message: "What is your project name?",
    name: "project"
    },
    {
    message: "Write a short description of your project.",
    name: "description"
    },
    {
    type: "list",
    message: "What kind of license does your project have?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL v3", "None"]
    },
    {
    message: "What command should be run to install dependencies?",
    name: "dependecies"
    },
    {
    message: "What command should be run to run tests?",
    name: "tests"
    },
    {
    message: "What should the user know about using the repo?",
    name: "userKnowledge"
    },
    {
    message: "What should the user know about contributing to the repo?",
    name: "contribute"
    }
])
.then(function(answers){
    fs

})

// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
