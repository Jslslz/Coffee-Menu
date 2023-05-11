const coffeeMenu = require("./coffee_data.js")

// all drink names in a array
const coffeeNames = coffeeMenu.map(coffee => {
    return coffee.name
})
console.log(coffeeNames)

// drinks 5 and under        *not the correct way*
const fiveAndUnder = coffeeMenu.map(coffee => {
    if (coffee.price <= 5)
    return coffee.name
})
console.log(fiveAndUnder)

// drinks that are even numbers     *not the correct way*
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

// drinks that are seasonal         *not the correct way*
const seasonalDrinks = coffeeMenu.map(coffee => {
    if (coffee.seasonal === true)
    return coffee.name
})
console.log(seasonalDrinks)

// seasonal drinks with words       *not done*