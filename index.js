class Product {
   constructor(name, price) {
      this.name = name;
      this.price = price;
   }

   toString() {
      return `toString: nazwa ${this.name}, cena: ${this.price}`;
   }
}

class TaxedProduct extends Product {
   constructor(name, price, taxRate = 1.2) {
      super(name, price);
      this.taxRate = taxRate;
   }

   getPriceIncTax(){
      return Number(this.price) * this.taxRate;
   }

   toString(){
      let chainResult = super.toString();

      return `${chainResult}, z podatkiem: ${this.getPriceIncTax()}`;
   }

   static process(...products){
      products.forEach(p => console.log(p.toString()));
   }
}

TaxedProduct.process(new TaxedProduct("czapka", 100, 1.2), new TaxedProduct("buty", 100))

let hat = new TaxedProduct("czapka", 100);
let boots = new TaxedProduct("buty", 100, 1.3);

console.log(hat.toString());
console.log(boots.toString());