const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
// undefined

app.use(cookieParser()); // 🔹 must be before routes


//res.cookie name value options
app.get("/set-cookie", (req, res) => {
    console.log(req.cookie); 
    //console.log(req.headers);
  res.cookie("token", "abc123", {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });

  res.send("Cookie has been set");
});

app.get("/get-cookie", (req, res) => {
  console.log(req.cookies); // all cookies
  console.log(req.cookies.token); // specific cookie

  res.send("Check console");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
