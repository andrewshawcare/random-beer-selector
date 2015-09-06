define(["./index"], function (ProductComponent) {
  describe("Product Component", function () {
    it("exists", function () {
      expect(ProductComponent.create()).toExist();
    });

    it("is not in the DOM", function () {
      expect(ProductComponent.create()).not.toBeInDOM();
    });
  });
});
