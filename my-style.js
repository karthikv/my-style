// asynchronous self-invoking function to not pollute global namespace
(function(window, document, undefined) {
  var TAB_KEY_CODE = 9;
  var M_KEY_CODE = 77;

  var SOFT_TAB = '    ';
  var SOFT_TAB_LENGTH = SOFT_TAB.length;

  window.addEventListener('DOMContentLoaded', function(event) {
    var head = document.getElementsByTagName('head')[0];
    var body = document.body;

    var style = document.createElement('style');
    var textarea = document.createElement('textarea');

    // hide textarea by default
    textarea.style.display = 'none';
    textarea.id = 'my-style-input';

    head.appendChild(style);
    body.appendChild(textarea);

    style.innerHTML = localStorage.myStyle || '';
    textarea.value = style.innerHTML;

    // continually update styles with textarea content
    textarea.addEventListener('keyup', function(event) {
      style.innerHTML = textarea.value;
      localStorage.myStyle = style.innerHTML;
    });

    // pressing tab should insert spaces instead of focusing another element
    textarea.addEventListener('keydown', function(event) {
      var value = textarea.value;
      var caret = textarea.selectionStart;

      // if tab is pressed, insert four spaces
      if (event.keyCode === TAB_KEY_CODE) {
        textarea.value = value.substring(0, caret) + SOFT_TAB +
          value.substring(caret);

        // move caret to after soft tab
        textarea.setSelectionRange(caret + SOFT_TAB_LENGTH, caret +
          SOFT_TAB_LENGTH);

        // prevent default tab action that shifts focus to the next element
        event.preventDefault();
      }
    });

    window.addEventListener('keydown', function(event) {
      // command + control + m toggles text area
      if (event.metaKey && event.ctrlKey && event.keyCode === M_KEY_CODE) {
        if (textarea.style.display == 'none') {
          textarea.style.display = 'block';
        } else {
          textarea.style.display = 'none';
        }
      }
    });
  });
})(this, this.document);
