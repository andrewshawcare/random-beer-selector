define(["lib/es6-promise", "lib/jquery"], function (Es6Promise, $) {
  return {
    getProductIterator: function (args) {
      var args = args || {};
      var limit = args.limit || Infinity;
      var query = args.query || {};

      var iterations = 0;
      var per_page = (limit <= 5) ? 5 : (limit < 100) ? limit : 100;
      var current_page = 1;
      var is_final_page = false;

      var products = [];

      var done = function () {
        return (
          iterations > limit ||
          (
            products.length === 0 &&
            is_final_page
          )
        );
      }

      return {
        next: function () {
          return new Promise(function (resolve, reject) {
            iterations++;

            if (done()) {
              resolve({ done: true });
            } else if (products.length === 0) {
              $.ajax({
                url: "http://lcboapi.com/products",
                dataType: "jsonp",
                data: $.extend({}, query, {page: current_page, per_page: per_page})
              })
              .then(function (response) {
                current_page = response.next_page;
                is_final_page = response.is_final_page;
                if (!Array.isArray(response.result)) {
                  reject(response.message);
                } else {
                  products = response.result;
                  resolve({
                    done: false,
                    value: products.pop()
                  });
                }
              })
              .fail(reject);
            } else {
              resolve({
                done: false,
                value: products.pop()
              });
            }
          });
        }
      };
    }
  };
});
