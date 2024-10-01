const http = require("node:http");
const cluster = require("node:cluster");
const os = require("node:os");

const numCPU = os.cpus().length;

console.log(numCPU);

if (cluster.isMaster) {
  console.log(`master process ${process.pid} is running`);
  cluster.fork();
  cluster.fork();
} else {
  console.log(`worker process ${process.pid} is running`);
  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("HOME");
    } else if (req.url == "/slow-page") {
      for (let i = 0; i < 6000000000; i++) {}
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Slow Page");
    }
  });

  server.listen(3000, () => {
    console.log("Server Started");
  });
}
