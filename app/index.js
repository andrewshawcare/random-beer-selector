define([], function () {
  return function () {
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
    return {
      canSelect: function () {
        return products.length > 0;
      },
      select: function () {
        var randomProductIndex = Math.floor(Math.random() * products.length);
        return {
          store: {
            id: 511
          },
          product: products.splice(randomProductIndex, 1)[0],
          inventory: inventories.splice(randomProductIndex, 1)[0]
        };
      }
    };
  };
});
