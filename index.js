var loader = require.resolve("./index.loader.js")
module.exports = function(items) {
	if(!Array.isArray(items))
		items = Array.prototype.slice.call(arguments);
	return loader + "?" + JSON.stringify(items).replace(/!/g, "\\u0021");
};
