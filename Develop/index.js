// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs=require("fs")
// title of my project and sections entitled Description, Installation, Usage, License, Contributing, Tests, and Questions
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "what is your tittle?",
    name: "userTitle"
}, {
    type: "input",
    message: "what is your description?",
    name: "description"
}, {
    type: "input",
    message: "what is your Installation ?",
    name: "Installation"
}, {
    type: "input",
    message: "what is your usage?",
    name: "usage"
}, {
    type: "input",
    message: "what is your License?",
    name: "License"

},{
    type: "input",
    message: "what is your Contributing ?",
    name: "Contributing"

}, {
    type: "input",
    message: "what is your test?",
    name: "test"

}, {
    type: "input",
    message: "what is your Github username ?",
    name: "GithubUsername"

}, {
    type: "input",
    message: "what is your Email?",
    name: "Email"

}];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   fs.writeFileSync(fileName,data) 
 }

// TODO: Create a function to initialize app
function init() { 
    //console.log("'Hey Carlos, it's carlos");
    inquirer.prompt(questions)
    .then(answerObject => {
        console.log(answerObject)
        //console.log("Aanswer 1:", answerObject.userTitle);
        //console.log("Aanswer 2:", answerObject.description);
        const readmeContent = generateMarkdown(answerObject);
        //console.log('repsitory tiel is', readmeContent);
writeToFile("README.md",readmeContent)

        // now that you have your readme content successfully returning to you and being
        // stored in the const readmeContent, you want to save that to a file. Tthis is where 
        // the function writeToFfile must be incorporated.
    })
}

// Function call to initialize app
init();
