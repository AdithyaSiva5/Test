const http = require("node:http");

const server = http.createServer((req, res) => {
  const superhero = {
    web: "Spiderman",
    bat: "Batman",
  };
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(superhero));
});
server.listen(3000, () => {
  console.log("SERVER STARTED");
});
