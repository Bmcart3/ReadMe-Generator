var inquirer = require("inquirer");
var fs = require("fs");

//Prompts the users for information
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
        choices: ["MIT", "APACHE2.0", "GPLv3", "None"]
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
    .then(function (answers) {
        writeToFile(answers);
    });

//variable markDown is a giant template literal filled with markdown. 
function writeToFile(data) {
    var markDown =
        `# ${data.project}

![](https://img.shields.io/badge/License-${data.license}-<orange>)

## Description

${data.description}

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contribute](#Contribute)
- [Tests](#Tests)
- [Questions](#Questions)

## Deployed Link

[Check it out here](${data.URL})

## Installation 

To install necessary dependencies, run the following command:

    ${data.dependencies}

## Usage

${data.userKnowledge}

## License

${data.license}

## Contribute

${data.contribute}

## Tests

To run tests, run the following command:

    ${data.tests}

## Questions

If you have any questions, please open an issue, contact me at ${data.email}, or on GitHub at github.com/${data.username}.
    
`
    //writes the markDown into a readme file. success or error.
    fs.writeFile("README.md", markDown, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Success! Added to the Readme!");
        }
    })
};
