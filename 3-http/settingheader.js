app.get("/test", (req, res) => {
  res.set("Content-Type", "application/json");
  res.send({ message: "Hello" });
});


app.get("/test", (req, res) => {
  res.set({
    "Content-Type": "application/json",
    "X-Powered-By": "Node.js",
    "Custom-Header": "MyHeader"
  });

  res.send({ msg: "Headers set!" });
});



app.get("/test", (req, res) => {
  res.status(200).set("Content-Type", "text/plain");
  res.send("OK");
});


app.get("/custom", (req, res) => {
  res.set("X-User-Role", "Admin");
  res.send("Custom header added");
});


app.get("/append", (req, res) => {
  res.append("Set-Cookie", "token=abc123");
  res.append("Set-Cookie", "theme=dark");
  res.send("Cookies sent");
});


