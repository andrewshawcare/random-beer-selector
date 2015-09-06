define(["lib/es6-promise", "lib/jquery"], function (Es6Promise, $) {
  var getProductPage = function (data) {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: "http://lcboapi.com/products",
        dataType: "jsonp",
        data: data
      })
      .then(resolve)
      .fail(reject);
    });
  };
  return {
    getProducts: function (args) {
      var store_id = args.store_id;
      return getProductPage({ page: 1, per_page: 100, store_id: store_id })
      .then(function (response) {
        var total_pages = response.pager.total_pages;
        var i;
        var pages = [];
        for (i = 1; i <= total_pages; i++) {
          pages.push(
            getProductPage({ page: i, per_page: 100, store_id: store_id })
          );
        }
        return Promise.all(pages).then(function (responses) {
          return responses.reduce(function (products, response) {
            return products.concat(response.result);
          }, []);
        });
      });
    }
  };
});
