define(["./index.js"], function (RandomBeerSelector) {
  describe("Random Beer Selector", function () {
    var store = {id: 511};
    var products = [
      { id: 1, primary_category: "Beer", is_dead: false, is_discontinued: false, inventory_count: 1 },
      { id: 2, primary_category: "Beer", is_dead: false, is_discontinued: false, inventory_count: 1 },
      { id: 3, primary_category: "Beer", is_dead: false, is_discontinued: false, inventory_count: 1 },
      { id: 4, primary_category: "Beer", is_dead: true, is_discontinued: false, inventory_count: 1 },
      { id: 5, primary_category: "Beer", is_dead: false, is_discontinued: true, inventory_count: 1 },
      { id: 6, primary_category: "Beer", is_dead: false, is_discontinued: false, inventory_count: 0 },
      { id: 7, primary_category: "Wine", is_dead: false, is_discontinued: false, inventory_count: 1 },
      { id: 8, primary_category: "Beer", is_dead: false, is_discontinued: false, inventory_count: 1 },
      { id: 9, primary_category: "Beer", is_dead: false, is_discontinued: false, inventory_count: 1 }
    ];
    var inventories = [
      { product_id: 1, store_id: 511, quantity: 1 },
      { product_id: 2, store_id: 511, quantity: 1 },
      { product_id: 3, store_id: 511, quantity: 0 },
      { product_id: 4, store_id: 511, quantity: 1 },
      { product_id: 5, store_id: 511, quantity: 1 },
      { product_id: 6, store_id: 511, quantity: 1 },
      { product_id: 7, store_id: 511, quantity: 1 },
      { product_id: 9, store_id: 512, quantity: 1 }
    ];
    var randomBeerSelector;

    beforeEach(function () {
      randomBeerSelector = RandomBeerSelector({
        store: store,
        products: products,
        inventories: inventories
      });
    });

    it("is a function", function () {
      expect(RandomBeerSelector).toBeDefined();
      expect(typeof RandomBeerSelector).toBe("function");
    });

    it("works without arguments", function () {
      expect(RandomBeerSelector).not.toThrow();
    });

    it("produces an object", function () {
      expect(randomBeerSelector).toBeDefined();
      expect(randomBeerSelector).not.toBeNull();
      expect(typeof randomBeerSelector).toBe("object");
    });

    it("selects a beer", function () {
      var selection;
      while (randomBeerSelector.canSelect()) {
        selection = randomBeerSelector.select();
        expect(selection.product.primary_category).toBe("Beer");
      }
    });

    it("selects an available product", function () {
      var selection;
      while (randomBeerSelector.canSelect()) {
        selection = randomBeerSelector.select();
        expect(selection.product.is_dead).toBe(false);
        expect(selection.product.is_discontinued).toBe(false);
        expect(selection.product.inventory_count).toBeGreaterThan(0);
      }
    });

    it("should select a product from store 511", function () {
      var selection;
      while (randomBeerSelector.canSelect()) {
        var selection = randomBeerSelector.select();
        expect(selection.store.id).toBe(511);
      }
    });

    it("should select a product with inventory at the selected store", function () {
      var selection;
      while (randomBeerSelector.canSelect()) {
        selection = randomBeerSelector.select();
        expect(selection.product.id).toEqual(selection.inventory.product_id);
        expect(selection.store.id).toBe(selection.inventory.store_id);
        expect(selection.inventory.quantity).toBeGreaterThan(0);
      }
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

    it("should return undefined if no more selections are available", function () {
      while (randomBeerSelector.canSelect() && randomBeerSelector.select()) {}
      expect(randomBeerSelector.select()).not.toBeDefined();
    });
  });
});
