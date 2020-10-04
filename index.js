
const fs = require('fs');
const inquirer = require('inquirer');
const readme = require("./utils/generateMarkdown");
const generateMarkdown = require('./utils/generateMarkdown');



// array of questions for user
const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                }
                else {
                    console.log('Please enter the name of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description', 
            message: 'Provide a description of your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                }
                else {
                    console.log('Please enter the description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide the instructions for installation of your project. (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                }
                else {
                    console.log('Please enter the instructions for installation of your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide the instructions for usage of your project. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                }
                else {
                    console.log('Please enter the instructions for usage of your project.');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose a license for your project (Check the one that applies)',
            choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type:'input',
            name: 'contributing',
            message: 'Provide the guidelines for contributing to your project. (Required)',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                }
                else {
                    console.log('Please provide the guidelines for contributing to your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Write tests for your application'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                }
                else {
                    console.log('Please enter your Github username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log('Please enter your email address.');
                    return false;
                }
            }
        }
];

// function to write README file
function writeToFile(fileName, data) {
    let markdown = generateMarkdown(projectData)
    
    fs.writeFile('README.md', markdown, err => {
        if (err) throw err;
      });
}

// function to initialize program
function init() {
    inquirer.prompt (questions)
    .then(projectData => {
        console.log(projectData)
    })
    .then(writeToFile)
}

// function call to initialize program
init();



