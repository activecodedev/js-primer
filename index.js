let hatPrice = 100;
console.log(`Cena czapki: ${hatPrice}`);
let bootsPrice = "100";
console.log(`Cena butów: ${bootsPrice}`);

function sumPrices(...numbers) {
   return numbers.reduce(function (total, val) {
      let currentValue = Number(val);
      let afterCastToNumber = Number.isNaN(currentValue) ? 0 : currentValue;

      return total + afterCastToNumber;
   }, 0);
}

let totalPrice = sumPrices(hatPrice, bootsPrice);
console.log(`Wartość całkowita: ${totalPrice} ${typeof totalPrice}`);
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