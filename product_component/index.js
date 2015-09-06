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

      if (args.serving_suggestion) {
        var servingSuggestionElement = document.createElement("div");
        servingSuggestionElement.classList.add("servingSuggestion");
        servingSuggestionElement.innerText = args.serving_suggestion;
        productElement.appendChild(servingSuggestionElement);
      }

      return productElement;
    }
  };
});
