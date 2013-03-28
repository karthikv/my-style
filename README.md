# My Style
[My Style](https://chrome.google.com/webstore/detail/my-style/ljdhjpmbnkbengahefamnhmegbdifhlb)
is a Google Chrome extension that allows you to insert custom CSS into pages,
immediately see the visual results, and have that CSS persist for future
visits.

## Usage
Take TechCrunch, for example. You may dislike the site's design and want to add
your own touch--that is, your own style--to make it aesthetically pleasing.
After installing the extension, visit [TechCrunch](http://techcrunch.com) and
hit control + m in your browser. You should see a textarea to the right:

![Techcrunch textarea](https://raw.github.com/karthikv/my-style/master/screenshots/techcrunch-textarea.png)

Insert your custom CSS and see results:

![Techcrunch restyled](https://raw.github.com/karthikv/my-style/master/screenshots/techcrunch-restyled.png)

(Note: if you'd like this specific Techcrunch skin, it's available at
[styles/techcrunch.css](https://github.com/karthikv/my-style/blob/master/styles/techcrunch.css).)

This CSS will be reinserted upon revisiting Techcrunch, thereby saving your
styles. Pressing control + m once more will hide the textarea, but your
contents will still be retained.

To speed up the process of styling, if you hold alt while clicking an element,
a selector for that element will automatically be appended to the textarea
editor. With this, you can circumvent the time it takes to inspect the element
to find how to target it.

## Installation
You may install My Style at the
[Chrome Web Store](https://chrome.google.com/webstore/detail/my-style/ljdhjpmbnkbengahefamnhmegbdifhlb).
Just click the 'Add to Chrome' button.

## How it Works
My Style is quite simple. It inserts a textarea into the page, looks for
changes to the textarea's contents, and updates a dynamically inserted style
tag appropriately. My Style employs local storage to make CSS changes
persistent. It uses simple technologies for a simple result.

## Improvements
Sites that clear local storage can erase My Style's custom CSS. A more
persistent form of storage (e.g. the JavaScript FileSystem APIs) would be
a better option to retain CSS.

## Contributors
### Karthik Viswanathan
- GitHub: [@karthikv](https://github.com/karthikv)
- Twitter: [@karthikvnet](https://twitter.com/karthikvnet)
- Website: [http://karthikv.net](http://karthikv.net)
- Email: me@karthikv.net

## License
(The MIT License)

Copyright (c) 2013 Karthik Viswanathan &lt;me@karthikv.net&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
