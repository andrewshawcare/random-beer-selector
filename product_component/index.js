define([], function () {
  return {
    create: function (args) {
      var args = args || {};

      var productElement = document.createElement("div");
      productElement.classList.add("product");

      if (args.name) {
        var nameElement = document.createElement("div");
        nameElement.classList.add("name");
        nameElement.innerText = args.name;
        productElement.appendChild(nameElement);
      }

      return productElement;
    }
  };
});
