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
  });
});
