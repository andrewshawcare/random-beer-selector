require([
  "lib/es6-promise",
  "lib/consume-async-iterator",
  "lcbo_service/index",
  "random_beer_selector/index",
  "product_component/index"
], function (
  Es6Promise,
  consumeAsyncIterator,
  LcboService,
  RandomBeerSelector,
  ProductComponent
) {
  var store_id = 511;

  var productIterator = LcboService.getProductIterator({
    query: {
      where_not: "is_dead,is_discontinued",
      q: "beer",
      store_id: store_id
    }
  });
  var inventoryIterator = LcboService.getInventoryIterator({
    query: {
      where_not: "is_dead",
      store_id: store_id
    }
  });

  Promise.all([
    consumeAsyncIterator(productIterator),
    consumeAsyncIterator(inventoryIterator)
  ]).then(function (resolutions) {
    var randomBeerSelector = RandomBeerSelector({
      store: {id: store_id},
      products: resolutions[0],
      inventories: resolutions[1]
    });

    var selectAndRenderProduct = function () {
      var next = randomBeerSelector.next();
      if (next.done) {
        document.body.innerHTML = "You've tried every beer! Great job?";
      } else {
        var selection = next.value;
        var product = $.extend({}, selection.product, {
          action: {
            text: "Select another beer!",
            onclick: selectAndRenderProduct
          }
        });
        document.body.innerHTML = "";
        document.body.appendChild(ProductComponent(product));
      }
    };

    selectAndRenderProduct();
  });
});
