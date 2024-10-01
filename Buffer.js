const buffer = new Buffer.from("asdkaksd");
buffer.write("tad");
console.log(buffer);
console.log(buffer.toJSON());
console.log(buffer.toString());



//IF OVERFLOWED IT LIMITS TO CHARACTERS