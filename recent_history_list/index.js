define([], function () {
  return function () {
    return {
      add: function () {},
      pop: function () {
        return {
          value: "Item",
          created: new Date()
        };
      }
    };
  };
});
