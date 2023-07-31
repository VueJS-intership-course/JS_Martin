function storeProvision(stockArray, deliverArray) {

    let storedProducts = {};

    for (let index = 0; index < stockArray.length; index+=2) {
        let currentProduct = stockArray[index];
        storedProducts[currentProduct] = Number(stockArray[index + 1]);
    }

    for (let index = 0; index < deliverArray.length; index+=2) {
        let currentProduct = deliverArray[index];
        if(!storedProducts.hasOwnProperty(currentProduct)) {
            storedProducts[currentProduct] = 0;
        }
        storedProducts[currentProduct] += Number(deliverArray[index + 1])
    }
    
    for (const key in storedProducts) {
        console.log(`${key} -> ${storedProducts[key]}`);
    }
}
storeProvision(
  ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
  ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);
