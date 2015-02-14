var Nodes = require('node-list');
var assert = require('assert');

describe('Nodes', function () {
    it('searches document.body by default', function () {
        var list = Nodes();
        assert(list['test']);
        assert(list['test-form']);
        assert(list['mocha']);
        assert(list['mocha-report']);
        assert(list['mocha-stats']);
        assert(list['test-input']);
    });
    it('searches a given element', function () {
        var div = document.createElement('div');
        var foo = document.createElement('div');
        foo.id = 'foo';
        div.appendChild(foo);
        var list = Nodes(div);
        assert(list['foo']);
    });
    it('finds both names and ids', function () {
        var div = document.createElement('div');
        var foo = document.createElement('div');
        var bar = document.createElement('button');
        foo.id = 'foo';
        bar.name = 'bar'
        div.appendChild(foo);
        div.appendChild(bar);
        var list = Nodes(div);
        assert(list['foo']);
        assert(list['bar']);
    });
});
