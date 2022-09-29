let hat = {
   name: "czapka",
   price: 100
};
let boots = {
   name: "buty",
   price: "100"
};
let gloves = {
   productName: "rękawiczki",
   price: "40"
};

gloves.name = gloves.productName;
delete gloves.productName;
gloves.price = 20;

let propertyCheck = hat.price || 0;
let objectAndPropertyCheck = (hat || {}).price || 0;
console.log(`Sprawdzenie: ${propertyCheck}, ${objectAndPropertyCheck}`);

let names = ["czapka", "buty", "rękawiczki"];
let prices = [];

prices.push(100);
prices.push("100");
prices.push(50.25);
console.log(`Pierwszy element: ${names[0]}: ${prices[0]}`);

let sumPrices = (...numbers) => numbers.reduce((total, val) =>
   total + (Number.isNaN(Number(val)) ? 0 : Number(val)), 0);

let totalPrice = sumPrices(...prices);
console.log(`Wartość całkowita: ${totalPrice} ${typeof totalPrice}`);

totalPrice = sumPrices(hat.price, boots.price, gloves.price);
console.log(`Wartość całkowita: ${totalPrice} ${typeof totalPrice}`);

let combinedArray = [...names, ...prices];
combinedArray.forEach(element => console.log(`Połączony element tablicy: ${element}`));

totalPrice = sumPrices(100, 200, 300);
console.log(`Wartość całkowita: ${totalPrice} ${typeof totalPrice}`);
totalPrice = sumPrices(100, 200, undefined, false, "Witaj");
console.log(`Wartość całkowita: ${totalPrice} ${typeof totalPrice}`);

let myVariable = "Rafał";
console.log(`Typ: ${typeof myVariable}`);
myVariable = 100;
console.log(`Typ: ${typeof myVariable}`);

let firstCity;
let secondCity = firstCity || "Warszawa";
console.log(`Miasto: ${secondCity}`);