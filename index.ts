
type Pizza = {
    name: string,
    price: number
}


const menu = [

    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 6 },
]

let cashInRegister: number = 100
const orderQueue = []
let nextOrderId: number = 1;

//write a function that add new pizza to the menu array
function addNewPizza(pizzaObject: Pizza) {
    menu.push(pizzaObject)
}
/*
Write a utility function called placeOrder that takes a pizza name as parameter, then finds that pizza i the menu array. If found, add the income to the cashInRegister variable. Add a new object to the OrderQueue array and  return the object
*/
function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);

    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in this menu`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

/**
 * Challenge: write another utility function, completeOrder that takes an orderId as a parameter
 * finds the correct order in the orderQueue, and marks its status as "completed". For good measure, return the found order from the function
 */

function completeOrder(orderId: number) {
    const order = orderQueue.find(order => order.id === orderId)
    order.status = "completed"
    return order
}

//Add new Pizzas 
addNewPizza({ name: "Chicken Bacon Ranch", price: 14 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 7 })

//Place an order
placeOrder("Chicken Bacon Ranch");
completeOrder(12)

console.log("Menu", menu)
console.log("Cash in register", cashInRegister)
console.log("Order queue", orderQueue)
    