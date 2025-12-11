const express = require("express");
const app = express();

const apiRouter = require("./routes/apiRouter");

// Mount the parent router
app.use("/api", apiRouter);

app.listen(3000, () => console.log("Server running"));
