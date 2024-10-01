const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "Text/Plain" });
    res.end("HOME PAGE");
  }
  if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "Text/Plain" });
    res.end("APII");
  }
  if (req.url === "/data") {
    const superheros = {
      superman: "Superman",
      spiderman: "Spiderman",
    };
    res.writeHead(200, { "Content-Type": "Application/JSON" });
    res.end(JSON.stringify(superheros));
  }
  res.writeHead(200, { "Content-Type": "Text/Plain" });
  res.end("PAGE NOT FOUND");
});

server.listen(3000, () => {
  console.log("SERVER RUNNING ON 3000");
});
