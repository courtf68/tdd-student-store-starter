//storage.js
const { storage } = require("../data/storage.js");
//when / call another function

class Store {
  static getProds() {
    const productsHere = storage.get("products");
    return productsHere; //"" from db
  }
  static getProdById(id) {
    const results = productsHere.find((product) => product.id === id); //has to = curr id
    return results;
  }
  //create purchase order...
}

module.exports = Store;
