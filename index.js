'use strict';

/**
 * Create a node object of all ids and names
 * @param  {DOM Element} el
 * @return {Object}         Returns a node object
 * @api public
 */
module.exports = function (el) {
    var el = el || document.body;
        ids = {},
        elements = [],
        i = 0,
        length;

    elements = options.parentEl.getElementsByTagName('*');
    length = elements.length;

    for (i, length = elements.length; i < length; ++i) {
        el = elements[i];
        if (el.id) {
            ids[el.id] = el;
        } else if (el.name) {
            ids[el.name] = elements[i];
        }
    }

    return ids;
};
