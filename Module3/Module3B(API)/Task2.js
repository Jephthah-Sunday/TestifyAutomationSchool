
//ALL GET Request must return with 200 OK
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Status code name has string", function () {
    pm.response.to.have.status("Ok");
});

// ALL POST Request must return with 201 Created
pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});

pm.test("Status code name has string", function () {
    pm.response.to.have.status("Created");
});

// ALL Deleted Request must return with 204 No Content
pm.test("Status code is 204", function () {
    pm.response.to.have.status(204);
});

pm.test("Status code name has string", function () {
    pm.response.to.have.status("No Content");
});