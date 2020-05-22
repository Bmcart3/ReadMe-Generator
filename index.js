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
    }
])
.then(function(answers){
    
})

// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
