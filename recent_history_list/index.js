define([], function () {
  return function () {
    var items = [];

    return {
      add: function (value) {
        items.push({
          value: value,
          created: new Date()
        });
      },
      pop: function () {
        return items.shift();
      }
    };
  };
});
