var Nodes = require('../');
var assert = require('component/assert');

describe('Nodes', function () {
    it('searches document.body by default', function () {
        var list = Nodes();
        assert(list.id['mocha']);
    });
    it('searches a given element', function () {
        var div = document.createElement('div');
        var foo = document.createElement('div');
        foo.id = 'foo';
        div.appendChild(foo);
        var list = Nodes(div);
        assert(list.id['foo']);
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
        assert(list.id['foo']);
        assert(list.name['bar']);
    });
});
