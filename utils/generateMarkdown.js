
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'The MIT License') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    THIS APPLICATION  IS COVERED UNDER THE MIT LICENSE`

  } else if (license === 'Apache 2.0 License') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    THIS APPLICATION  IS COVERED UNDER Apache 2.0 License`

  } else if (license === 'GNU GPL v3') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
    THIS APPLICATION  IS COVERED UNDER GNU GPL v3`

  } else {
    return '';
  }
}

function generateMarkdown(data) {
  return `
  # ${data.title}
  ## ${renderLicenseSection(data.license)}
---
  ## Description
  ### ${data.description}
  ## Table of Contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
- [Questions?](#questions)
## Installation:
${data.installation}
## Usage:
${data.usage}
## Contributing:
${data.contributing}
## Tests:
${data.tests}
## Questions?
If you have any additional questions, please reach me at ${data.questions}
OR
<br />
[Github](https://www.github.com/${data.githubusername})
`;
}

module.exports = generateMarkdown;