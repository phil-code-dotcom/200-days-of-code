/*
Problem 3 — Product Inventory

You are given:

const products = [
    { name: "Laptop", price: 450000, quantity: 5 },
    { name: "Phone", price: 250000, quantity: 10 },
    { name: "Keyboard", price: 30000, quantity: 15 },
    { name: "Mouse", price: 15000, quantity: 20 },
    { name: "Monitor", price: 180000, quantity: 3 }
];
Instructions
Display each product's name and price.
Use if/else to determine whether a product is expensive or affordable.
100,000 and above → "Expensive"
Below 100,000 → "Affordable"
Create an array containing the names of products that cost 100,000 or more.
Create another array containing products with a quantity of 10 or more.
Calculate the total number of products in stock.
Create a function called calculateAveragePrice() that returns the average product price.
Display all results.
*/

const products = [
    { name: "Laptop", price: 450000, quantity: 5 },
    { name: "Phone", price: 250000, quantity: 10 },
    { name: "Keyboard", price: 30000, quantity: 15 },
    { name: "Mouse", price: 15000, quantity: 20 },
    { name: "Monitor", price: 180000, quantity: 3 }
];

console.log("PRODUCTS NAME AND PRICE")
products.forEach(product => {
    let cost;
    if (product.price >= 100000) {
        cost = "Expensive";
    } else {
        cost = "Affordable";
    }
    console.log(`Product Name: ${product.name}, Price: ${product.price} -- ${cost}` );
});

console.log();
const costlyProducts = products.filter(product => product.price >= 100000);
console.log(`The names of products that cost 100,000 or more.`);
costlyProducts.forEach(product => console.log(`Product Name: ${product.name}, Price: ${product.price}`));

console.log();
const muchQuantity = products.filter(product => product.quantity >= 10);
console.log(`Create another array containing products with a quantity of 10 or more.`);
muchQuantity.forEach(product => console.log(`Product Name: ${product.name}, Price: ${product.quantity}`));

console.log();
const totalOfProducts = products.reduce(((sum, product) => sum + product.quantity), 0);
console.log(`Total number of products in stock: ${totalOfProducts}`);


function calculateAveragePrice(array) {
    return array.reduce(((sum, product) => sum + product.price), 0) / array.length;
}

console.log();
console.log(`Average product price: ${calculateAveragePrice(products)}`);