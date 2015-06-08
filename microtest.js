module.exports = function(context) {
    context.describe = function (){
        if (typeof spaces === "undefined") {
            spaces = '';
            console.log('Running test: ' + arguments[0]);
        } else {
            spaces += '  ';
            console.log(spaces + 'Running test: ' + arguments[0]);
        }
        arguments[1].apply(spaces);
        spaces = spaces.slice(0, -2);
    };
    context.it = function () {
        results = [];
        spaces += '  ';
        arguments[1].apply(results);
        var result = results.reduce(function(acu, act) { return act && acu }, true) ? "[PASSED]" : "[FAILED]";
        console.log(spaces + result + ' ' + arguments[0]);
        spaces = spaces.slice(0, -2);
    };
    context.assert = {
        assertEquals: function () {
            if (arguments[0] === arguments[1]) {
                results.push(true);
            } else {
                results.push(false);
            }
        },
        assertNotEquals: function () {
            if (typeof arguments[0] !== typeof arguments[1]) {
                results.push(true);
            } else {
                results.push(false);
            }
        }
    };
};
