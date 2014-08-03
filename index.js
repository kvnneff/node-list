'use strict';

/**
 * Create a node object of all ids and (optional) names
 * @param  {Object} options
 * @param  {boolean} options.includeNames Inlude named elements
 * @param  {DOM Element} options.parentEl The element to select from
 * @return {Object}         Returns a node object
 */
module.exports = function (options) {
    var options = options || {},
        ids = {},
        elements = [],
        i = 0,
        length,
        el;

    options.parentEl = options.parentEl || document;
    options.includeNames = options.includeNames || false;

    elements = options.parentEl.getElementsByTagName('*');
    length = elements.length;

    for (i, length = elements.length; i < length; ++i) {
        el = elements[i];
        if (el.id) {
            ids[el.id] = el;
        } else if (options.includeNames && el.name) {
            ids[el.name] = elements[i];
        }
    }

    return ids;
};