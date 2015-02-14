'use strict';

/**
 * Create a node object of all elements with ids and names
 * @param  {DOM Element} el
 * @return {Object}
 * @api public
 */
module.exports = function (el) {
    var el = el || document.body;
    var elements = el.querySelectorAll('*');
    var length = elements.length;
    var nodes = {};
    var i = 0;

    for (i; i < length; ++i) {
        el = elements[i];
        if (el.name) {
            nodes[el.name] = el;
        } else if (el.id) {
            nodes[el.id] = elements[i];
        }
    }
    return nodes;
};
