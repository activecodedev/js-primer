class Product {
   constructor(name, price) {
      this.id = Symbol();
      this.name = name;
      this.price = price;
   }

   toString() {
      return `toString: nazwa ${this.name}, cena: ${this.price}`;
   }
}

function createProductIterator() {
   const hat = new Product("czapka", 100);
   const boots = new Product("buty", 100);
   const umbrella = new Product("parasol", 23);

   let lastVal;

   return {
      next() {
         switch (lastVal) {
            case undefined:
               lastVal = hat;
               return { value: hat, done: false };
               break;
            case hat:
               lastVal = boots;
               return { value: boots, done: false };
            case boots:
               lastVal = umbrella;
               return { value: umbrella, done: false };
            case umbrella:
               lastVal = undefined;
               return { value: undefined, done: true };

            default:
               break;
         }
      }
   }
}

let iterator = createProductIterator();
let result = iterator.next();
while (!result.done) {
   console.log(result.value.toString());
   result = iterator.next();
}

function* createProductIterator2() {
   yield new Product("czapka", 100);
   yield new Product("buty", 100);
   yield new Product("parasol", 23);
}

[...createProductIterator2()].forEach(p => console.log(p.toString()));

// --- Standard use of generator ---
// let iterator2 = createProductIterator2();
// let result2 = iterator2.next();
// while (!result2.done) {
//    console.log(result2.value.toString());
//    result2 = iterator2.next();
// }

class TaxedProduct extends Product {
   constructor(name, price, taxRate = 1.2) {
      super(name, price);
      this.taxRate = taxRate;
   }

   getPriceIncTax() {
      return Number(this.price) * this.taxRate;
   }

   toString() {
      let chainResult = super.toString();

      return `${chainResult}, z podatkiem: ${this.getPriceIncTax()}`;
   }

   static process(...products) {
      products.forEach(p => console.log(p.toString()));
   }
}

TaxedProduct.process(new TaxedProduct("czapka", 100, 1.2), new TaxedProduct("buty", 100))

let hat = new TaxedProduct("czapka", 100);
let boots = new TaxedProduct("buty", 100, 1.3);

console.log(hat.toString());
console.log(boots.toString());

class GiftPack {
   constructor(name, prod1, prod2, prod3) {
      this.name = name;
      this.prod1 = prod1;
      this.prod2 = prod2;
      this.prod3 = prod3;
   }

   getTotalPrice() {
      return [this.prod1, this.prod2, this.prod3].reduce((total, p) => total + p.price, 0);
   }

   *[Symbol.iterator]() {
      yield this.prod1;
      yield this.prod2;
      yield this.prod3;
   }
}

let winter = new GiftPack("zima", new Product("czapka", 100), new Product("buty", 100), new Product("parasol", 23));
console.log(`Wartość całkowita: ${winter.getTotalPrice()}`);
[...winter].forEach(p => console.log(`Produkt: ${p}`));

// -- Section: collection in JS ---
let data = {
   hat: new Product("czapka", 100)
}
data.boots = new Product("buty", 100);
Object.keys(data).forEach(key => console.log(data[key].toString()));

let data2 = new Map();
data2.set("hat", new Product("czapka", 100));
data2.set("boots", new Product("buty", 100));
[...data2.keys()].forEach(p => console.log(data2.get(p).toString()));

// --- Use Symbol as a key ---
class Supplier {
   constructor(name, productids) {
      this.name = name;
      this.productids = productids;
   }
}

let acmeProducts = [new Product("czapka", 100), new Product("buty", 100)];
let zoomProducts = [new Product("czapka", 100), new Product("buty", 100)];

let products = new Map();
[...acmeProducts, ...zoomProducts].forEach(p => products.set(p.id, p));
let suppliers = new Map();
suppliers.set("acme", new Supplier("Acme Co", acmeProducts.map(p => p.id)));
suppliers.set("zoom", new Supplier("Zoom Shoes", zoomProducts.map(p => p.id)));

suppliers.get("acme").productids.forEach(id => console.log(`nazwa: ${products.get(id).name}`));

// --- Use Set collection ---
let product = new Product("czapka", 100);

let productArray = [];
let productSet = new Set();

for (let i = 0; i < 5; i++) {
   productArray.push(product);
   productSet.add(product);
}

console.log(`Wielkość tablicy: ${productArray.length}`);
console.log(`Wielkość zbioru: ${productSet.size}`);