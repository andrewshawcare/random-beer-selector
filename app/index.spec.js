define(["./index.js"], function (RandomBeerSelector) {
    describe("Random Beer Selector", function () {
      var randomBeerSelector;

      beforeEach(function () {
        randomBeerSelector = RandomBeerSelector();
      });

        it("should be defined", function () {
            expect(randomBeerSelector).toBeDefined();
        });

        it("should select a beer", function () {
            var selection = randomBeerSelector.select();
            expect(selection.product.primary_category).toBe("Beer");
        });

        it("should select an available product", function () {
            var selection = randomBeerSelector.select();
            expect(selection.product.is_dead).toBe(false);
            expect(selection.product.is_discontinued).toBe(false);
            expect(selection.product.inventory_count).toBeGreaterThan(0);
        });

        it("should select a product from store 511", function () {
          var selection = randomBeerSelector.select();
          expect(selection.store.id).toBe(511);
        });

        it("should select a product with inventory at the selected store", function () {
          var selection = randomBeerSelector.select();
          expect(selection.product.id).toEqual(selection.inventory.product_id);
          expect(selection.store.id).toBe(selection.inventory.store_id);
          expect(selection.inventory.quantity).toBeGreaterThan(0);
        });

        it("should not select the same product", function () {
          var selectedProductIds = {};
          var selection;
          while (randomBeerSelector.canSelect()) {
            selection = randomBeerSelector.select();
            expect(selectedProductIds.hasOwnProperty(selection.product.id)).toBe(false);
            selectedProductIds[selection.product.id] = true;
          }
        });
    });
});
