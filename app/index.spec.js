define(["./index.js"], function (RandomBeerSelector) {
    describe("Random Beer Selector", function () {
        it("should be defined", function () {
            expect(RandomBeerSelector).toBeDefined();
        });

        it("should select a beer", function () {
            var product = RandomBeerSelector.select();
            expect(product.primary_category).toBe("Beer");
        });
    });
});