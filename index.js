var inquirer = require("inquirer");
var fs = require("fs");

//can i use forEach to go through each message?
// function writeToFile(fileName, data) {
//     fs.appendFile("README.md", process.argv[], function(err){
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Success! Added to the Readme!");
//         }
//     })
// };


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
    name: "dependencies"
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
    console.log(answers.username)
    console.log(answers.email)
    console.log(answers.URL)
    console.log(answers.project)
    console.log(answers.description)
    console.log(answers.license)
    console.log(answers.dependencies)
    console.log(answers.tests)
    console.log(answers.userKnowledge)
    console.log(answers.contribute)
})

//Need to get these answers to go in the specific area in a generated readme.md file. 



// const questions = [

// ];



// function init() {

// }

// init();
