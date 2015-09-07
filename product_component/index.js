define([], function () {
  return function (args) {
    var args = args || {};

    var productElement = document.createElement("div");
    productElement.classList.add("product");

    if (args.image_url) {
      var imageElement = document.createElement("img");
      imageElement.classList.add("image");
      imageElement.setAttribute("src", args.image_url);
      productElement.appendChild(imageElement);
    }

    if (args.name) {
      var nameElement = document.createElement("div");
      nameElement.classList.add("name");
      nameElement.innerText = args.name;
      productElement.appendChild(nameElement);
    }

    if (args.serving_suggestion) {
      var servingSuggestionElement = document.createElement("p");
      servingSuggestionElement.classList.add("servingSuggestion");
      servingSuggestionElement.innerText = args.serving_suggestion;
      productElement.appendChild(servingSuggestionElement);
    }

    if (args.tasting_note) {
      var tastingNoteElement = document.createElement("p");
      tastingNoteElement.classList.add("tastingNote");
      tastingNoteElement.innerText = args.tasting_note;
      productElement.appendChild(tastingNoteElement);
    }

    if (args.action) {
      var actionElement = document.createElement("a");
      actionElement.setAttribute("href", "javascript:void(0)");
      actionElement.classList.add("action");
      actionElement.innerText = args.action.text;
      actionElement.onclick = args.action.onclick;
      productElement.appendChild(actionElement);
    }

    return productElement;
  }
});
