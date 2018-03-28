const loader = require.resolve('./index.loader.js');
module.exports = function defaultLoader(...args) {
  const [first] = args;
  let loaders;

  if (Array.isArray(first)) {
    loaders = first.slice(0);
  } else {
    loaders = Array.prototype.slice.call(...args);
  }

  return `${loader}?${JSON.stringify(loaders).replace(/!/g, '\\u0021')}`;
};
