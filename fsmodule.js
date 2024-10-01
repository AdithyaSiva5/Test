const fs = require("node:fs");

//Synchronous
const content = fs.readFileSync("./file.txt", "utf-8");
console.log(content);
//Asynchronous Method
const content2 = fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

fs.writeFileSync("./text.txt", "WRITTEN CODE");

//asynchronous method

fs.writeFileSync("./text.txt", "NEW TEXT DATAAAA", { flag: "a" }, (err) => {
  if (err) {
    console.log("ERROR");
  } else {
    console.log("Successfull");
  }
});
