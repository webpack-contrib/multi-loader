module.exports = function() {};
module.exports.pitch = function(request) {
	this.cacheable();
	var items = JSON.parse(this.query.substr(1));
	items = items.map(function(item) {
		return "require(" + JSON.stringify("-!" + item + "!" + request) + ");";
	});
	var last = items.pop();
	return items.join("\n") + "\nmodule.exports = " + last;
};
