describe('elementList(options)', function () {
    var elementList = require('element-list'),
        assert = require('assert');

    it('should return an element list', function () {
        var list = elementList();
        assert(list['test']);
        assert(list['test-form']);
        assert(list['mocha']);
        assert(list['mocha-report']);
        assert(list['mocha-stats']);
        assert(list['test-input'] ===  undefined);
    });

    it('should support options.parentEl', function () {
        var parentEl = document.getElementById('test');
        var list = elementList({parentEl: parentEl});
        assert(list['test-form']);
        assert(list['test'] === undefined);
    });

    it ('should support options.includeNames', function () {
        var list = elementList({includeNames: true});
        assert(list['test-input']);
    });

});