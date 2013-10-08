var through = require('through');
var fs = require('fs');

function txtfiy(file) {
  if (!(/\.(tmpl|html|txt)$/).test(file)) return through();
  var data = '', stream = through(write, end);

  return stream;

  function write(buf) {
    data += buf;
  }

  function end() {
    stream.queue(format(data));
    stream.queue(null);
  }

  function format(text) {
    var matches = text.match(/<\!\-\- txtify \-\->\s*([\s\S]+)[\s\n]*<\!\-\- endtxtify \-\->/im);
    if (matches) {
      text = matches[1];
    }
    text = text.trim();
    text = text.replace(/\"/g, '\u005C\u0022');
    text = '"' + text + '"'

    return "module.exports=" + text + ";\n";
  }
}

module.exports = txtfiy;

