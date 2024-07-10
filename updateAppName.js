// updateAppName.js
const fs = require("fs");
const path = require("path");

// Application name to be updated
const newAppName =
  "EzStart - The Ultimate Boilerplate for Modern Web Development"; // Replace with the desired name
const oldAppName = "Your Application Name"; // Replace with the current application name in the README

// Paths to the files
const packageJsonFilePath = path.join(__dirname, "package.json");
const readmeFilePath = path.join(__dirname, "README.md");
const i18nFolderPath = path.join(__dirname, "messages");

// Update package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonFilePath, "utf-8"));
packageJson.name = newAppName.toLowerCase().replace(/[^a-z0-9-._~]/g, "-");
fs.writeFileSync(packageJsonFilePath, JSON.stringify(packageJson, null, 2));

// Update README.md
let readmeContent = fs.readFileSync(readmeFilePath, "utf-8");
readmeContent = readmeContent.replace(new RegExp(oldAppName, "g"), newAppName);
fs.writeFileSync(readmeFilePath, readmeContent);

// Update translation files if the folder exists
if (fs.existsSync(i18nFolderPath)) {
  fs.readdirSync(i18nFolderPath).forEach((file) => {
    const filePath = path.join(i18nFolderPath, file);
    let fileContent = fs.readFileSync(filePath, "utf-8");
    const updatedContent = fileContent.replace(
      /("meta-title"\s*:\s*")[^"]*(")/,
      `$1${newAppName}$2`
    );
    fs.writeFileSync(filePath, updatedContent);
  });
} else {
  console.log(
    `The folder ${i18nFolderPath} does not exist, skipping translation update.`
  );
}

console.log(`App name updated to ${newAppName} successfully!`);
