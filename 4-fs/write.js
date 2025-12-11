const fs = require("fs");
const path = require("path");

const outputPath = path.join(__dirname, "output", "message.txt");

fs.writeFile(outputPath, "Hello Kishan!", (err) => {
  if (err) return console.error(err);
  console.log("File written");
});