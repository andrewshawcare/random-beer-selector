define(["./index"], function (LcboService) {
  describe("LCBO Service", function () {
    it("should be defined", function () {
      expect(LcboService).toBeDefined();
    });

    it("should return products for a given store", function (done) {
      LcboService.getProducts({ store_id: 511 })
      .then(function (products) {
        expect(Array.isArray(products)).toBe(true);
      })
      .catch(fail)
      .then(done);
    });
  });
});
