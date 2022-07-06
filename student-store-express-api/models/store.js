//storage.js
const { storage } = require("../data/storage");
//const storage = require("../data/storage");
//when / call another function

class Store {
  static getProds() {
    const productsHere = storage.get("products").value();
    return productsHere; //"" from db
  }
  static getProdById(id) {
    const results = Store.getProds();
    // productsHere.find((product) => product.id === id); //has to = curr id
    return results.find((product) => (product.id = id));
    //create purchase order...
  }
}
module.exports = Store;
