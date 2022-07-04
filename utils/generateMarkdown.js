// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
//if they had answered none icon
  if(license !== "none"){
    return`![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)` ;
  }
  return "";

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//[]
function renderLicenseLink(license) {

  if(license !== "none"){
    return `
    [License link](https://opensource.org/licenses/${license})
    `
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "none"){
    return `

  ### ${license}
  - ${renderLicenseBadge(license)}
  - ${renderLicenseLink(license)}
    `
  }
}

// TODO: Create a function to generate markdown for README
//this will have the #, ##, * for the read me file 
function generateMarkdown(data) {
  return `
  # ${data.title} ${renderLicenseBadge(data.license)}


  ## Description
  ${data.description}


  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Lisence](#license)
  4. [contribution](#contribution)
  5. [Tests](#tests)
  6. [Questions](#Questions)

  ## Installation
  ${data.installation}


  ## Usage 
  ${data.usage}


  ## Lisence 
  ${renderLicenseSection(data.license)}


  ## Contribution
  ${data.contribution}


  ## Tests 
  ${data.tests}


  ## Questions
  ### Github User name:
  ${data.github}
  ### Github link:
  [Github Link](https://github.com/${data.github})
  ### Please reach out to me for additional information using the following email: 
  ${data.email}

`

}


module.exports = generateMarkdown;
