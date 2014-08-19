describe('nodeList(options)', function () {
    var nodeList = require('node-list'),
        assert = require('assert');

    it('should return an element list', function () {
        var list = nodeList();
        console.log(list);
        assert(list['test']);
        assert(list['test-form']);
        assert(list['mocha']);
        assert(list['mocha-report']);
        assert(list['mocha-stats']);
        assert(list['test-input']);
    });
});
