define(["lib/es6-promise"], function (Es6Promise) {
  return function () {
    return {
      next: function () {
        return new Promise(function (resolve, reject) {
          resolve({
            done: false,
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
