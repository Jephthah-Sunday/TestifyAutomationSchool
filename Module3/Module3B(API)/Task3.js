//Write an API Test to verify the id number of a non-fiction book with the name "Untamed"
pm.test("nonfictionalBook is equal to 10", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.args.nonFictionalBookId).to.eql ("10");
})