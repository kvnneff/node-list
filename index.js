'use strict';

/**
 * Create a node object of all elements with ids and names
 * @param  {DOM Element} el
 * @return {Object}
 * @api public
 */
module.exports = function (el) {
    var el = el || document.body,
        nodes = {},
        elements = [],
        i = 0,
        length;

    elements = el.querySelectorAll('*');
    length = elements.length;

    for (i, length = elements.length; i < length; ++i) {
        el = elements[i];
        if (el.id) {
            nodes[el.id] = el;
        } else if (el.name) {
            nodes[el.name] = elements[i];
        }
    }

    return nodes;
};
