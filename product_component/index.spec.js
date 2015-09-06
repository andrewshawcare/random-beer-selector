define(["./index"], function (ProductComponent) {
  describe("Product Component", function () {
    it("exists", function () {
      expect(ProductComponent.create()).toExist();
    });

    it("is not in the DOM", function () {
      expect(ProductComponent.create()).not.toBeInDOM();
    });

    it("has the product class", function () {
      expect(ProductComponent.create()).toHaveClass("product");
    });

    it("conveys the name", function () {
      var productElement = ProductComponent.create({
        name: "Product"
      });
      var nameElement = productElement.querySelector(".name");
      expect(nameElement).toContainText("Product");
    });

    it("conveys the serving suggestion", function () {
      var serving_suggestion = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
      var productElement = ProductComponent.create({
        serving_suggestion: serving_suggestion
      });
      var servingSuggestionElement = productElement.querySelector(".servingSuggestion");
      expect(servingSuggestionElement).toContainText(serving_suggestion);
    });

    it("conveys the tasting note", function () {
      var tasting_note = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
      var productElement = ProductComponent.create({
        tasting_note: tasting_note
      });
      var tastingNoteElement = productElement.querySelector(".tastingNote");
      expect(tastingNoteElement).toContainText(tasting_note);
    });

    it("conveys the image", function () {
      var image = {
        src: "http://www.example.com/image",
        alt: "This is an example image"
      };
      var productElement = ProductComponent.create({
        image: {
          src: image.src,
          alt: image.alt
        }
      });
      var imageElement = productElement.querySelector(".image");
      expect(imageElement).toHaveAttr("src", image.src);
      expect(imageElement).toHaveAttr("alt", image.alt);
    });
  });
});
