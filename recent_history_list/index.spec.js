define(["./index.js"], function (RecentHistoryList) {
  describe("Recent History List", function () {
    it("provides a date of entry", function () {
      var recentHistoryList = RecentHistoryList();
      recentHistoryList.add("Item");
      var recentItem = recentHistoryList.pop();
      expect(recentItem.created.toString()).toBe(new Date().toString());
    });
  });
});
