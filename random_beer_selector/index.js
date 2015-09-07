define([], function () {
  return function (args) {
    var args = args || {};
    var store = args.store || {};
    var products = args.products || [];
    var inventories = args.inventories || [];

    var filteredProducts = products.filter(function (product) {
      return (
        product.primary_category === "Beer" &&
        product.is_dead === false &&
        product.is_discontinued === false &&
        product.inventory_count > 0
      );
    });

    var filteredInventories = inventories.filter(function (inventory) {
      return (
        inventory.store_id === store.id &&
        inventory.quantity > 0
      );
    });

    var productsWithInventory = filteredProducts.reduce(function (productsWithInventory, product) {
      var inventory = filteredInventories.filter(function (inventory) {
        return inventory.product_id === product.id;
      })[0];
      return (inventory) ?
        productsWithInventory.concat({product: product, inventory: inventory}) :
        productsWithInventory;
    }, []);

    var canSelect = function () {
      return productsWithInventory.length > 0;
    };

    return {
      canSelect: canSelect,
      select: function () {
        if (!canSelect()) {
          return undefined;
        };
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
