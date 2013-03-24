window.addEventListener('DOMContentLoaded', function(event) {
  var head = document.getElementsByTagName('head')[0];
  var body = document.body;

  var style = document.createElement('style');
  var textarea = document.createElement('textarea');

  style.id = 'my-style';
  textarea.id = 'my-style-input';

  // hide textarea by default
  textarea.style.display = 'none';

  head.appendChild(style);
  body.appendChild(textarea);

  style.innerHTML = localStorage.myStyle || '';
  textarea.value = style.innerHTML;

  // continually update styles with textarea content
  textarea.addEventListener('keyup', function(event) {
    style.innerHTML = textarea.value;
    localStorage.myStyle = style.innerHTML;
  });

  textarea.addEventListener('keydown', function(event) {
    var value = textarea.value;
    var caret = textarea.selectionStart;

    var softTab = '    ';
    var softTabLength = softTab.length;

    // if tab is pressed, insert four spaces
    if (event.keyCode === 9) {
      textarea.value = value.substring(0, caret) + softTab +
        value.substring(caret);

      // move caret to after soft tab
      textarea.setSelectionRange(caret + softTabLength, caret + softTabLength);

      // prevent default tab action that shifts focus to the next element
      event.preventDefault();
    }
  });

  window.addEventListener('keydown', function(event) {
    // command + control + m toggles text area
    if (event.metaKey && event.ctrlKey && event.keyCode === 77) {
      if (textarea.style.display == 'none') {
        textarea.style.display = 'block';
      } else {
        textarea.style.display = 'none';
      }
    }
  });
});
