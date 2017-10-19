/* eslint-disable
  no-param-reassign,
*/
const loader = require.resolve('./loader.js');

export default function multi(...items) {
  return `${loader}?${JSON.stringify(items).replace(/!/g, '\\u0021')}`;
}
