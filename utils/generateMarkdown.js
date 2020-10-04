// function to generate markdown for README
function generateMarkdown(projectData) {
  return `
  # ${projectData.name}

  ## Description
  ${projectData.description}

  ## Table of Contents
    *[Description](#description)
    *[Installation](#installation)
    *[Usage](#usage)
    *[Licenses](#licenses)
    *[Contribution](#contribution)
    *[Test](#test)
    *[Questions] (#questions)

  

`;
}

module.exports = generateMarkdown;
