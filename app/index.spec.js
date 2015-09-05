define(["./index.js"], function (RandomBeerSelector) {
    describe("Random Beer Selector", function () {
        it("should be defined", function () {
            expect(RandomBeerSelector).toBeDefined();
        });

        it("should select a beer", function () {
            var selection = RandomBeerSelector.select();
            expect(selection.product.primary_category).toBe("Beer");
        });

        it("should select an available product", function () {
            var selection = RandomBeerSelector.select();
            expect(selection.product.is_dead).toBe(false);
            expect(selection.product.is_discontinued).toBe(false);
            expect(selection.product.inventory_count).toBeGreaterThan(0);
        });

        it("should select a product from store 511", function () {
          var selection = RandomBeerSelector.select();
          expect(selection.store.id).toBe(511);
        });
    });
});
