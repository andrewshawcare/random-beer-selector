define(["lib/es6-promise", "lib/jquery"], function (Es6Promise, $) {
  return {
    getProductIterator: function (args) {
      return {
        next: function () {
          return {
            done: false,
            value: new Promise(function (resolve, reject) {
              resolve({
                id: 1,
                is_dead: false,
                name: "",
                is_discontinued: false,
                primary_category: "Beer",
                inventory_count: 1
              });
            })
          };
        }
      };
    }
  };
});
