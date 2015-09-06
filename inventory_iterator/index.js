define(["lib/es6-promise"], function (Es6Promise) {
  return function (args) {
    var args = args || {};
    var limit = args.limit || Infinity;

    var iterations = 0;

    var done = function () {
      return iterations > limit;
    };

    return {
      next: function () {
        return new Promise(function (resolve, reject) {
          iterations++;

          resolve({
            done: done(),
            value: {
              product_id: 1,
              store_id: 1,
              quantity: 1
            }
          });
        });
      }
    };
  };
});
