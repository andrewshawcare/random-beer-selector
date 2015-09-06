define(["lib/es6-promise", "lib/jquery"], function (Es6Promise, $) {
  return {
    getProductIterator: function (args) {
      var per_page = 100;
      var current_page = 1;
      var is_final_page = false;
      var products = [];
      var done = function () {
        return products.length === 0 && is_final_page;
      }

      return {
        next: function () {
          return {
            done: done(),
            value: new Promise(function (resolve, reject) {
              if (done()) {
                reject("No more products");
              }

              if (products.length === 0) {
                $.ajax({
                  url: "http://lcboapi.com/products",
                  dataType: "jsonp",
                  data: {
                    page: current_page++,
                    per_page: per_page
                  }
                })
                .then(function (response) {
                  is_final_page = response.is_final_page;
                  products = response.result;
                  resolve(products.pop());
                })
                .fail(reject);
              } else {
                resolve(products.pop());
              }
            })
          };
        }
      };
    }
  };
});
