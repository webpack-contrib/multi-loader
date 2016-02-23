# multi-loader

This loader requires a module multiple times, each time loaded with a different loader. Like in a multi entry point the exports of the last item are exported.

A normal user probably won't need this loader, but it's useful in combination with other loaders.

Example:

``` javascript
var multi = require("multi-loader");
{
	module: {
		loaders: [
			{
				test: /\.css$/,
				// Add CSS to the DOM
				// and
				// Return the raw content
				loader: multi(
					"style-loader!css-loader!autoprefixer-loader",
					"raw-loader"
				)
			}
		]
	}
}
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
