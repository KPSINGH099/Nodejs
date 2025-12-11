const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "files", "demo.txt");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) return console.error(err);
  console.log("File Content:", data);
});
