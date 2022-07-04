// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const generateMarkdown = require("./utils/generateMarkdown")

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
        name:'contribution',
        message:'Who contributed in this project?'  
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
        choices: ['Apache-2.0','MIT','BSD-2-Clause']
    },
    {
        type:'checkbox',
        name:'licenseb',
        message:'Please reselect license for badge.',
        choices: ['Apache%202.0-blue.svg','MIT-yellow.svg','BSD%202--Clause-orange.svg']
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


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        writeToFile("README.md", generateMarkdown(data))
        console.log(data)
    })

}

// Function call to initialize app
init()



