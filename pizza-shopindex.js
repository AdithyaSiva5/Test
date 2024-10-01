const pizza = require("./pizza-shop");
const DrinkMachine = require("./drinkmachine");

const drinkMachine = new DrinkMachine();
const pizzahut = new pizza();

pizzahut.on("order", (size, topping) => {
  console.log("Order number is :", size, topping);
  drinkMachine.serverDrink(size);
});

pizzahut.order(4, "mushroom");
