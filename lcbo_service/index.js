define(["lib/es6-promise"], function (Es6Promise) {
  return {
    getProducts: function () {
      return new Promise(function (resolve, reject) {
        resolve([]);
      });
    }
  };
});
