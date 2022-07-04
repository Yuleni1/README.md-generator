// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(licenseb) {
//if they had answered none icon
  if(licenseb !== "none"){
    return`![GitHub license](https://img.shields.io/badge/license-${licenseb})` ;
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
function renderLicenseSection(license, licenseb) {
  if(license !== "none"){
    return `

  ### ${license}
 
  - ${renderLicenseLink(license)}
    `
  }
}

// TODO: Create a function to generate markdown for README
//this will have the #, ##, * for the read me file 
function generateMarkdown(data) {
  return `
  # ${data.title} ${renderLicenseBadge(data.licenseb)}


  ## Description
  ${data.description}


  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contribution](#contribution)
  5. [Tests](#tests)
  6. [Questions](#questions)

  ## Installation
  ${data.installation}


  ## Usage 
  ${data.usage}


  ## License 
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
