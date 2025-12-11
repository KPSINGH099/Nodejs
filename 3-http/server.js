const http = require("http");

const PORT = 3000;

// Create server
const server = http.createServer((req, res) => {
  res.statusCode = 200;                      // Set status
  res.setHeader("Content-Type", "text/plain"); // Set headers

  // Basic routing
  if (req.url === "/" && req.method === "GET") {
    res.end("Welcome to Home Page");
  } else if (req.url === "/about" && req.method === "GET") {
    res.end("This is About Page");
  } else if (req.url === "/data" && req.method === "POST") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      res.end(`Received JSON: ${body}`);
    });

  } else {
    res.statusCode = 404;
    res.end("Route not found");
  }
});

// Start server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
