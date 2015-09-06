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

        expect(inventory.hasOwnProperty("product_id")).toBe(true);
        expect(typeof inventory.product_id).toBe("number");

        expect(inventory.hasOwnProperty("store_id")).toBe(true);
        expect(typeof inventory.store_id).toBe("number");

        expect(inventory.hasOwnProperty("quantity")).toBe(true);
        expect(typeof inventory.quantity).toBe("number");
      })
      .catch(done.fail)
      .then(done);
    });

    it("should accept a limit", function (done) {
      var inventoryIterator = InventoryIterator({limit: 1});

      inventoryIterator.next().then(function (firstNext) {
        inventoryIterator.next().then(function (secondNext) {
          expect(firstNext.done).toBe(false);
          expect(secondNext.done).toBe(true);
        })
        .catch(done.fail)
        .then(done);
      })
      .catch(done.fail);
    });

    it("should accept query parameters", function (done) {
      var inventoryIterator = InventoryIterator({
        limit: 2,
        query: {
          where_not: "is_dead",
          order: "quantity",
          store_id: 511
        }
      });

      inventoryIterator.next().then(function (firstNext) {
        inventoryIterator.next().then(function (secondNext) {
          var inventories = [firstNext.value, secondNext.value];
          inventories.forEach(function (inventory) {
            expect(inventory.store_id).toBe(511);
            expect(inventory.is_dead).toBe(false);
          });
          expect(inventories[0].quantity).toBeLessThan(inventories[1].quantity);
        })
        .catch(done.fail)
        .then(done);
      })
      .catch(done.fail);
    });
  });
});
