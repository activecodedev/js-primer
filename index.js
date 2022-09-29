let hat = {
   name: "czapka",
   _price: 100,
   priceIncTax: 100 * 1.2,

   set price(newPrice) {
      this._price = newPrice;
      this.priceIncTax = this._price * 1.2;
   },

   get price() {
      return this._price;
   },

   writeDetails() {
      console.log(`${this.name}: ${this.price}, ${this.priceIncTax}`)
   }
};
let boots = {
   name: "buty",
   price: "100",

   get priceIncTax() {
      return Number(this.price) * 1.2;
   }
};

hat.writeDetails = hat.writeDetails.bind(hat);
hat.writeDetails();
hat.price = 120;
hat.writeDetails();

console.log(`buty: ${boots.price}, ${boots.priceIncTax}`);
hat.price = "120";
console.log(`buty: ${boots.price}, ${boots.priceIncTax}`);

let gloves = {
   productName: "rękawiczki",
   price: "40"
};
let otherHat = { ...hat };

console.log(`Rozwinięcie: ${otherHat.name}, ${otherHat.price}`);

let additionalProperties = { ...hat, discounted: true };
console.log(`Dodatkowe: ${JSON.stringify(additionalProperties)}`);

let replacedProperties = { ...hat, price: 10 };
console.log(`Zastąpione: ${JSON.stringify(replacedProperties)}`);

let { price, ...someProperties } = hat;
console.log(`Wybrane: ${JSON.stringify(someProperties)}`);

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