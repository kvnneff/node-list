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
        assert(list['test'] ===  undefined);
    });
});
