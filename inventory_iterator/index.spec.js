define(["lib/es6-promise", "./index.js"], function (Es6Promise, InventoryIterator) {
  describe("Inventory Iterator", function () {
    it("should return an async iterator", function (done) {
      var inventoryIterator = InventoryIterator();

      expect(inventoryIterator).toBeDefined();
      expect(inventoryIterator).not.toBeNull();
      expect(typeof inventoryIterator).toBe("object");

      expect(inventoryIterator.hasOwnProperty("next")).toBe(true);
      expect(typeof inventoryIterator.next).toBe("function");

      var promise = inventoryIterator.next();

      expect(promise).toBeDefined();
      expect(promise).not.toBeNull();
      expect(promise instanceof Promise).toBe(true);

      promise.then(function (next) {
        expect(next.hasOwnProperty("done")).toBe(true);
        expect(typeof next.done).toBe("boolean");

        expect(next.hasOwnProperty("value")).toBe(true);
      })
      .catch(done.fail)
      .then(done);
    });

    it("should return an inventory", function (done) {
      var inventoryIterator = InventoryIterator();

      inventoryIterator.next().then(function (next) {
        var inventory = next.value;

        expect(inventory).toBeDefined();

        expect(inventory.hasOwnProperty("id")).toBe(true);
        expect(typeof inventory.id).toBe("number");

        expect(inventory.hasOwnProperty("is_dead")).toBe(true);
        expect(typeof inventory.is_dead).toBe("boolean");

        expect(inventory.hasOwnProperty("name")).toBe(true);
        expect(typeof inventory.name).toBe("string");

        expect(inventory.hasOwnProperty("is_discontinued")).toBe(true);
        expect(typeof inventory.is_discontinued).toBe("boolean");

        expect(inventory.hasOwnProperty("primary_category")).toBe(true);
        expect(typeof inventory.primary_category).toBe("string");

        expect(inventory.hasOwnProperty("inventory_count")).toBe(true);
        expect(typeof inventory.inventory_count).toBe("number");
      })
      .catch(done.fail)
      .then(done);
    });
  });
});
