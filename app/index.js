define([], function () {
  return function () {
    /*
     var products = getProductsFromStore(511);
     var inventories = getInventoriesFromStore(511);
     var candidateSelections = reduce(function () {}, products);
     var filteredSelections = filter(function () {});
    */
    var store = {id: 511};
    var products = [
      {
        id: 1,
        primary_category: "Beer",
        is_dead: false,
        is_discontinued: false,
        inventory_count: 1
      },
      {
        id: 2,
        primary_category: "Beer",
        is_dead: false,
        is_discontinued: false,
        inventory_count: 1
      }
    ];
    var inventories = [
      {
        product_id: 1,
        store_id: 511,
        quantity: 1
      },
      {
        product_id: 2,
        store_id: 511,
        quantity: 1
      }
    ];
    var productsWithInventory = products.map(function (product) {
      var inventory = inventories.filter(function (inventory) {
        return inventory.product_id === product.id;
      })[0];
      return {
        product: product,
        inventory: inventory
      };
    });
    return {
      canSelect: function () {
        return productsWithInventory.length > 0;
      },
      select: function () {
        var randomIndex = Math.floor(Math.random() * productsWithInventory.length);
        var productWithInventory = productsWithInventory.splice(randomIndex, 1)[0];
        return {
          store: store,
          product: productWithInventory.product,
          inventory: productWithInventory.inventory
        };
      }
    };
  };
});
