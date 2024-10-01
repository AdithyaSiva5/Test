const fs = require("node:fs");
const zlib = require("node:zlib");

const gzib = zlib.createGzip();
const readStream = fs.createReadStream("./text.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});
readStream.pipe(gzib).pipe(fs.WriteStream("./new.txt.gz"));

const writeStream = fs.createWriteStream("./new.txt");

//pipe
readStream.pipe(writeStream);

// readStream.on("data", (chunk) => {
//   console.log(chunk);
//   writeStream.write(chunk);
// });
