const path = require("path");

app.get("/file", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
