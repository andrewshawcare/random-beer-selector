define(["./index", "lib/es6-promise"], function (LcboService, Es6Promise) {
  describe("LCBO Service", function () {
    it("should be defined", function () {
      expect(LcboService).toBeDefined();
    });

    it("should provide a product iterator", function () {
      expect(LcboService.hasOwnProperty("getProductIterator")).toBe(true);
      expect(typeof LcboService.getProductIterator).toBe("function");
    });

    it("should provide an inventory iterator", function () {
      expect(LcboService.hasOwnProperty("getInventoryIterator")).toBe(true);
      expect(typeof LcboService.getInventoryIterator).toBe("function");
    });
  });
});
