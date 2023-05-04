const coffeeMenu = require("./coffee_data.js")

// all drink names in a array
const coffeeNames = coffeeMenu.map(coffee => {
    return coffee.name
})
console.log(coffeeNames)

// drinks 5 and under
const fiveAndUnder = coffeeMenu.map(coffee => {
    if (coffee.price <= 5)
    return coffee.name
})
console.log(fiveAndUnder)

// drinks that are even numbers
const evenPrice = coffeeMenu.map(coffee => {
    if (coffee.price % 2 === 0)
    return coffee.name
})
console.log(evenPrice)

// total cost of all drinks
const totalPrice = 0;
const totalCost = coffeeMenu.reduce((accumulator , currentValue) => {
    return accumulator + currentValue.price
}, totalPrice)

console.log("total cost $" + totalCost)