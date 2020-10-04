// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.name}

  ## Description
  ${data.description}

  ## Table of Contents
    -[Description](#description)
    -[Installation](#installation)
    -[Usage](#usage)
    -[Licenses](#licenses)
    -[Contribution](#contribution)
    -[Test](#test)
    -[Questions] (#questions)

  

`;
}

module.exports = generateMarkdown;
