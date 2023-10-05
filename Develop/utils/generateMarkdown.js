// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## Tittle ${data.userTitle}
  ## description
  ${data.description}
  ## installation
  ${data.Installation}
## usage 
${data.usage}
## License
${data.License}
## Contributing
${data.Contributing}
## test 
${data.test}
## GithubUsername
${data.GithubUsername}
## email 
${data.Email}
`;
}

module.exports = generateMarkdown;
