// TODO: Include packages needed for this application
const fs = require('fs');


//error path 
const path = require('path');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
//question:they put it in a function and this is just an array of objects
const generateMarkdown = require("./utils/generateMarkdown")
//they use return inquirer.prompt() and then they put the questions inside? 
const questions = [
    {
        type:'input',
        name:'title',
        message:'What is your project title?'  
    },
    {
        type:'input',
        name:'description',
        message:'What is your project description?'  
    },
    {
        type:'input',
        name:'installation',
        message:'What are the steps required to install your project?'  
    },
    {
        type:'input',
        name:'usage',
        message:'Provide instructions and examples for use. Include screenshots as needed.'  
    },
    {
        type:'input',
        name:'contributing',
        message:'Provide contribution guidelines.'  
    },
    {
        type:'input',
        name:'tests',
        message:'Provide examples on how to run tests.'  
    },
    {
        type:'checkbox',
        name:'license',
        message:'Please provide license.',
        choices: ['Apache-2.0','MIT','BSD-2-Clause','gpl-license','lgpl-license',,'MPL-2.0','CDDL-1.0','EPL-2.0','BSD-3-Clause']
    },
    {
        type:'input',
        name:'github',
        message:'Please enter github user name.'  
    },
    {
        type:'input',
        name:'email',
        message:'Please enter email.'  
    },
    



];

// TODO: Create a function to write README file
//fs.write 
function writeToFile(fileName, data) {
    return new Promise(()=>{
    fs.writeFile(fileName,data, err =>{

        if (err) {
            console.log(err)
            return
        }
        else{
            console.log("file has been created")
        }
    
    
       
});
});
}

//is this where they want me to write the html code? 


// TODO: Create a function to initialize app
//inialize what?
//inquirer.prompt ([ iterate through the questions])
function init() {
    inquirer.prompt(questions)
    .then(data => {
        writeToFile("README.md", generateMarkdown(data))
        console.log(data)
    })

}

// Function call to initialize app
init()



