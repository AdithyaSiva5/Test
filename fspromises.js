const fs = require("node:fs/promises");

fs.readFile("./file.txt", "utf-8")
  .then((data) => {
    console.log("DATA", data);
    console.log("DONE");
  })
  .catch((err) => {
    console.log("ERROR" + err);
  });

//async await function

async function fileread() {
  try {
    const data = await fs.readFile("./file.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log("error : ", error);
  }
}
fileread();
