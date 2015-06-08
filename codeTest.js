var code = require("./code.js"),
    microtest = require("./microtest.js");

// Set the functions globally
microtest(GLOBAL);

describe("Code test", function () {
    describe("Basic tests", function () {
        it("Our lib should be defined", function () {
            assert.assertNotEquals(code, undefined);
        });

        it("Should have an add function defined", function () {
            assert.assertNotEquals(code.add, undefined);
        });

        it("Should have a concat funtion defined", function() {
            assert.assertNotEquals(code.concat, undefined);
        });
    });
    describe("Functionality tests", function() {
        it("Should add properly", function () {
            assert.assertEquals(code.add(5, 6), 11);
            assert.assertEquals(code.add(9, 10), 19);
        });
        it("Should concat properly", function () {
            assert.assertEquals(code.concat("a", "b"), "ab");
            assert.assertEquals(code.concat("Juan", "Perez"), "JuanPerez");
        });
    });
    describe("This one fails", function () {
        it("Should fail", function () {
            assert.assertEquals(code.add(2, 3), 5);
            assert.assertEquals(code.add(2, 3), 6);
            assert.assertNotEquals(code.add(2, 3), 6);
        });
    });
    it("A passing it", function() {
        assert.assertEquals(code.concat("", ""), "");
    });
});
