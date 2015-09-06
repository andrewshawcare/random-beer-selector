define(["lib/es6-promise", "./index"], function (Es6Promise, ProductIterator) {
  describe("Product Iterator", function () {
    it("should return an async iterator", function (done) {
      var productIterator = ProductIterator();

      expect(productIterator).toBeDefined();
      expect(productIterator).not.toBeNull();
      expect(typeof productIterator).toBe("object");

      expect(productIterator.hasOwnProperty("next")).toBe(true);
      expect(typeof productIterator.next).toBe("function");

      var promise = productIterator.next();

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

    it("should return a product", function (done) {
      var productIterator = ProductIterator();

      productIterator.next().then(function (next) {
        var product = next.value;

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
    });

    it("should accept a limit", function (done) {
      var productIterator = ProductIterator({limit: 1});

      productIterator.next().then(function (firstNext) {
        productIterator.next().then(function (secondNext) {
          expect(firstNext.done).toBe(false);
          expect(secondNext.done).toBe(true);
        })
        .catch(done.fail)
        .then(done);
      })
      .catch(done.fail);
    });

    it("should accept query parameters", function (done) {
      var productIterator = ProductIterator({
        limit: 2,
        query: {
          where: "is_kosher",
          where_not: "is_dead",
          order: "id",
          q: "wine",
          store_id: 511
        }
      });

      productIterator.next().then(function (firstNext) {
        productIterator.next().then(function (secondNext) {
          var products = [firstNext.value, secondNext.value];
          products.forEach(function (product) {
            expect(product.is_kosher).toBe(true);
            expect(product.is_dead).toBe(false);
            expect(product.tags).toMatch("wine");
          });
          expect(products[0].id).toBeLessThan(products[1].id);
        })
        .catch(done.fail)
        .then(done);
      })
      .catch(done.fail);
    });
  });
});
