define(["./index"], function (LcboService) {
  describe("LCBO Service", function () {
    it("should be defined", function () {
      expect(LcboService).toBeDefined();
    });

    it("should return a product iterator", function () {
      var productIterator = LcboService.getProductIterator();

      expect(productIterator).toBeDefined();
      expect(productIterator).not.toBeNull();
      expect(typeof productIterator).toBe("object");

      expect(productIterator.hasOwnProperty("next")).toBe(true);
      expect(typeof productIterator.next).toBe("function");

      var next = productIterator.next();

      expect(next).toBeDefined();
      expect(next).not.toBeNull();
      expect(typeof next).toBe("object");

      expect(next.hasOwnProperty("done")).toBe(true);
      expect(typeof next.done).toBe("boolean");

      expect(next.hasOwnProperty("value")).toBe(true);
    });

    it("should return a product", function (done) {
      var productIterator = LcboService.getProductIterator();
      var next = productIterator.next();

      if (next.done) {
        done.fail("No products");
      } else {
        next.value
        .then(function (product) {
          expect(product).toBeDefined();

          expect(product.hasOwnProperty("id")).toBe(true);
          expect(typeof product.id).toBe("number");

          expect(product.hasOwnProperty("is_dead")).toBe(true);
          expect(typeof product.is_dead).toBe("boolean");

          expect(product.hasOwnProperty("name")).toBe(true);
          expect(typeof product.name).toBe("string");

          expect(product.hasOwnProperty("is_discontinued")).toBe(true);
          expect(typeof product.is_discontinued).toBe("boolean");

          expect(product.hasOwnProperty("primary_category")).toBe(true);
          expect(typeof product.primary_category).toBe("string");

          expect(product.hasOwnProperty("inventory_count")).toBe(true);
          expect(typeof product.inventory_count).toBe("number");
        })
        .catch(done.fail)
        .then(done);
      }
    });
  });
});
