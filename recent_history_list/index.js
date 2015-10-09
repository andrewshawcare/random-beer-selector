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
      shift: Array.prototype.shift.bind(items)
    };
  };
});
