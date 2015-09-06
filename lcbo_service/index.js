define(["lib/es6-promise", "lib/jquery"], function (Es6Promise, $) {
  return {
    getProducts: function (args) {
      var store_id = args.store_id;
      return new Promise(function (resolve, reject) {
        $.ajax({
          url: "http://lcboapi.com/products",
          dataType: "jsonp",
          data: {
            per_page: 100,
            store_id: store_id
          }
        })
          .then(function (response) {
            resolve(response.result);
          })
          .fail(reject);
      });
    }
  };
});
