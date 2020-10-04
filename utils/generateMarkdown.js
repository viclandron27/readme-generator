// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.name} 
  ![badmath](https://img.shields.io/static/v1?label=${data.license}&message=100%&color=<lightgrey>)


  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ![badmath](https://img.shields.io/static/v1?label=${data.license}&message=100%&color=<lightgrey>)

  ## Contribution
  ${data.contributing}

  ## Test
  ${data.tests}

  ## Questions
  Here is a link to my [GitHub Profile](http://github.com/${data.github})

  If you have any more additional questions, feel free to reach me at ${data.email}

  `;
}

module.exports = generateMarkdown;
