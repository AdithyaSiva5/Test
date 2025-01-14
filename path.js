const path = require("node:path");

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.extname(__filename));
console.log(path.parse(__filename));

console.log(path.format(path.parse(__filename)));

console.log(path.isAbsolute(__filename));

console.log(path.join("folder1", "folder2", "folder3"));
console.log(path.join("/folder1", "//folder2", "folder3"));
console.log(path.join("/folder1", "//folder2", "../folder3"));
console.log(path.join("/folder1", "/data.json"));

console.log(path.resolve("folder1", "folder2", "folder3"));
console.log(path.resolve("/folder1", "//folder2", "folder3"));
console.log(path.resolve("/folder1", "//folder2", "../folder3"));
console.log(path.resolve("/folder1", "/data.json"));
