module.exports = function defaultExport() {};
module.exports.pitch = function multiLoader(request) {
  this.cacheable();
  let items = JSON.parse(this.query.substr(1));
  items = items.map(
    (item) => `require(${JSON.stringify(`-!${item}!${request}`)});`
  );
  const last = items.pop();
  return `${items.join('\n')}\nmodule.exports = ${last}`;
};
