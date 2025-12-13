require("dotenv").config();

//const express = require("express");
//const app = express();

const PORT = process.env.PORT;

console.log("Server running on port " + PORT); 


//to use dotenv with custom path other name than .env

//dotenv does NOT override existing environment variables by default
require("dotenv").config({ path: "config.env" });


//existing environment variables are NOT overridden by default
console.log(process.env.PORT);

//new variables from config.env are loaded
console.log(process.env.B);


// If you want to override existing environment variables, use the override option
//require("dotenv").config({ path: "config.env", override: true });