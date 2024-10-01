const fs = require("node:fs");

const readablefile = fs.createReadStream(__filename);

readablefile.close();

readablefile.on("close", () => {
  console.log("Close CAllback from FIle Stream");
});

setTimeout(() => console.log("Timeout"), 0);
setImmediate(() => console.log("Set Immideate "));
process.nextTick(() => console.log("Process NExt TIkc"));
Promise.resolve().then(() => console.log("Promice Got resolved"));
