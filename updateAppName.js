// updateAppName.js
const fs = require("fs");
const path = require("path");

// Nom de l'application à mettre à jour
const newAppName =
  "EzStart - The Ultimate Boilerplate for Modern Web Development"; // Remplacez par le nom souhaité
const oldAppName = "Your Application Name"; // Remplacez par le nom actuel de l'application dans le README

// Chemins vers les fichiers
const packageJsonFilePath = path.join(__dirname, "package.json");
const readmeFilePath = path.join(__dirname, "README.md");
const i18nFolderPath = path.join(__dirname, "messages");

// Mettre à jour package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonFilePath, "utf-8"));
packageJson.name = newAppName.toLowerCase().replace(/[^a-z0-9-._~]/g, "-");
fs.writeFileSync(packageJsonFilePath, JSON.stringify(packageJson, null, 2));

// Mettre à jour README.md
let readmeContent = fs.readFileSync(readmeFilePath, "utf-8");
readmeContent = readmeContent.replace(new RegExp(oldAppName, "g"), newAppName);
fs.writeFileSync(readmeFilePath, readmeContent);

// Mettre à jour les fichiers de traduction si le dossier existe
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
