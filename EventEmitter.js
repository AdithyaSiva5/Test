const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("order-pizza", (size, topping) => {
  console.log(`pizza ordered ${size} with ${topping}`);
});

console.log("should work here");

emitter.on("order-pizza", (size) => {
  if (size == 20) {
    console.log("size is", size);
  }
});

emitter.emit("order-pizza", 20, "mushroom");
