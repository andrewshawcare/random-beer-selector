define(["lib/es6-promise"], function (Es6Promise) {
  return function () {
    return {
      next: function () {
        return new Promise(function (resolve, reject) {
          resolve({
            done: false,
            value: undefined
          });
        });
      }
    };
  };
});
