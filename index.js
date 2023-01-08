const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')


const questions = () => {
  return inquirer.prompt([
    {
      message: 'Choose a title',
      name: 'title',
    },
    {
      message: 'Choose a license',
      choices: ['The MIT License', 'Apache 2.0 License', 'GNU GPL v3', 'None'],
      name: 'license',
      type: 'list',
    },
    {
      message: 'Enter a description',
      name: 'description',
    },
    {
      message: 'Does the user need to install anything ?',
      name: 'installation',
    },
    {
      message: 'Is there is any usage guide to be followed ?',
      name: 'usage',
    },
    {
      message: 'Is there any guidelines for contributing ?',
      name: 'contributing',
    },
    {
      message: 'Are there any tests for your project ?',
      name: 'tests',
    },
    {
      message: 'Please provide your Github username',
      name: 'githubusername',
    },
    {
      message: 'Enter your email address',
      name: 'questions',
    }
  ]).then((data) => {writeToFile('./example/README.md', generateMarkdown(data));}
  )
}
// function to thorw data into md file or an error 
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Generating your README File...'))
}
// what gets loaded when the app starts 
function init() {
  questions();
}

// Function call to initialize app
init();