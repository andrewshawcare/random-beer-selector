define([], function () {
  return {
    create: function () {
      var element = document.createElement("div");
      element.classList.add("product");
      return element;
    }
  };
});
