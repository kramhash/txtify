txtify
======

Browserify transform to require text file.

# install
```
npm install txtify
```

# Usage

Add txtify transform for grunt-browserify in Gruntfile.js

```js
browserify: {
  compile: {
    options: {
      transform: ['txtify']
    }
  }
}
```

You can use txtify comment in template file to pickup specified section of text.

```html
<!doctype html>
<html>
  <head></head>
  <body>
    <!-- txtify -->
    contents
    <!-- endtxtify -->
  </body>
</html>
```

As a result, you get text `contents` only.

# licence
MIT
