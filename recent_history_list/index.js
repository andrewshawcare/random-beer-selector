define([], function () {
  return function () {
    return {
      add: function () {},
      pop: function () {
        return {
          created: new Date()
        };
      }
    };
  };
});
