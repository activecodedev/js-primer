import { calculateTax } from "./tax";

export function printDetails(product) {
   let taxedPrice = calculateTax(product.price);
   console.log(`nazwa: ${product.name}, cena wraz z podatkiem: ${taxedPrice}`);
}

export function applyDiscount(product, discount = 5){
   product.price = product.price - 5;
}