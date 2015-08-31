define(["./index.js"], function (RandomBeerSelector) {
    describe("Random Beer Selector", function () {
        it("should be defined", function () {
            expect(RandomBeerSelector).toBeDefined();
        });

        it("should select a beer", function () {
            var product = RandomBeerSelector.select();
            expect(product.primary_category).toBe("Beer");
        });

        it("should select an available product", function () {
            var product = RandomBeerSelector.select();
            expect(product.is_dead).toBe(false);
            expect(product.is_discontinued).toBe(false);
            expect(product.inventory_count).toBeGreaterThan(0);
        });
    });
});