let hatPrice = 100;
console.log(`Cena czapki: ${hatPrice}`);
let bootsPrice = "100";
console.log(`Cena butów: ${bootsPrice}`);

function sumPrices(first, second, third) {
   return first + second + third;
}

let totalPrice = sumPrices(hatPrice, bootsPrice);
console.log(`Kwota całkowita: ${totalPrice}`);

let myVariable = "Rafał";
console.log(`Typ: ${typeof myVariable}`);
myVariable = 100;
console.log(`Typ: ${typeof myVariable}`);

let firstCity;
let secondCity = firstCity || "Warszawa";
console.log(`Miasto: ${secondCity}`);