/**
 * @return {Function}
 */
var createHelloWorld = function() {
    let text = "Hello World";
    return function(...args) {
        return text;
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */