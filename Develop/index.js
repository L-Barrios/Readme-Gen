// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');

const inquirer = require('inquirer');

const fs = require ('fs'); 

// TODO: Create an array of questions for user input
// Questions located here...
    //Project title question
const questions = [
    inquirer.prompt([
        {
            type: 'input', 
            name: 'Title', 
            message: 'Please enter your project title.', 
            validate: titleInput => {
                if ( titleInput) {
                    return true;
                } else {
                    console.log ('Must enter project title!')
                    return false;
                }
            }
        }, 

        // Description Question

        { 
            type: 'input',
            name: 'Description',
            message: 'Please enter your projects description.',
            validate: desInput => {
                if ( desInput) {
                    return true;
                } else {
                    console.log ('Must enter a description!')
                    return false; 
                }
            }
        },

        //Installation Instructions
        {
            type: 'input',
            name: 'Installation', 
            message: 'Please enter the installation instructions for your application',
            validate: installInput => {
                if( installInput) {
                    return true;
                } else {
                    console.log ( 'Must enter instructions!')
                    return false;
                }
            }
        }, 

        // Usage Info
        {
            type: 'input', 
            name: 'Usage', 
            message: 'Please describe the usage of your apllication',
            validate: useInput => {
                if( useIput) {
                    return true;
                } else { 
                    console.log ( 'Must enter the usage of your application!')
                    return false; 


                }
            }
        }, 

        // Contribution Guidelines
        { 
            type: 'input', 
            name: 'Contribution',
            message: 'Please enter any contribution guidelines.', 
            validate: conInput => {
                if (conInput) {
                    return true;
                } else {
                    console.log ('Must enter guidelines!')
                    return false; 
                }
            }
        }, 

        //Test Instructions
        { 
            type:'input', 
            name: 'Test', 
            message: 'Please enter any test instructions.',
            validate: testInput => {
                if ( testInput) {
                    return true; 
                } else {
                    console.log ('Must enter test instructions!') 
                    return false; 
                }
            }
        }, 

        //License  Info
        { 
            type: 'list', 
            name: 'License', 
            message: 'Please the license that apply...',
            choices: ['Apache', 'Boost', 'MIT', 'Unlicense']
        }, 


        //Contact Info 
        {
            type: 'input', 
            name: 'github', 
            message: 'Please enter your Github username.',
            validate: gitInput => {
                if (gitInput) {
                    return true;
                } else {
                    console.log ('You must enter username!')
                    return false; 
                }

            }
        }, 

        //Email Info
        {
            type: 'input', 
            name: 'email', 
            message: 'Please enter your email.', 
            validate: emailInput => {
                if ( emailInput) {
                    return true; 
                } else { 
                    console.log ('Must enter email!')
                    return false;
                }
            }
        },

    ])

    .then(answers => { 
            console.log(answers)

            const text = generateMarkdown(answers);
            console.log(text);
            writeToFile('./README.md', text )
    })

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
