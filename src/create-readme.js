const generateReadMe = projectArr => {
    return `
    # ${name}

    # Table of Contents
    -[Description](#description)
    -[Installation](#installation)
    -[Usage](#usage)
    -[Licenses](#licenses)
    -[Contribution](#contribution)
    -[Test](#test)
    -[Questions] (#questions)

    #Description
    ${description}
    `
}


module.exports = generateReadMe;