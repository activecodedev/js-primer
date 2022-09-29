// let ProductProto = {
//    toString: function () {
//       return `toString: nazwa: ${this.name}, cena: ${this.price}`;
//    }
// };

// let hat = {
//    name: "czapka",
//    price: 100,

//    getPriceIncTax() {
//       return Number(this.price * 1.2);
//    }
// };
// let boots = {
//    name: "buty",
//    price: "100",

//    getPriceIncTax() {
//       return Number(this.price * 1.2);
//    }
// };

// Object.setPrototypeOf(hat, ProductProto);
// Object.setPrototypeOf(boots, ProductProto);

// console.log(hat.toString());
// console.log(boots.toString());

let Product = function (name, price) {
   this.name = name;
   this.price = price;
}

Product.prototype.toString = function () {
   return `toString: nazwa: ${this.name}, cena: ${this.price}`;
}

let TaxedProduct = function (name, price, taxRate) {
   Product.call(this, name, price);
   this.taxRate = taxRate;
}
Object.setPrototypeOf(TaxedProduct.prototype, Product.prototype);
TaxedProduct.prototype.getPriceIncTax = function () {
   return Number(this.price) * this.taxRate;
}

TaxedProduct.prototype.toTaxString = function() {
   return `${this.toString()}, z podatkiem: ${this.getPriceIncTax()}`;
}

let hat = new TaxedProduct("czapka", 100, 1.2);
let boots = new Product("buty", 100);

console.log(hat.toTaxString());
console.log(boots.toString());
console.log(`hat i TaxedProduct: ${hat instanceof TaxedProduct}`);
console.log(`hat i Product: ${hat instanceof Product}`);
console.log(`boots i TaxedProduct: ${boots instanceof TaxedProduct}`);
console.log(`boots i Product: ${boots instanceof Product}`);