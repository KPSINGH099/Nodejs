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
    secure: true,
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    path: '/hello',
  });



  res.send("Cookie has been set");
});


app.get("/hello", (req, res) => {
console.log("Cookies: ", req.cookies);
  res.send("Hello World");
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
