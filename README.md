# file plus loader for webpack

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

``` javascript
loaders: [{
  test: /\.(jpg|jpeg|gif|swf|png|eot|woff|ttf|svg)$/,
  loader: 'file-plus',
    query: {
      context: 'some dir',
      name: '[path][name].[ext]',
      map: function(url) {
        return url;
      }
    }
  }...
```

By default the file-loader cann't support a filter for the url, this loader can set a function how to fix the url.

## More

file-loader: https://github.com/webpack/file-loader

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
