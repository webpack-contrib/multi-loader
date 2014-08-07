var multi = require("../");
module.exports = {
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: multi("style!css", "raw")
			}
		]
	}
}