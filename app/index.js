define([], function () {
    return {
        select: function () {
            return {
              store: {
                id: 511
              },
              product: {
                primary_category: "Beer",
                is_dead: false,
                is_discontinued: false,
                inventory_count: 1
              }
            };
        }
    };
});
