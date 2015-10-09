define(["./index.js"], function (RecentHistoryList) {
  describe("Recent History List", function () {
    var recentHistoryList;

    beforeEach(function () {
      recentHistoryList = RecentHistoryList();
    });

    it("provides the item entered", function () {
      recentHistoryList.add("Item");
      var recentItem = recentHistoryList.shift();
      expect(recentItem.value).toBe("Item");
    });

    it("provides the items entered in the correct order", function () {
      var firstValue = "Item1";
      var secondValue = "Item2";

      recentHistoryList.add(firstValue);
      recentHistoryList.add(secondValue);

      var firstItem = recentHistoryList.shift();
      var secondItem = recentHistoryList.shift();

      expect(firstItem.value).toBe(firstValue);
      expect(secondItem.value).toBe(secondValue);
    });

    it("provides the items entered with descending created date", function (done) {
      recentHistoryList.add();
      setTimeout(function () {
        recentHistoryList.add();

        var firstItem = recentHistoryList.shift();
        var secondItem = recentHistoryList.shift();

        expect(firstItem.created.valueOf()).toBeLessThan(secondItem.created.valueOf());

        done();
      }, 1000);
    });

    it("provides a date of entry", function () {
      recentHistoryList.add("Item");
      var recentItem = recentHistoryList.shift();
      expect(recentItem.created.toString()).toBe(new Date().toString());
    });
  });
});
