//even though cookie-parser is not used here,
//we do have req.cookies available

const express = require("express");

const app = express();

// GET /hello route

app.get("/hello", (req, res) => {
console.log("Cookies: ", req.cookies);
  res.send("Hello World");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
