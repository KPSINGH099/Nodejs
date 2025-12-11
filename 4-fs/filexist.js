const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "data.txt");

if (fs.existsSync(file)) {
  console.log("File exists!");
} else {
  console.log("File not found");
}
