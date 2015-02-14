node-list
===

Returns an object list with all IDs or NAMEs within an element.

Installation
---
component/duo:

    $ component install staygrimm/node-list

npm:

    $ npm install node-list

API
---

**nodes([element])**

Creates an object listing all elements with NAME or ID attributes for easy lookup.  If `element` is not given `document.body` will be searched instead.  ID's take precedence over NAMEs if an element has both.

Example
---
    <body>
        <div id="header"></div>
            <button name="button"></button>
        <div id="footer"></div>
    </body>



    var nodes = require('node-list');
    var list;

    list = nodes();
    console.log(nodes.header);
    console.log(nodes.button);
    console.log(nodes.footer);

Tests
---

    $ make test


License
---

(The MIT License)

Copyright (c) 2015 River Grimm river.grimm@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
