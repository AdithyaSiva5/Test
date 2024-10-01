const EventEmitter = require("events");

class Pizza extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }
  order(size, topping) {
    this.orderNumber++;
    this.emit("order", size, topping);
  }
  getOrderNumber() {
    console.log("Order number is :", this.orderNumber);
  }
}

module.exports = Pizza;
