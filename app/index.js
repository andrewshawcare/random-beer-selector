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
          product: products.splice(randomProductIndex, 1)[0]
        };
      }
    };
  };
});
