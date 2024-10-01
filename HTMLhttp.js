const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "Text/Html" });

  //   fs.createReadStream(__dirname + "/http.html").pipe(res);

  let name = "Adithya";
  let html = fs.readFileSync("./http.html", "utf-8");
  html = html.replace("{{name}}", name);
  res.end(html);
});

server.listen(3000, () => {
  console.log("SERVER RUNNING ON 3000");
});
