element-list
===

Returns an object list with all IDs or NAMEs within an element.

Installation
---

    $ component install staygrimm/element-list

API
---

**elementList({parentElement: document, includeNames: false});**

Retrieve a list of elements with IDs and (optional) NAMEs contained within the given `parentElement`.

Example
---
    <body>
        <div id="div1"></div>
        <div id="div-2"></div>
    </body>


    var elementList = require('element-list'),
        nodes;

    nodes = elementList();

    console.log(nodes.div1);
    console.log(nodes['div-2']);

Tests
---

    $ make test


License
---

(The MIT License)

Copyright (c) 2013 River Grimm river.grimm@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.