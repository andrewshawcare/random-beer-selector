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
      },
      {
        id: 3,
        primary_category: "Beer",
        is_dead: false,
        is_discontinued: false,
        inventory_count: 1
      },
      {
        id: 4,
        primary_category: "Beer",
        is_dead: true,
        is_discontinued: false,
        inventory_count: 1
      },
      {
        id: 5,
        primary_category: "Beer",
        is_dead: false,
        is_discontinued: true,
        inventory_count: 1
      },
      {
        id: 6,
        primary_category: "Beer",
        is_dead: false,
        is_discontinued: false,
        inventory_count: 0
      },
      {
        id: 7,
        primary_category: "Wine",
        is_dead: false,
        is_discontinued: false,
        inventory_count: 1
      },
      {
        id: 8,
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
      },
      {
        product_id: 3,
        store_id: 511,
        quantity: 0
      },
      {
        product_id: 4,
        store_id: 511,
        quantity: 1
      },
      {
        product_id: 5,
        store_id: 511,
        quantity: 1
      },
      {
        product_id: 6,
        store_id: 511,
        quantity: 1
      },
      {
        product_id: 7,
        store_id: 511,
        quantity: 1
      }
    ];
    var filteredProducts = products.filter(function (product) {
      return (
        product.primary_category === "Beer" &&
        product.is_dead === false &&
        product.is_discontinued === false &&
        product.inventory_count > 0
      );
    });
    var filteredInventories = inventories.filter(function (inventory) {
      return inventory.quantity > 0;
    });
    var productsWithInventory = filteredProducts.reduce(function (productsWithInventory, product) {
      var inventory = filteredInventories.filter(function (inventory) {
        return inventory.product_id === product.id;
      })[0];
      return (inventory) ?
        productsWithInventory.concat({product: product, inventory: inventory}) :
        productsWithInventory
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
