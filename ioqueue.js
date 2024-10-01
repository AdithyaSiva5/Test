const fs = require("fs");

fs.readFile(__filename, () => {
  console.log("This is readFile1");
  setImmediate(() => console.log("This is Inner Immidiate FUnction"));
});

process.nextTick(() => {
  console.log("THis is process NEXT TICK");
});

Promise.resolve().then(() => {
  console.log("Promise Resolved");
});

setTimeout(() => {
  console.log("SetTimeout Function");
}, 0);

setImmediate(() => console.log("Set Immediate Function"));
for (let i = 0; i < 2000000000; i++) {}
