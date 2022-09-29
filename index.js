let ProductProto = {
   toString: function () {
      return `toString: nazwa: ${this.name}, cena: ${this.price}`;
   }
};

let hat = {
   name: "czapka",
   price: 100,

   getPriceIncTax() {
      return Number(this.price * 1.2);
   }
};
let boots = {
   name: "buty",
   price: "100",

   getPriceIncTax() {
      return Number(this.price * 1.2);
   }
};

Object.setPrototypeOf(hat, ProductProto);
Object.setPrototypeOf(boots, ProductProto);

console.log(hat.toString());
console.log(boots.toString());
