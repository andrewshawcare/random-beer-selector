define([
  "product_iterator/index",
  "inventory_iterator/index"
], function (ProductIterator, InventoryIterator) {
  return {
    getProductIterator: ProductIterator,
    getInventoryIterator: InventoryIterator
  };
});
